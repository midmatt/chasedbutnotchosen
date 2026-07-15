import Stripe from "stripe";

function readEnv(...names: string[]): string | undefined {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) {
      return value;
    }
  }

  return undefined;
}

export function getStripeSecretKey(): string {
  const key = readEnv("STRIPE_SECRET_KEY", "STRIPE_SECRET_KEY_TEST");

  if (!key) {
    throw new Error(
      "Stripe secret key is not set (STRIPE_SECRET_KEY or STRIPE_SECRET_KEY_TEST)",
    );
  }

  if (!key.startsWith("sk_test_") && !key.startsWith("sk_live_")) {
    throw new Error(
      "Stripe secret key must start with sk_test_ or sk_live_ (check Vercel env var value)",
    );
  }

  return key;
}

export function getStripePublishableKey(): string | undefined {
  return readEnv("STRIPE_PUBLISHABLE_KEY", "STRIPE_PUBLISHABLE_KEY_TEST");
}

export function getStripePriceId(): string {
  const priceId = readEnv("STRIPE_PRICE_ID", "STRIPE_PRICE_ID_TEST");

  if (!priceId) {
    throw new Error(
      "Stripe price ID is not set (STRIPE_PRICE_ID or STRIPE_PRICE_ID_TEST)",
    );
  }

  if (!priceId.startsWith("price_")) {
    throw new Error(
      "Stripe price ID must start with price_ (check Vercel env var value)",
    );
  }

  return priceId;
}

const PRODUCTION_SITE_URL = "https://chasedbutnotchosen.com";

export function getBaseUrl(): string {
  const configured = readEnv("NEXT_PUBLIC_BASE_URL");
  if (configured) {
    return configured.replace(/\/$/, "");
  }

  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  const vercelUrl = readEnv("VERCEL_URL");
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/^https?:\/\//, "")}`;
  }

  return "http://localhost:3000";
}

export function getStripe(): Stripe {
  return new Stripe(getStripeSecretKey());
}

function isStripeError(error: unknown): error is Stripe.errors.StripeError {
  return (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    typeof (error as Stripe.errors.StripeError).type === "string"
  );
}

export function formatCheckoutError(error: unknown): {
  message: string;
  type?: string;
  code?: string;
} {
  if (isStripeError(error)) {
    return {
      message: error.message,
      type: error.type,
      code: error.code,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "Unknown checkout error" };
}
