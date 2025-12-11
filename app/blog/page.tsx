import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Blog | NxtBuck",
  description: "Deep dives on automation, pricing, and modern web stacks.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 sm:mb-6 text-white">NxtBuck Blog</h1>
      <p className="text-sm text-white/60 mb-6 sm:mb-8">
        Essays and breakdowns on building efficient, automated systems for small
        businesses and e-commerce retailers.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-white/10 pb-4 sm:pb-6 last:border-b-0">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#FF4081] transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-white/50 mt-1">
                {new Date(post.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </p>
              <p className="text-sm text-white/70 mt-2">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

