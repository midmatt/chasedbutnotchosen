"use client";

import { useState } from "react";

type BuyNowButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
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
      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Checkout failed");
      }

      window.location.href = data.url;
    } catch {
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
