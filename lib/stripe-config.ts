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

function isProductionDeploy(): boolean {
  return process.env.VERCEL_ENV === "production";
}

function assertPriceId(priceId: string): string {
  if (!priceId.startsWith("price_")) {
    throw new Error(
      "Stripe price ID must start with price_ (check Vercel env var value)",
    );
  }

  return priceId;
}

function assertSecretKey(key: string, requireLive: boolean): string {
  if (!key.startsWith("sk_test_") && !key.startsWith("sk_live_")) {
    throw new Error(
      "Stripe secret key must start with sk_test_ or sk_live_ (check Vercel env var value)",
    );
  }

  if (requireLive && !key.startsWith("sk_live_")) {
    throw new Error(
      "Production checkout requires STRIPE_SECRET_KEY to be a live key (sk_live_...)",
    );
  }

  return key;
}

export function getStripeSecretKey(): string {
  if (isProductionDeploy()) {
    const key = readEnv("STRIPE_SECRET_KEY");

    if (!key) {
      throw new Error(
        "STRIPE_SECRET_KEY must be set in production (live sk_live_ key)",
      );
    }

    return assertSecretKey(key, true);
  }

  const key = readEnv("STRIPE_SECRET_KEY", "STRIPE_SECRET_KEY_TEST");

  if (!key) {
    throw new Error(
      "Stripe secret key is not set (STRIPE_SECRET_KEY or STRIPE_SECRET_KEY_TEST)",
    );
  }

  return assertSecretKey(key, false);
}

export function getStripePublishableKey(): string | undefined {
  if (isProductionDeploy()) {
    return readEnv("STRIPE_PUBLISHABLE_KEY");
  }

  return readEnv("STRIPE_PUBLISHABLE_KEY", "STRIPE_PUBLISHABLE_KEY_TEST");
}

export function getStripePriceId(): string {
  if (isProductionDeploy()) {
    const priceId = readEnv("STRIPE_PRICE_ID");

    if (!priceId) {
      throw new Error(
        "STRIPE_PRICE_ID must be set in production (live price_... from your Stripe product)",
      );
    }

    return assertPriceId(priceId);
  }

  const priceId = readEnv("STRIPE_PRICE_ID", "STRIPE_PRICE_ID_TEST");

  if (!priceId) {
    throw new Error(
      "Stripe price ID is not set (STRIPE_PRICE_ID or STRIPE_PRICE_ID_TEST)",
    );
  }

  return assertPriceId(priceId);
}

export function getStripeMode(): "live" | "test" {
  return getStripeSecretKey().startsWith("sk_live_") ? "live" : "test";
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
