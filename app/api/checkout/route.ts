import { NextResponse } from "next/server";
import {
  formatCheckoutError,
  getBaseUrl,
  getStripe,
  getStripeMode,
  resolveStripePriceId,
} from "@/lib/stripe-config";

export async function POST() {
  try {
    const stripe = getStripe();
    const priceId = await resolveStripePriceId(stripe);
    const baseUrl = getBaseUrl();
    const mode = getStripeMode();

    console.info("[checkout] Creating session", {
      mode,
      priceId,
      baseUrl,
      secretKeyPrefix: getStripeSecretKeyPrefix(),
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/thankyou?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
    });

    if (!session.url) {
      console.error("[checkout] Stripe returned session without url", {
        sessionId: session.id,
      });
      return NextResponse.json(
        { error: "Failed to create checkout session", detail: "Missing session URL" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const formatted = formatCheckoutError(error);

    console.error("[checkout] Failed to create session", formatted, error);

    return NextResponse.json(
      {
        error: "Failed to create checkout session",
        detail: formatted.message,
        type: formatted.type,
        code: formatted.code,
      },
      { status: 500 },
    );
  }
}

function getStripeSecretKeyPrefix(): string {
  const key = isProductionKeyLookup();
  return key ? `${key.slice(0, 8)}…` : "missing";
}

function isProductionKeyLookup(): string {
  if (process.env.VERCEL_ENV === "production") {
    return process.env.STRIPE_SECRET_KEY?.trim() || "";
  }

  return (
    process.env.STRIPE_SECRET_KEY?.trim() ||
    process.env.STRIPE_SECRET_KEY_TEST?.trim() ||
    ""
  );
}
