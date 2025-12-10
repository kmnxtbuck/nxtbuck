"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type MdxContentProps = {
  slug: string;
};

export default function MdxContent({ slug }: MdxContentProps) {
  const [Component, setComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    import(`@/content/blog/${slug}.mdx`)
      .then((mod) => setComponent(() => mod.default))
      .catch((err) => console.error(`Failed to load MDX: ${slug}`, err));
  }, [slug]);

  if (!Component) {
    return <div className="text-white/60">Loading...</div>;
  }

  return <Component />;
}

