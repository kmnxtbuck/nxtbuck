import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostMeta } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const meta = getPostMeta(params.slug);
  if (!meta) return {};
  return {
    title: `${meta.title} | NxtBuck Blog`,
    description: meta.description,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // MDX is compiled by Next with the MDX plugin; require to load the default export.
  const Post = require(filePath).default;
  const meta = getPostMeta(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <p className="text-xs text-white/60">
          {meta &&
            new Date(meta.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-white">
          {meta?.title ?? params.slug}
        </h1>
        {meta?.description && (
          <p className="text-sm text-white/60 mt-2">{meta.description}</p>
        )}
      </div>

      <article className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-a:text-[#FF4081]">
        <Post />
      </article>
    </main>
  );
}

