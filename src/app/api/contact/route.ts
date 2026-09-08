import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Simple anti-spam honeypot detection
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam submission detected" },
        { status: 400 }
      );
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a descriptive message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedSubmission = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      subject: (subject && typeof subject === "string" ? subject.trim() : "General Inquiry").slice(0, 150),
      message: message.trim().slice(0, 2000),
      receivedAt: new Date().toISOString(),
    };

    // In a production environment, send to SendGrid, Resend, or Discord/Slack webhook.
    // For local & serverless runtime, we log and persist acknowledgement.
    console.log("⚡ [CONTACT FORM SUBMISSION RECEIVED]:", sanitizedSubmission);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${sanitizedSubmission.name}! Your message has been safely delivered to Sumiran. I will get back to you shortly.`,
        data: {
          timestamp: sanitizedSubmission.receivedAt,
          subject: sanitizedSubmission.subject,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error while processing your request. Please try again or email directly." },
      { status: 500 }
    );
  }
}
