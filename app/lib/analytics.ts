type AnalyticsEventPayload = Record<string, unknown>;

declare global {
  interface Window {
    // Align with existing global declaration (Object[]).
    dataLayer?: Object[];
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
