"use client";

import { useEffect, useState } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export type UtmRecord = Record<UtmKey, string | null>;

type UseUtmPersistenceReturn = {
  firstTouch: UtmRecord | null;
  lastTouch: UtmRecord | null;
  ready: boolean; // true once we’ve read from localStorage
};

export function useUtmPersistence(): UseUtmPersistenceReturn {
  const [firstTouch, setFirstTouch] = useState<UtmRecord | null>(null);
  const [lastTouch, setLastTouch] = useState<UtmRecord | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const params = new URLSearchParams(window.location.search);

    const hasUtmInUrl = UTM_KEYS.some((key) => params.get(key));

    // 1. If URL has UTMs, update localStorage (first_*, last_*)
    if (hasUtmInUrl) {
      UTM_KEYS.forEach((key) => {
        const value = params.get(key);
        if (!value) return;

        const firstKey = `first_${key}`;
        const lastKey = `last_${key}`;

        // Set first-touch only once
        if (!localStorage.getItem(firstKey)) {
          localStorage.setItem(firstKey, value);
        }

        // Always update last-touch
        localStorage.setItem(lastKey, value);
      });
    }

    // 2. Read from localStorage into state
    const first: Partial<UtmRecord> = {};
    const last: Partial<UtmRecord> = {};

    UTM_KEYS.forEach((key) => {
      const firstVal = localStorage.getItem(`first_${key}`);
      const lastVal = localStorage.getItem(`last_${key}`);

      first[key] = firstVal;
      // If we never set last_*, fall back to first_*
      last[key] = lastVal ?? firstVal;
    });

    setFirstTouch(first as UtmRecord);
    setLastTouch(last as UtmRecord);
    setReady(true);
  }, []);

  return { firstTouch, lastTouch, ready };
}

export default useUtmPersistence;
