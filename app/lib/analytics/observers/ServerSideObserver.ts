/**
 * Server-side Conversions API Observer
 * Sends events to server-side API endpoints
 */

import type { AnalyticsEvent, AnalyticsObserver } from "../types";

export class ServerSideObserver implements AnalyticsObserver {
  id: string;
  isServerSide: boolean;
  isClientSide: boolean;
  private apiEndpoint: string;

  constructor(id: string, apiEndpoint: string, isServerSide: boolean = true, isClientSide: boolean = false) {
    this.id = id;
    this.apiEndpoint = apiEndpoint;
    this.isServerSide = isServerSide;
    this.isClientSide = isClientSide;
  }

  async handle(event: AnalyticsEvent): Promise<void> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: event.event,
          params: event.params,
          timestamp: event.timestamp || Date.now(),
          userAgent: event.userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : undefined),
        }),
      });

      if (!response.ok) {
        console.error(`Failed to send event to ${this.id}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error sending event to ${this.id}:`, error);
    }
  }
}

