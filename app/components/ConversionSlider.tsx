"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

type GoalKey = "calls" | "bookings" | "sales";

type MetricId = "loadTime" | "bounceRate" | "leads" | "bookings" | "sales" | "trust" | "mobile";

type MetricConfig = {
  id: MetricId;
  label: string;
  unit?: string;
  before: number;
  after: number;
  format?: (value: number) => string;
};

type GoalDefinition = {
  key: GoalKey;
  label: string;
  tagline: string;
  primaryMetric: MetricId;
  visibleMetrics: MetricId[];
  emphasizedCallouts: string[];
};

const BASE_METRICS: Record<MetricId, MetricConfig> = {
  loadTime: {
    id: "loadTime",
    label: "Load time",
    before: 5.2,
    after: 1.4,
    unit: "s",
    format: (v) => `${v.toFixed(1)}s`,
  },
  bounceRate: {
    id: "bounceRate",
    label: "Bounce rate",
    before: 68,
    after: 38,
    unit: "%",
    format: (v) => `${Math.round(v)}%`,
  },
  leads: {
    id: "leads",
    label: "Calls / month",
    before: 12,
    after: 31,
  },
  bookings: {
    id: "bookings",
    label: "Bookings / month",
    before: 8,
    after: 24,
  },
  sales: {
    id: "sales",
    label: "Sales / month",
    before: 15,
    after: 42,
  },
  trust: {
    id: "trust",
    label: "Trust score",
    before: 20,
    after: 80,
    format: (v) => `${Math.round(v)} / 100`,
  },
  mobile: {
    id: "mobile",
    label: "Mobile usability",
    before: 25,
    after: 90,
    format: (v) => `${Math.round(v)} / 100`,
  },
};

const GOALS: GoalDefinition[] = [
  {
    key: "calls",
    label: "More Calls",
    tagline: "Get more people actually calling your business.",
    primaryMetric: "leads",
    visibleMetrics: ["leads", "loadTime", "bounceRate", "trust"],
    emphasizedCallouts: ["Clear CTA", "Trust indicators", "Fast load"],
  },
  {
    key: "bookings",
    label: "More Bookings",
    tagline: "Fill your calendar with qualified appointments.",
    primaryMetric: "bookings",
    visibleMetrics: ["bookings", "loadTime", "bounceRate", "mobile"],
    emphasizedCallouts: ["Booking widget", "Mobile-first layout", "Fast load"],
  },
  {
    key: "sales",
    label: "More Sales",
    tagline: "Turn more visitors into paying customers.",
    primaryMetric: "sales",
    visibleMetrics: ["sales", "loadTime", "bounceRate", "trust"],
    emphasizedCallouts: ["Clear CTA", "Product grid", "Trust indicators"],
  },
];

function interpolate(before: number, after: number, position: number) {
  const t = Math.max(0, Math.min(100, position)) / 100;
  return before + (after - before) * t;
}

