import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "app", "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

export function getAllPostsMeta(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");

    // Extract metadata from the exported metadata object
    const metaMatch = source.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?});/);
    let meta: Partial<BlogPostMeta> = { slug };
    
    if (metaMatch) {
      try {
        // Simple extraction - in production you might want a more robust parser
        const metaStr = metaMatch[1];
        const titleMatch = metaStr.match(/title:\s*["']([^"']+)["']/);
        const descMatch = metaStr.match(/description:\s*["']([^"']+)["']/);
        
        if (titleMatch) meta.title = titleMatch[1];
        if (descMatch) meta.description = descMatch[1];
      } catch {
        // ignore parsing errors
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

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  return getAllPostsMeta().find((p) => p.slug === slug) ?? null;
}
