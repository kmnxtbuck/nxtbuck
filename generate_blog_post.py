#!/usr/bin/env python3
"""
Daily blog post generator for NxtBuck website.
Generates MDX blog posts in app/content/blog/ using OpenAI.
"""

import os
import json
import subprocess
from datetime import date
from pathlib import Path

from slugify import slugify  # pip install python-slugify
from openai import OpenAI    # pip install openai

# ------------ CONFIG ------------

REPO_DIR = Path(__file__).parent.resolve()
POSTS_DIR = REPO_DIR / "app" / "content" / "blog"
TOPICS_FILE = REPO_DIR / "topics.txt"
STATE_FILE = REPO_DIR / ".topic_state.json"

AUTHOR_NAME = "Karan Mirani"
AUTHOR_EMAIL = "karan@nxtbuck.com"

OPENAI_MODEL = "gpt-5.1-2025-11-13"

# --------------------------------

client = OpenAI()


# ------------------- Topic Management -------------------

def load_topics():
    if not TOPICS_FILE.exists():
        raise RuntimeError("topics.txt not found. Create it in the project root.")
    with TOPICS_FILE.open("r", encoding="utf-8") as f:
        topics = [line.strip() for line in f if line.strip()]
    if not topics:
        raise RuntimeError("topics.txt is empty – add more topics.")
    return topics


def save_topics(topics):
    """Overwrite topics.txt with remaining unused topics."""
    with TOPICS_FILE.open("w", encoding="utf-8") as f:
        for t in topics:
            f.write(t + "\n")


def load_state():
    if not STATE_FILE.exists():
        return {"last_date": None}
    with STATE_FILE.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_state(state):
    with STATE_FILE.open("w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)


def pick_topic(topics):
    """
    Each day picks the *next* topic.
    Once used, that topic will later be removed from topics.txt.
    """
    today_str = date.today().isoformat()
    state = load_state()

    # If already selected today (should not happen once we delete topics)
    if state.get("last_date") == today_str and state.get("topic"):
        return state["topic"], topics.index(state["topic"]), state

    # Always pick the first topic in the list
    topic = topics[0]

    state["last_date"] = today_str
    state["topic"] = topic
    save_state(state)

    return topic, 0, state


# ------------------- OpenAI Call -------------------

def build_prompt(topic: str, today_str: str):
    return f"""
You are a technical blogger writing for NxtBuck, a web development agency serving small businesses in Toronto and Ontario, Canada.

Write a blog post about: "{topic}"

Requirements:
- Output MUST be valid MDX (Markdown with JSX support)
- Start with a metadata export block in this exact format:
  export const metadata = {{
    title: "Your Title Here",
    description: "A compelling description (150-160 characters)",
    date: "{today_str}",
    openGraph: {{
      title: "Your Title Here",
      description: "A compelling description for social sharing",
      type: "article",
    }},
  }};

- Audience: Small business owners in Toronto and Ontario who need websites
- Tone: Clear, practical, helpful, and professional
- Length: ~1200-1500 words
- Include:
  * A compelling introduction that addresses the reader's pain points
  * Clear headings and subheadings
  * Practical examples and actionable advice
  * Bullet lists where appropriate
  * Code examples if relevant (use markdown code blocks)
  * A call-to-action section at the end (after a horizontal rule ---) encouraging readers to contact NxtBuck
  * The CTA must include a clickable link to the contact form: [Get your free custom homepage mockup →](/contact-us) or similar engaging text
  * End with a location tagline: "*Based in Toronto, serving service businesses across the GTA and all of Ontario.*"
- Style: Write as if you're a knowledgeable web developer helping small business owners understand web development concepts, pricing, or best practices
- Context: Reference Toronto, Ontario, or Canadian business context when relevant
- Use hyphens (-) instead of em dashes (—) throughout
- Links: Use Next.js Link format for internal links, e.g., [link text](/contact-us) for the contact form

Write the complete blog post now, starting with the metadata export.
""".strip()


def call_llm(topic: str, today_str: str) -> str:
    prompt = build_prompt(topic, today_str)

    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a precise and practical technical writer for a web development agency. "
                    "Always return well-structured MDX with correct metadata export format. "
                    "Write in a helpful, professional tone that small business owners can understand."
                ),
            },
            {"role": "user", "content": prompt},
        ],
        temperature=0.7,
    )

    content = response.choices[0].message.content
    if not content:
        raise RuntimeError("OpenAI returned empty content.")
    return content


# ------------------- Git Helpers -------------------

def run_git(*args):
    subprocess.check_call(["git"] + list(args), cwd=str(REPO_DIR))


# ------------------- Main Script -------------------

def main():
    today = date.today()
    today_str = today.isoformat()

    topics = load_topics()
    topic, topic_idx, state = pick_topic(topics)

    print(f"Selected topic: {topic}")

    # Generate blog content
    print("Generating blog post with OpenAI...")
    content = call_llm(topic, today_str)

    # File name (slug-based, not date-prefixed)
    slug = slugify(topic)
    filename = f"{slug}.mdx"
    post_path = POSTS_DIR / filename

    POSTS_DIR.mkdir(parents=True, exist_ok=True)

    # Check if file already exists
    if post_path.exists():
        print(f"Warning: {post_path} already exists. Overwriting...")

    with post_path.open("w", encoding="utf-8") as f:
        f.write(content)

    print(f"✓ Wrote blog post to {post_path}")

    # ---------- REMOVE USED TOPIC ----------
    remaining_topics = topics[1:]  # drop the first topic
    save_topics(remaining_topics)
    print(f"✓ Removed used topic from topics.txt ({len(remaining_topics)} topics remaining)")

    # Git commit/push
    try:
        run_git("config", "user.name", AUTHOR_NAME)
        run_git("config", "user.email", AUTHOR_EMAIL)

        run_git("add", str(post_path))
        run_git("add", str(TOPICS_FILE))
        run_git("add", str(STATE_FILE))
        run_git("commit", "-m", f"Add blog post: {topic}")
        
        print("✓ Committed changes")
        
        # Auto-push in CI environments (GitHub Actions, etc.)
        is_ci = os.getenv("CI") == "true" or os.getenv("GITHUB_ACTIONS") == "true"
        if is_ci:
            try:
                run_git("push", "origin", "main")
                print("✓ Pushed changes to remote")
            except subprocess.CalledProcessError as e:
                print(f"Git push error: {e}")
                print("Changes are committed but not pushed.")
        else:
            print("Note: Run 'git push' manually to push to remote")

    except subprocess.CalledProcessError as e:
        print(f"Git error: {e}")
        print("You may need to commit manually.")


if __name__ == "__main__":
    main()

