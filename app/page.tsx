import Image from "next/image";
import Hero from "@/components/Hero";
import WhatsInside from "@/components/WhatsInside";

export default function Home() {
  return (
    <>
      <nav>
        <span className="nav-brand">Chased But Not Chosen</span>
        <ul className="nav-links">
          <li>
            <a href="#why">The Story</a>
          </li>
          <li>
            <a href="#inside">What&apos;s Inside</a>
          </li>
          <li>
            <a href="#checklist">The Checklist</a>
          </li>
          <li>
            <a href="#purchase" className="nav-cta">
              Get the Journal
            </a>
          </li>
        </ul>
      </nav>

      <Hero />

      <section className="why-section" id="why">
        <div className="section-inner">
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>
          <h2 className="section-title">
            Why I Wrote <em>This</em>
          </h2>
          <p className="section-sub">
            Because too many of us carry this pain silently.
          </p>
          <div className="why-grid">
            <div className="why-text">
              <p>
                I wrote this because too many people carry the pain of feeling
                unwanted while still holding on to hope.{" "}
                <strong>I wrote this because I&apos;ve been there too.</strong>
              </p>
              <p>
                I know what it&apos;s like to stay in situations that leave you
                emotionally exhausted. To wait for clarity that never comes. To
                keep giving pieces of yourself while wondering why it still
                doesn&apos;t feel like enough.
              </p>
              <p>
                So many of us accept half-love because we&apos;re afraid that
                being alone might hurt more. We settle for inconsistency, mixed
                signals, emotional distance, and relationships where we&apos;re
                only partially valued. Over time, that uncertainty slowly chips
                away at our confidence, self-worth, and peace.
              </p>
              <p>
                <strong>
                  What hurts the most isn&apos;t always rejection. Sometimes
                  it&apos;s almost being chosen.
                </strong>
              </p>
              <p>
                This journal was written for the person lying awake at night
                wondering why they weren&apos;t enough. For the person making
                excuses for someone else&apos;s inconsistency. For the person
                afraid to walk away because they still love deeply.
              </p>
              <p>
                My hope is that these pages help you recognize the things you
                shouldn&apos;t ignore, trust what you&apos;ve been feeling, and
                begin choosing yourself the way you&apos;ve always chosen everyone
                else.
              </p>
            </div>
            <div>
              <div className="reminders-box">
                <div className="reminders-label">
                  — Reminders for Your Healing —
                </div>
                <div className="reminder-item">
                  You were never asking for too much from the wrong person.
                </div>
                <div className="reminder-item">
                  Being chosen should never require self-abandonment.
                </div>
                <div className="reminder-item">
                  You cannot heal in the same place you kept shrinking to
                  survive.
                </div>
                <div className="reminder-item">
                  The hardest goodbye is the one you owe yourself.
                </div>
                <div className="reminder-item">
                  Sometimes the hardest relationship we have to rebuild is the
                  one we have with ourselves.
                </div>
                <div className="reminder-item">
                  You deserve honesty, consistency, respect, appreciation, and a
                  love that doesn&apos;t leave you questioning where you stand.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dedication-section" id="dedication">
        <div className="dedication-inner">
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>
          <div className="dedication-header">
            Being Chased, <em>but Not Being Chosen.</em>
          </div>
          <div className="ded-title">Dedication</div>
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>

          <div className="ded-item">
            To everyone who has ever questioned their worth because someone else
            failed to see it.
          </div>
          <span className="heart-icon">♡</span>
          <div className="ded-item" style={{ marginTop: 16 }}>
            To the people who waited for texts, calls, promises, and commitments
            that never came.
          </div>
          <span className="heart-icon">♡</span>
          <div className="ded-item" style={{ marginTop: 16 }}>
            To those who gave second chances, third chances, and more because
            your heart was bigger than your fear.
          </div>
          <span className="heart-icon">♡</span>
          <div className="ded-item" style={{ marginTop: 16 }}>
            To those who were kept but never truly chosen.
          </div>

          <div className="ded-cta">This journal is for you.</div>
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>
          <div className="ded-closing">
            May these pages remind you that your value was never determined by
            someone else&apos;s ability to love you.
          </div>
          <div className="ded-closing">
            <em>You were always worthy. You were always enough.</em>
          </div>
        </div>
      </section>

      <section className="intro-section" id="intro">
        <div className="section-inner">
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>
          <h2 className="section-title">
            About <em>This Journal</em>
          </h2>
          <p className="section-sub">
            This journal was not created to make you bitter. It was created to
            make you honest.
          </p>
          <div className="two-col">
            <div>
              <div className="intro-card">
                <div className="intro-card-title">This is a space for…</div>
                <p>
                  Self-reflection, emotional awareness, healing, and truth. Not
                  every relationship is unhealthy because someone was
                  &ldquo;bad.&rdquo; Sometimes we stay because of our own wounds,
                  fears, loneliness, attachment, trauma, or desire for potential.
                </p>
              </div>
              <div className="intro-card">
                <div className="intro-card-title">The goal is to identify…</div>
                <ul className="identify-list">
                  <li>Unhealthy relationship patterns</li>
                  <li>Emotional triggers</li>
                  <li>Behaviors you continue to excuse</li>
                  <li>Why you struggle to walk away</li>
                  <li>What keeps you emotionally attached</li>
                  <li>The difference between attention and intention</li>
                  <li>The parts of yourself that still need healing</li>
                </ul>
              </div>
              <div className="intro-card">
                <div className="intro-card-title">
                  Most importantly, this journal reminds you…
                </div>
                <ul className="identify-list">
                  <li>You are worthy of consistency</li>
                  <li>You are worthy of emotional safety</li>
                  <li>You are worthy of honesty</li>
                  <li>You are worthy of clarity</li>
                  <li>
                    You are worthy of being chosen fully, clearly, and
                    intentionally
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="intro-card">
                <div className="intro-card-title">
                  The goal is not to shame yourself.
                </div>
                <p>
                  The goal is to understand yourself. You are not filling these
                  pages out to obsess over another person. You are filling them
                  out to reconnect with <em>you</em>.
                </p>
              </div>
              <div className="intro-card">
                <div className="intro-card-title">How to use this journal</div>
                <p>
                  There is no &ldquo;right way&rdquo; to complete these pages.
                  Journal daily. Fill out pages after moments or emotional
                  triggers. Reflect after contact with someone. Resist pages when
                  you feel tempted to go back. Write freely and honestly without
                  judging yourself.
                </p>
                <p
                  style={{
                    marginTop: 12,
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "var(--rose-muted)",
                  }}
                >
                  Do not write what sounds good. Write what is true.
                </p>
              </div>
              <div className="quote-pullout">
                <p>
                  If you feel defensive, triggered, emotional, confused,
                  attached, hopeful, angry, embarrassed, or sad while answering
                  these prompts — that is okay. Those emotions are information.
                </p>
                <div className="attr">— The Journal</div>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  color: "var(--rose-deep)",
                  marginTop: 20,
                  textAlign: "center",
                }}
              >
                Healing begins when you choose yourself.
                <br />
                And choosing yourself is where the cycle finally ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsInside />

      <section className="checklist-section" id="checklist">
        <div className="section-inner">
          <div className="checklist-grid">
            <div>
              <Image
                className="checklist-img"
                src="/images/checklist.png"
                alt="The Checklist"
                width={1130}
                height={1463}
                sizes="(max-width: 768px) 100vw, 540px"
                style={{ height: "auto" }}
              />
            </div>
            <div>
              <div className="divider">
                <span className="heart-icon">♡</span>
              </div>
              <h2 className="section-title">
                The Checklist I Wish
                <br />I Had <em>Sooner</em>
              </h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                Things I shouldn&apos;t have ignored.
              </p>
              <div className="checklist-items">
                <div className="check-item">
                  <div className="check-icon">♡</div>
                  <div className="check-text">
                    <strong>When affection is suddenly withdrawn</strong>
                    <span>
                      Is love being used as comfort — or as control?
                    </span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon">♡</div>
                  <div className="check-text">
                    <strong>
                      When you begin apologizing just to end the distance
                    </strong>
                    <span>
                      Have you been conditioned to believe that keeping the peace
                      matters more than being understood?
                    </span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon">♡</div>
                  <div className="check-text">
                    <strong>
                      When they refuse to verbalize their feelings but expect
                      loyalty
                    </strong>
                    <span>
                      Are they protecting their emotions — or keeping you
                      emotionally confused and attached?
                    </span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon">♡</div>
                  <div className="check-text">
                    <strong>
                      When &ldquo;I never promised you anything&rdquo; becomes
                      their shield
                    </strong>
                    <span>
                      Did they benefit from your loyalty while avoiding
                      accountability for your feelings?
                    </span>
                  </div>
                </div>
                <div className="check-item">
                  <div className="check-icon">♡</div>
                  <div className="check-text">
                    <strong>
                      When conflict became a route to end the relationship
                    </strong>
                    <span>Was conflict an escape route instead of a solution?</span>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "var(--rose-deep)",
                  marginTop: 28,
                  textAlign: "right",
                }}
              >
                + so much more inside the journal ♡
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section" id="testimonials">
        <div className="section-inner">
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>
          <h2 className="section-title">
            Words from <em>Readers</em>
          </h2>
          <p className="section-sub">
            Real reflections from women who chose themselves.
          </p>
          <div className="testimonials">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-text">
                &ldquo;I cried through the first page because it named exactly
                what I had been going through for two years. This journal gave me
                language I didn&apos;t have before.&rdquo;
              </div>
              <div className="testi-name">— M., 34</div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-text">
                &ldquo;The Checklist was a reckoning. I checked almost every
                single box. I finally stopped making excuses and started making
                decisions for myself.&rdquo;
              </div>
              <div className="testi-name">— A., 28</div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-text">
                &ldquo;I&apos;ve done therapy, read books, listened to podcasts.
                Nothing helped me organize my feelings like this journal.
                It&apos;s personal. It&apos;s honest. It&apos;s exactly what I
                needed.&rdquo;
              </div>
              <div className="testi-name">— T., 41</div>
            </div>
          </div>
        </div>
      </section>

      <section className="purchase-section" id="purchase">
        <div className="section-inner">
          <div className="divider">
            <span className="heart-icon">♡</span>
          </div>
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            Ready to Choose <em>Yourself?</em>
          </h2>
          <div className="purchase-card">
            <div className="purchase-title">
              Being Chased,
              <br />
              <em>But Not Chosen</em>
            </div>
            <p className="purchase-desc">
              A journal for healing, releasing &amp; returning to yourself.
              Instant PDF download — print at home or use digitally.
            </p>
            <div className="price-display">$19.99</div>
            <div className="price-note">One-time payment · Instant download</div>
            <ul className="includes-list">
              <li>Full printable journal PDF</li>
              <li>The Reality Check worksheet</li>
              <li>The Checklist I Wish I Had Sooner (2 pages)</li>
              <li>Keeping Receipts accountability pages</li>
              <li>How I Can Choose Me action plan</li>
              <li>My Personal Experiences journaling pages</li>
              <li>Things I Need to Remember notes pages</li>
            </ul>
            <a href="#" className="btn-primary" style={{ fontSize: "0.9rem", padding: "18px 52px" }}>
              Download Now — $19.99
            </a>
            <p className="secure-note">
              🔒 Secure checkout · Digital PDF · Instant access
            </p>
          </div>
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "var(--rose-muted)",
              marginTop: 40,
            }}
          >
            ♡ &nbsp; I see it. I name it. I release it. I choose me. &nbsp; ♡
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-brand">chasedbutnotchosen.com</div>
        <p>
          A journal for healing, releasing &amp; returning to yourself.
          <br />
          &copy; 2025 Chased But Not Chosen. All rights reserved.
          <br />
          <a href="#">Privacy Policy</a> &nbsp;·&nbsp;{" "}
          <a href="#">Terms of Use</a> &nbsp;·&nbsp; <a href="#">Contact</a>
        </p>
      </footer>
    </>
  );
}
