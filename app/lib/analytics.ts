type AnalyticsEventPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Array<AnalyticsEventPayload>;
  }
}

export function trackEvent(event: string, params: AnalyticsEventPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
  });
}
