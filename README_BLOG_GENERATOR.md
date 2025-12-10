# Blog Post Generator

This script automatically generates blog posts for the NxtBuck website using OpenAI.

## Setup

1. Install Python dependencies:
```bash
pip install python-slugify openai
```

2. Set up OpenAI API key:
```bash
export OPENAI_API_KEY="your-api-key-here"
```

Or create a `.env` file in the project root (not tracked in git).

3. Create/edit `topics.txt`:
   - Add one topic per line
   - Topics will be used in order
   - Used topics are automatically removed

## Usage

### Local Usage

Run the script:
```bash
python generate_blog_post.py
```

The script will:
1. Pick the first topic from `topics.txt`
2. Generate a blog post using OpenAI
3. Save it as `app/content/blog/{slug}.mdx`
4. Remove the used topic from `topics.txt`
5. Commit the changes (you'll need to push manually)

### Automated Daily Generation

A GitHub Actions workflow runs this script daily at 9:00 AM UTC.

**Setup:**
1. Add your OpenAI API key as a GitHub secret:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key

2. The workflow will automatically:
   - Run daily at the scheduled time
   - Generate a blog post
   - Commit and push changes to the main branch

**Manual Trigger:**
You can also trigger the workflow manually:
- Go to Actions tab in GitHub
- Select "Generate Daily Blog Post"
- Click "Run workflow"

## Generated Post Format

Posts are generated as MDX files with this metadata structure:
```javascript
export const metadata = {
  title: "Post Title",
  description: "Post description",
  date: "2025-01-15",
  openGraph: {
    title: "Post Title",
    description: "Post description",
    type: "article",
  },
};
```

## Configuration

Edit the constants at the top of `generate_blog_post.py`:
- `AUTHOR_NAME` - Git commit author name
- `AUTHOR_EMAIL` - Git commit author email
- `OPENAI_MODEL` - OpenAI model to use (default: "gpt-4o")

## Notes

- The script tracks state in `.topic_state.json` (gitignored)
- If you run the script multiple times on the same day, it will reuse the same topic
- Posts are named using slugified topic names (e.g., "how-to-choose-web-agency.mdx")
- The script commits but doesn't push locally (auto-pushes in CI)
- If the workflow fails, it will create a GitHub issue to notify you
