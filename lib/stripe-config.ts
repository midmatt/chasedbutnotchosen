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
  const key = readEnv("STRIPE_SECRET_KEY_TEST", "STRIPE_SECRET_KEY");

  if (!key) {
    throw new Error(
      "Stripe secret key is not set (STRIPE_SECRET_KEY_TEST or STRIPE_SECRET_KEY)",
    );
  }

  if (!key.startsWith("sk_test_") && !key.startsWith("sk_live_")) {
    throw new Error(
      "Stripe secret key must start with sk_test_ or sk_live_ (check Vercel env var value)",
    );
  }

  return key;
}

export function getStripePriceId(): string {
  const priceId = readEnv("STRIPE_PRICE_ID_TEST", "STRIPE_PRICE_ID");

  if (!priceId) {
    throw new Error(
      "Stripe price ID is not set (STRIPE_PRICE_ID_TEST or STRIPE_PRICE_ID)",
    );
  }

  if (!priceId.startsWith("price_")) {
    throw new Error(
      "Stripe price ID must start with price_ (check Vercel env var value)",
    );
  }

  return priceId;
}

export function getBaseUrl(): string {
  const configured = readEnv("NEXT_PUBLIC_BASE_URL");
  if (configured) {
    return configured.replace(/\/$/, "");
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
