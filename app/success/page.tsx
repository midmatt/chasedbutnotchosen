import Link from "next/link";
import SuccessConfetti from "@/components/SuccessConfetti";

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  return (
    <main className="purchase-section" style={{ minHeight: "100vh", paddingTop: 80 }}>
      {sessionId ? <SuccessConfetti /> : null}
      <div className="section-inner">
        <div className="purchase-card">
          <div className="purchase-title">
            Thank You for Your <em>Purchase</em>
          </div>
          <p className="purchase-desc">
            Your payment was successful. Your journal is ready to download.
          </p>
          {sessionId ? (
            <a
              href={`/api/download?session_id=${encodeURIComponent(sessionId)}`}
              className="btn-primary"
              style={{ fontSize: "0.9rem", padding: "18px 52px" }}
            >
              Download Your Book
            </a>
          ) : (
            <p className="purchase-desc">
              We couldn&apos;t find your session. Please check your email for a
              receipt or{" "}
              <Link href="/" style={{ color: "var(--rose-deep)" }}>
                return home
              </Link>
              .
            </p>
          )}
          <p className="secure-note">Instant PDF download · Save for offline reading</p>
        </div>
      </div>
    </main>
  );
}
