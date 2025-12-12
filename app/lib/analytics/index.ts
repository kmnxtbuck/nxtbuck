/**
 * Main Analytics Module - Observer Pattern Implementation
 */

"use client";

import { getEventEmitter } from "./EventEmitter";
import { GtmObserver } from "./observers/GtmObserver";
import { ServerSideObserver } from "./observers/ServerSideObserver";
import type { AnalyticsEventPayload } from "./types";

// Global Window interface for dataLayer
declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

// Initialize observers on module load
let initialized = false;

function initializeObservers() {
  if (initialized || typeof window === "undefined") {
    return;
  }

  const emitter = getEventEmitter();

  // Register GTM observer (client-side only)
  emitter.subscribe(new GtmObserver());

  // Register server-side observers (these will call API endpoints)
  // These observers run on client-side but send to server-side APIs
  emitter.subscribe(
    new ServerSideObserver("facebook", "/api/track/facebook", false, true)
  );
  emitter.subscribe(
    new ServerSideObserver("google", "/api/track/google", false, true)
  );
  emitter.subscribe(
    new ServerSideObserver("reddit", "/api/track/reddit", false, true)
  );

  initialized = true;
}

// Initialize on import
if (typeof window !== "undefined") {
  initializeObservers();
}

/**
 * Track an analytics event
 * This will notify all relevant observers (client-side GTM + server-side APIs)
 */
export async function trackEvent(
  event: string,
  params: AnalyticsEventPayload = {}
): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  // Ensure observers are initialized
  initializeObservers();

  const emitter = getEventEmitter();

  // Emit to client-side observers (GTM + server-side API calls)
  await emitter.emit(
    {
      event,
      params,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
    },
    false // isServerSide = false
  );
}

/**
 * Track an event from server-side
 * This will notify only server-side observers
 */
export async function trackEventServerSide(
  event: string,
  params: AnalyticsEventPayload = {},
  userAgent?: string,
  ipAddress?: string
): Promise<void> {
  const emitter = getEventEmitter();

  await emitter.emit(
    {
      event,
      params,
      timestamp: Date.now(),
      userAgent,
      ipAddress,
    },
    true // isServerSide = true
  );
}

