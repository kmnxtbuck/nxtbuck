/**
 * Google Tag Manager Observer (Client-side only)
 */

import type { AnalyticsEvent, AnalyticsObserver } from "../types";

export class GtmObserver implements AnalyticsObserver {
  id = "gtm";
  isServerSide = false;
  isClientSide = true;

  handle(event: AnalyticsEvent): void {
    if (typeof window === "undefined") {
      return;
    }

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Push event to GTM dataLayer
    window.dataLayer.push({
      event: event.event,
      ...event.params,
    });
  }
}

