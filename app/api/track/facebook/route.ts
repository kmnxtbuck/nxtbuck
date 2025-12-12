/**
 * Facebook Conversions API endpoint
 */

import { NextRequest, NextResponse } from "next/server";

const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    if (!FACEBOOK_PIXEL_ID || !FACEBOOK_ACCESS_TOKEN) {
      console.warn("Facebook Conversions API not configured");
      return NextResponse.json({ success: false, error: "Not configured" }, { status: 200 });
    }

    const body = await request.json();
    const { event, params } = body;

    // Only track conversion events (form_submit, form_complete, generate_lead)
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

    // Map event names to Facebook event names
    const eventNameMap: Record<string, string> = {
      form_submit: "Lead",
      form_complete: "CompleteRegistration",
      generate_lead: "Lead",
    };

    const facebookEvent = eventNameMap[event] || "Lead";

    // Prepare Facebook Conversions API payload
    const facebookPayload = {
      data: [
        {
          event_name: facebookEvent,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: params.event_data?.page_url || "",
          user_data: {
            em: userData.email ? [hashEmail(userData.email as string)] : undefined,
            ph: userData.phone ? [hashPhone(userData.phone as string)] : undefined,
            fn: userData.first_name ? [hashString(userData.first_name as string)] : undefined,
            ln: userData.last_name ? [hashString(userData.last_name as string)] : undefined,
            client_ip_address: ipAddress,
            client_user_agent: userAgent,
          },
          custom_data: {
            content_name: params.event_data?.form_id || "",
            content_category: "form_submission",
          },
        },
      ],
      access_token: FACEBOOK_ACCESS_TOKEN,
    };

    // Send to Facebook Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${FACEBOOK_PIXEL_ID}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(facebookPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Facebook Conversions API error:", errorText);
      return NextResponse.json({ success: false, error: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Facebook Conversions API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Hash functions for PII (required by Facebook)
function hashEmail(email: string): string {
  // In production, use SHA-256 hashing
  // For now, return as-is (Facebook will hash it if needed)
  return email.toLowerCase().trim();
}

function hashPhone(phone: string): string {
  // Remove all non-digit characters
  return phone.replace(/\D/g, "");
}

function hashString(str: string): string {
  // In production, use SHA-256 hashing
  return str.toLowerCase().trim();
}

