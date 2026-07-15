import Image from "next/image";
import BuyNowButton from "./BuyNowButton";

const BOOK_COVER_SRC = "/images/book-cover.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="petal petal-1" />
      <div className="petal petal-2" />
      <div className="petal petal-3" />

      <div className="hero-text">
        <div className="eyebrow">A journal for healing</div>
        <h1 className="hero-title">
          Being Chased,
          <span className="big">
            But Not
            <br />
            <em>Chosen.</em>
          </span>
        </h1>
        <p className="hero-subtitle">
          A journal for healing, releasing &amp;
          <br />
          returning to yourself.
        </p>
        <div className="hero-quote">
          <p>
            &ldquo;I was not too much. I was just not chosen in the way I
            deserved.&rdquo;
          </p>
        </div>
        <p className="hero-price">Instant Digital Download</p>
        <div className="hero-actions">
          <BuyNowButton>Buy Now — $19.99</BuyNowButton>
          <a href="#inside" className="btn-secondary">
            Preview Inside
          </a>
          <button
            type="button"
            className="btn-secondary"
            disabled
            aria-disabled="true"
            aria-label="Physical book — coming soon"
            title="Coming soon"
          >
            Physical Book
          </button>
        </div>
        <div className="hero-tags">
          <span className="tag">Self-Reflection</span>
          <span className="tag">Emotional Awareness</span>
          <span className="tag">Boundary Building</span>
          <span className="tag">Healing &amp; Growth</span>
          <span className="tag">Self-Worth</span>
        </div>
      </div>

      <div className="hero-visual">
        <Image
          src={BOOK_COVER_SRC}
          alt="Being Chased But Not Chosen Journal Cover"
          width={1130}
          height={1461}
          className="book-mockup"
          priority
          sizes="(max-width: 768px) 292px, 371px"
          style={{ height: "auto" }}
        />
        <div className="floating-badge">
          <span className="badge-price">$19.99</span>
          <span className="badge-label">Download</span>
        </div>
      </div>
    </section>
  );
}
