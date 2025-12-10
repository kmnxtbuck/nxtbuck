import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MdxContent from "@/components/MdxContent";
import { getAllPostsMeta, getPostMeta } from "@/lib/blog";

type PageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const meta = getPostMeta(params.slug);
  
  if (!meta) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${meta.title} | NxtBuck Blog`,
    description: meta.description,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const meta = getPostMeta(params.slug);
  
  if (!meta) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
        {meta.date && (
          <p className="text-xs text-white/60">
            {new Date(meta.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </p>
        )}
        <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-white">{meta.title}</h1>
        {meta.description && (
          <p className="text-sm text-white/60 mt-2">{meta.description}</p>
        )}
      </div>

      <article className="prose prose-invert prose-sm sm:prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-white/80 prose-p:leading-relaxed prose-a:text-[#FF4081] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-white/80 prose-ol:text-white/80 prose-li:text-white/80 prose-hr:border-white/20">
        <MdxContent slug={params.slug} />
      </article>
    </main>
  );
}
