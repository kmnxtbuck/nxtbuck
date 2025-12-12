/**
 * Google Conversions API endpoint
 */

import { NextRequest, NextResponse } from "next/server";

const GOOGLE_CONVERSION_ID = process.env.GOOGLE_CONVERSION_ID;
const GOOGLE_CONVERSION_LABEL = process.env.GOOGLE_CONVERSION_LABEL;
const GOOGLE_ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    if (!GOOGLE_CONVERSION_ID || !GOOGLE_ACCESS_TOKEN) {
      console.warn("Google Conversions API not configured");
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
    const userData = eventData.user_data || {};

    // Get client IP and user agent
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "";
    const userAgent = request.headers.get("user-agent") || "";

    // Prepare Google Conversions API payload
    const googlePayload = {
      conversion_action: `customers/${GOOGLE_CONVERSION_ID}/conversionActions/${GOOGLE_CONVERSION_LABEL}`,
      conversion_date_time: new Date().toISOString(),
      conversion_value: {
        currency_code: "USD",
        value: 1.0,
      },
      user_identifiers: [
        ...(userData.email
          ? [
              {
                hashed_email: hashEmail(userData.email as string),
              },
            ]
          : []),
        ...(userData.phone
          ? [
              {
                hashed_phone_number: hashPhone(userData.phone as string),
              },
            ]
          : []),
      ],
      user_agent: userAgent,
      conversion_environment: "WEB",
    };

    // Send to Google Conversions API
    const response = await fetch(
      `https://googleads.googleapis.com/v16/customers/${GOOGLE_CONVERSION_ID}/googleAds:uploadClickConversions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}`,
          "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN || "",
        },
        body: JSON.stringify({
          conversions: [googlePayload],
          partial_failure: true,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Conversions API error:", errorText);
      return NextResponse.json({ success: false, error: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Conversions API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Hash functions for PII (required by Google)
function hashEmail(email: string): string {
  // In production, use SHA-256 hashing
  // Google requires normalized (lowercase, trimmed) and hashed emails
  return email.toLowerCase().trim();
}

function hashPhone(phone: string): string {
  // Remove all non-digit characters and ensure E.164 format
  const digits = phone.replace(/\D/g, "");
  return digits;
}

