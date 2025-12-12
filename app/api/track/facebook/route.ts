/**
 * Facebook Conversions API endpoint
 */

import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

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
    const userData = eventData.user_data || {};

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
// Normalize and SHA-256 hash for privacy compliance
function sha256(input: string): string {
  return createHash("sha256").update(input).digest("hex");
}

function hashEmail(email: string): string {
  // Normalize: lowercase and trim, then SHA-256 hash
  const normalized = email.toLowerCase().trim();
  return sha256(normalized);
}

function hashPhone(phone: string): string {
  // Normalize: remove all non-digit characters, then SHA-256 hash
  const normalized = phone.replace(/\D/g, "");
  return sha256(normalized);
}

function hashString(str: string): string {
  // Normalize: lowercase and trim, then SHA-256 hash
  const normalized = str.toLowerCase().trim();
  return sha256(normalized);
}

