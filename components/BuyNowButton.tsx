"use client";

import { useState } from "react";

type BuyNowButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type CheckoutErrorResponse = {
  error?: string;
  detail?: string;
  type?: string;
  code?: string;
};

export default function BuyNowButton({
  children,
  className = "btn-primary",
  style,
}: BuyNowButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", { method: "POST" });
      const data = (await response.json()) as CheckoutErrorResponse & {
        url?: string;
      };

      if (!response.ok || !data.url) {
        console.error("Checkout API error:", {
          status: response.status,
          ...data,
        });
        throw new Error(
          data.detail ?? data.error ?? `Checkout failed (${response.status})`,
        );
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout failed:", error);
      setLoading(false);
      alert("Something went wrong starting checkout. Please try again.");
    }
  }

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Redirecting…" : children}
    </button>
  );
}
