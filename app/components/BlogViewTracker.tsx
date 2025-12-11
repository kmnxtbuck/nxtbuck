"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

type BlogViewTrackerProps = {
  slug: string;
  title: string;
};

export default function BlogViewTracker({ slug, title }: BlogViewTrackerProps) {
  const hasTrackedScroll50 = useRef(false);

  useEffect(() => {
    trackEvent("view_content", {
      content_type: "blog_post",
      content_id: slug,
      content_title: title,
    });
  }, [slug, title]);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTrackedScroll50.current) return;

      const scrollPercentage = 
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      
      if (scrollPercentage >= 0.5) {
        hasTrackedScroll50.current = true;
        trackEvent("scroll_50", {
          content_type: "blog_post",
          content_id: slug,
          content_title: title,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug, title]);

  return null;
}