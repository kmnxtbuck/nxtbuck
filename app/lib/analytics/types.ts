/**
 * Analytics event types and interfaces
 */

export type AnalyticsEventPayload = Record<string, unknown>;

export interface AnalyticsEvent {
  event: string;
  params: AnalyticsEventPayload;
  timestamp?: number;
  userAgent?: string;
  ipAddress?: string;
}

export interface AnalyticsObserver {
  /**
   * Unique identifier for the observer
   */
  id: string;

  /**
   * Whether this observer should handle server-side events
   */
  isServerSide: boolean;

  /**
   * Whether this observer should handle client-side events
   */
  isClientSide: boolean;

  /**
   * Handle an analytics event
   */
  handle(event: AnalyticsEvent): Promise<void> | void;
}

