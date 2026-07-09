import { NextRequest, NextResponse } from "next/server";
import { getPdfUrl } from "@/lib/blob";
import { getStripe } from "@/lib/stripe-config";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const pdfUrl = getPdfUrl();
    return NextResponse.redirect(pdfUrl, 307);
  } catch {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
}
