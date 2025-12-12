/**
 * Reddit Conversions API endpoint
 */

import { NextRequest, NextResponse } from "next/server";

const REDDIT_PIXEL_ID = process.env.REDDIT_PIXEL_ID;
const REDDIT_ACCESS_TOKEN = process.env.REDDIT_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    if (!REDDIT_PIXEL_ID || !REDDIT_ACCESS_TOKEN) {
      console.warn("Reddit Conversions API not configured");
      return NextResponse.json({ success: false, error: "Not configured" }, { status: 200 });
    }

    const body = await request.json();
    const { event, params } = body;

    // Only track conversion events
    const conversionEvents = ["form_submit", "form_complete", "generate_lead"];
    if (!conversionEvents.includes(event)) {
      return NextResponse.json({ success: true, skipped: true });
    }

    // Extract user data from params
    const eventData = params.event_data || {};
    const userData = params.user_data || {};

    // Get client IP and user agent
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "";
    const userAgent = request.headers.get("user-agent") || "";

    // Map event names to Reddit event names
    const eventNameMap: Record<string, string> = {
      form_submit: "Lead",
      form_complete: "SignUp",
      generate_lead: "Lead",
    };

    const redditEvent = eventNameMap[event] || "Lead";

    // Prepare Reddit Conversions API payload
    const redditPayload = {
      events: [
        {
          event_name: redditEvent,
          event_time: Math.floor(Date.now() / 1000),
          user: {
            email: userData.email ? hashEmail(userData.email as string) : undefined,
            phone_number: userData.phone ? hashPhone(userData.phone as string) : undefined,
            ip_address: ipAddress,
            user_agent: userAgent,
          },
          custom_data: {
            form_id: eventData.form_id || "",
          },
        },
      ],
    };

    // Send to Reddit Conversions API
    const response = await fetch(
      `https://ads-api.reddit.com/api/v2.0/conversions/events/${REDDIT_PIXEL_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REDDIT_ACCESS_TOKEN}`,
        },
        body: JSON.stringify(redditPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Reddit Conversions API error:", errorText);
      return NextResponse.json({ success: false, error: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reddit Conversions API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Hash functions for PII (required by Reddit)
function hashEmail(email: string): string {
  // In production, use SHA-256 hashing
  return email.toLowerCase().trim();
}

function hashPhone(phone: string): string {
  // Remove all non-digit characters
  return phone.replace(/\D/g, "");
}

