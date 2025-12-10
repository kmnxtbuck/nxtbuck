import fs from "node:fs";
import path from "node:path";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  tags?: string[];
};

const BLOG_DIR = path.join(process.cwd(), "app", "content", "blog");

export function getAllPostsMeta(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");

    // Very lightweight “frontmatter”: first comment block
    // Or switch to gray-matter if you prefer real YAML frontmatter.
    const metaMatch = source.match(/\/\*([\s\S]*?)\*\//);
    let meta: Partial<BlogPostMeta> = {};
    if (metaMatch) {
      try {
        meta = JSON.parse(metaMatch[1]);
      } catch {
        // ignore bad meta
      }
    }

    return {
      slug,
      title: meta.title ?? slug,
      description: meta.description ?? "",
      date: meta.date ?? new Date().toISOString(),
      tags: meta.tags ?? [],
    };
  });

  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  return getAllPostsMeta().find((p) => p.slug === slug) ?? null;
}
