import { NextResponse } from "next/server";

type Enquiry = {
  name?: string;
  email?: string;
  company?: string;
  needs?: string[];
  description?: string;
  budget?: string;
  timeline?: string;
  website?: string; // honeypot
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept and discard bot submissions.
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const needs = Array.isArray(body.needs) ? body.needs.filter(Boolean) : [];
  const description = (body.description ?? "").trim();
  const budget = (body.budget ?? "").trim();
  const timeline = (body.timeline ?? "").trim();

  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, message: "Please provide your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "Please provide a valid work email." }, { status: 400 });
  }
  if (!company || company.length > 160) {
    return NextResponse.json({ ok: false, message: "Please provide your company or brand." }, { status: 400 });
  }
  if (needs.length === 0) {
    return NextResponse.json(
      { ok: false, message: "Please select at least one area you need help with." },
      { status: 400 }
    );
  }
  if (!description || description.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Please tell us a little about the project." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.ENQUIRY_TO_EMAIL?.trim();
  const from = process.env.ENQUIRY_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        message:
          "This form is not connected to an inbox yet. No message was sent. Configure RESEND_API_KEY, ENQUIRY_TO_EMAIL, and ENQUIRY_FROM_EMAIL to enable delivery.",
      },
      { status: 503 }
    );
  }

  const subject = `New project enquiry from ${name} (${company})`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Needs: ${needs.join(", ")}`,
    budget ? `Budget: ${budget}` : "",
    timeline ? `Timeline: ${timeline}` : "",
    "",
    "Project details:",
    description,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "The message could not be sent. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "The message could not be sent. Please try again." },
      { status: 502 }
    );
  }
}