export default function ConversionSlider() {
  const router = useRouter();
  const [position, setPosition] = useState(40); // 0–100
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<GoalKey>("calls");
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const interactionTimerRef = useRef<number | null>(null);

  const activeGoal = useMemo(
    () => GOALS.find((g) => g.key === selectedGoal) ?? GOALS[0],
    [selectedGoal]
  );

  const isMoreAfter = position > 55;

  const metrics = useMemo(() => {
    const allMetrics = Object.values(BASE_METRICS).map((metric) => {
      const value = interpolate(metric.before, metric.after, position);
      return {
        ...metric,
        value,
        formatted:
          metric.format?.(value) ??
          (metric.unit ? `${Math.round(value)}${metric.unit}` : `${Math.round(value)}`),
        beforeFormatted:
          metric.format?.(metric.before) ??
          (metric.unit ? `${metric.before}${metric.unit}` : `${metric.before}`),
        afterFormatted:
          metric.format?.(metric.after) ??
          (metric.unit ? `${metric.after}${metric.unit}` : `${metric.after}`),
      };
    });
    
    // Filter to only show metrics relevant to the selected goal
    return allMetrics.filter((metric) => 
      activeGoal.visibleMetrics.includes(metric.id)
    );
  }, [position, activeGoal]);

  useEffect(() => {
    trackEvent("slider_view", { component: "conversion_slider" });
  }, []);

  useEffect(() => {
    if (!hasInteracted || showPersonalization) return;

    if (interactionTimerRef.current) {
      window.clearTimeout(interactionTimerRef.current);
    }

    interactionTimerRef.current = window.setTimeout(() => {
      setShowPersonalization(true);
      trackEvent("slider_engaged_10s", {
        component: "conversion_slider",
        goal: selectedGoal,
      });
    }, 12000);

    return () => {
      if (interactionTimerRef.current) {
        window.clearTimeout(interactionTimerRef.current);
      }
    };
  }, [hasInteracted, showPersonalization, selectedGoal]);

  const markInteraction = (type: string) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      trackEvent("slider_first_interaction", {
        component: "conversion_slider",
        interaction_type: type,
      });
    }
  };

  const updatePositionFromClientX = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    markInteraction("drag_mouse");
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    markInteraction("click");
    updatePositionFromClientX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    markInteraction("drag_touch");
    if (e.touches[0]) {
      updatePositionFromClientX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updatePositionFromClientX(e.touches[0].clientX);
    }
  };

  const handleGoalChange = (goal: GoalKey) => {
    setSelectedGoal(goal);
    markInteraction("goal_change");
    trackEvent("goal_selected", { goal });
  };

  const handlePersonalizationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("url_entered", {
      email_provided: Boolean(email),
      website_url_provided: Boolean(websiteUrl),
    });

    const baseHref = "/contact-us";
    const params = new URLSearchParams();
    if (email) params.set("email", email);
    if (websiteUrl) params.set("website_url", websiteUrl);
    params.set("source", "conversion_slider");

    const url = `${baseHref}?${params.toString()}`;
    window.location.href = url;
  };

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const primaryMetricId = activeGoal.primaryMetric;

  return (
    <section className="relative z-10 px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 lg:gap-10 items-stretch">
        <div className="relative w-full">
          <div
            ref={sliderRef}
            className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br from-slate-950/90 via-slate-900 to-slate-950 cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* BEFORE - Full-width base layer */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950/95">
              <div className="text-center px-4 py-6 md:px-6 md:py-8 max-w-lg">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20 bg-black/60 text-white/75 transition-opacity duration-300 ${
                    isMoreAfter ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span>Before</span>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-white/55 max-w-xs mx-auto leading-relaxed">
                  Cluttered layout, weak headline, no clear CTA, and slow-loading hero image.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] sm:text-xs text-white/35">
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5 text-left">
                    Generic stock photo
                  </div>
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5 text-left">
                    Tiny, buried phone number
                  </div>
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5 text-left">
                    Long paragraph, no scan ability
                  </div>
                  <div className="p-2 rounded-lg border border-white/10 bg-white/5 text-left">
                    Desktop-only layout
                  </div>
                </div>
              </div>
            </div>

            {/* AFTER - Overlaid layer revealed from right as you drag right */}
            <div
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#673AB7] via-[#9C27B0] to-[#E040FB]"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_55%)]" />
              <div className="relative text-center px-4 py-6 md:px-6 md:py-8 max-w-lg">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/30 bg-white/10 text-white transition-all duration-300 ${
                    isMoreAfter ? "opacity-100 translate-y-0" : "opacity-40 translate-y-1"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <span>After</span>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-white/90 max-w-xs mx-auto leading-relaxed">
                  Clean hero, clear benefit-driven headline, primary CTA above the fold, and mobile-first layout.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] sm:text-xs text-white/90">
                  <div className="p-2 rounded-lg border border-white/30 bg-black/15 text-left">
                    <span className="block text-[10px] font-semibold text-emerald-200">
                      Clear CTA
                    </span>
                    <span className="block text-[11px] text-white/80">
                      “Get my free teardown” button where eyes land first.
                    </span>
                  </div>
                  <div className="p-2 rounded-lg border border-white/30 bg-black/15 text-left">
                    <span className="block text-[10px] font-semibold text-emerald-200">
                      Mobile-first layout
                    </span>
                    <span className="block text-[11px] text-white/80">
                      Stack order and tap targets designed for thumbs.
                    </span>
                  </div>
                  <div className="p-2 rounded-lg border border-white/30 bg-black/15 text-left hidden sm:block">
                    <span className="block text-[10px] font-semibold text-emerald-200">
                      Trust indicators
                    </span>
                    <span className="block text-[11px] text-white/80">
                      Reviews, guarantees, and “served in” badges in view.
                    </span>
                  </div>
                  <div className="p-2 rounded-lg border border-white/30 bg-black/15 text-left hidden sm:block">
                    <span className="block text-[10px] font-semibold text-emerald-200">
                      Fast load
                    </span>
                    <span className="block text-[11px] text-white/80">
                      Compressed assets and lean code under the hood.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute inset-y-0 w-1 bg-white/80 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] cursor-ew-resize z-20 transition-opacity"
              style={{ left: `${position}%`, transform: "translateX(-50%)", opacity: isDragging ? 1 : 0.95 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl border border-white/80">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] sm:text-xs text-white/70 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/15">
              Drag to see how a high-converting site behaves.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Live impact preview</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              See what a{" "}
              <span className="bg-gradient-to-r from-[#FF4081] to-[#E040FB] bg-clip-text text-transparent">
                proper website
              </span>{" "}
              does to your numbers.
            </h2>
            <p className="text-xs sm:text-sm text-white/65 max-w-md">
              Slide from “Before” to “After” to see typical improvement ranges we&apos;ve seen on redesigns like this.
              These are conservative examples, not guarantees.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 w-fit rounded-full bg-white/5 border border-white/10 p-1.5">
            {GOALS.map((goal) => (
              <button
                key={goal.key}
                type="button"
                onClick={() => handleGoalChange(goal.key)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 overflow-hidden ${
                  selectedGoal === goal.key
                    ? "bg-white text-slate-900"
                    : "text-white/70 hover:bg-white/10"
                }`}
              >
                {goal.label}
              </button>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/60">{activeGoal.tagline}</p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {metrics.map((metric) => {
              return (
                <div
                  key={metric.id}
                  className="relative p-3 sm:p-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-[10px] sm:text-xs text-white/50 mb-1.5 flex items-center justify-between gap-1">
                    <span>{metric.label}</span>
                    <span className="text-[9px] sm:text-[10px] text-white/40">
                      Typical improvement range
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <div className="text-sm sm:text-base font-semibold text-white">
                          {metric.formatted}
                        </div>
                      </div>
                      {metric.id === "trust" || metric.id === "mobile" ? (
                        <div className="flex items-center gap-1">
                          <div className="w-14 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                metric.id === "trust" ? "bg-emerald-400" : "bg-sky-400"
                              }`}
                              style={{
                                width: `${Math.max(8, Math.min(100, (metric.value / 100) * 100))}%`,
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="text-[10px] sm:text-xs font-semibold">
                          {(() => {
                            const lowerIsBetter = metric.id === "loadTime" || metric.id === "bounceRate";
                            const progress = ((metric.value - metric.before) / (metric.after - metric.before)) * 100;
                            
                            if (lowerIsBetter) {
                              if (metric.value <= metric.after) {
                                return <span className="text-emerald-300/80">Optimized</span>;
                              } else if (progress >= 50) {
                                return <span className="text-yellow-300/80">Improving</span>;
                              } else {
                                return <span className="text-red-300/80">Needs Work</span>;
                              }
                            } else {
                              if (metric.value >= metric.after) {
                                return <span className="text-emerald-300/80">Optimized</span>;
                              } else if (progress >= 50) {
                                return <span className="text-yellow-300/80">Improving</span>;
                              } else {
                                return <span className="text-red-300/80">Needs Work</span>;
                              }
                            }
                          })()}
                        </div>
                      )}
                    </div>
                    {metric.id !== "trust" && metric.id !== "mobile" && (
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                          style={{
                            width: `${Math.max(0, Math.min(100, ((metric.value - metric.before) / (metric.after - metric.before)) * 100))}%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={handlePersonalizationSubmit}
            className="mt-1 space-y-3 sm:space-y-4 rounded-2xl border border-white/12 bg-white/5 px-3 py-3 sm:px-4 sm:py-4"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Want a version of this for your business?
                </p>
                <p className="text-[10px] sm:text-xs text-white/50">
                  Drop 2 quick details and we&apos;ll record a free 5‑minute teardown.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end text-[10px] text-white/40">
                <span>Seen on redesigns like this.</span>
                <span>Conservative estimates only.</span>
              </div>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  required
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081]"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="website-url">
                  Website URL
                </label>
                <input
                  id="website-url"
                  type="url"
                  inputMode="url"
                  required
                  placeholder="Website URL *"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-black/40 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4081]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <button
                type="submit"
                onClick={() =>
                  trackEvent("cta_clicked", {
                    variant: "free_teardown",
                    from: "conversion_slider",
                    goal: selectedGoal,
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white text-[#673AB7] text-xs sm:text-sm font-semibold hover:bg-white/95 active:scale-[0.98] transition-all shadow-lg shadow-white/20"
              >
                Get my free 5‑minute teardown
              </button>
              <button
                type="button"
                onClick={() => {
                  trackEvent("cta_clicked", {
                    variant: "see_pricing",
                    from: "conversion_slider",
                    goal: selectedGoal,
                  });
                  router.push("/our-products");
                }}
                className="text-[11px] sm:text-xs text-white/70 hover:text-white/90 underline-offset-2 hover:underline"
              >
                Or see pricing & how the 14‑day build works
              </button>
            </div>

            <p className="text-[10px] sm:text-[11px] text-white/45">
              14‑day delivery · Fixed price · Done‑for‑you · Conversion‑focused
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}


