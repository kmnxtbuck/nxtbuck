/**
 * Event Emitter for Analytics Observer Pattern
 */

import type { AnalyticsEvent, AnalyticsObserver } from "./types";

class AnalyticsEventEmitter {
  private observers: AnalyticsObserver[] = [];

  /**
   * Subscribe an observer to events
   */
  subscribe(observer: AnalyticsObserver): void {
    // Remove existing observer with same ID if present
    this.observers = this.observers.filter((obs) => obs.id !== observer.id);
    this.observers.push(observer);
  }

  /**
   * Unsubscribe an observer
   */
  unsubscribe(observerId: string): void {
    this.observers = this.observers.filter((obs) => obs.id !== observerId);
  }

  /**
   * Emit an event to all relevant observers
   */
  async emit(event: AnalyticsEvent, isServerSide: boolean = false): Promise<void> {
    const relevantObservers = this.observers.filter((observer) => {
      if (isServerSide) {
        return observer.isServerSide;
      }
      return observer.isClientSide;
    });

    // Fire all observers in parallel (don't wait for failures)
    await Promise.allSettled(
      relevantObservers.map((observer) => {
        try {
          return observer.handle(event);
        } catch (error) {
          console.error(`Observer ${observer.id} failed:`, error);
          return Promise.resolve();
        }
      })
    );
  }

  /**
   * Get all observers
   */
  getObservers(): AnalyticsObserver[] {
    return [...this.observers];
  }
}

export function getEventEmitter(): AnalyticsEventEmitter {
  if (typeof window !== "undefined") {
    // Client-side: attach to window for persistence across page navigations
    if (!(window as any).__analyticsEventEmitter) {
      (window as any).__analyticsEventEmitter = new AnalyticsEventEmitter();
    }
    return (window as any).__analyticsEventEmitter;
  }

  // Server-side: create new instance per request to avoid observer accumulation
  // and cross-request data pollution
  return new AnalyticsEventEmitter();
}

