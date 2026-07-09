"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { JOURNAL_PAGES } from "@/lib/journal-pages";

export default function WhatsInside() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const activePage = activeIndex !== null ? JOURNAL_PAGES[activeIndex] : null;

  const closeViewer = useCallback(() => setActiveIndex(null), []);

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % JOURNAL_PAGES.length;
    });
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + JOURNAL_PAGES.length) % JOURNAL_PAGES.length;
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeViewer, goNext, goPrev]);

  return (
    <section className="pages-section" id="inside">
      <div className="section-inner">
        <div className="divider">
          <span className="heart-icon">♡</span>
        </div>
        <h2 className="section-title">
          What&apos;s <em>Inside</em>
        </h2>
        <p className="section-sub">
          Every page was written with intention — to help you see clearly, feel
          honestly, and move forward.
        </p>
        <div className="pages-grid">
          {JOURNAL_PAGES.map((page, index) => (
            <button
              key={page.src}
              type="button"
              className="page-card page-card--clickable"
              onClick={() => setActiveIndex(index)}
              aria-label={`View full page: ${page.title}`}
            >
              <div
                className="page-card-preview"
                style={{
                  aspectRatio: `${page.width} / ${page.height}`,
                }}
              >
                <Image
                  src={page.src}
                  alt={page.alt}
                  fill
                  className="page-card-image"
                  sizes="(max-width: 768px) 45vw, 320px"
                />
              </div>
              <div className="page-card-body">
                <div className="page-card-title">{page.title}</div>
                <p className="page-card-desc">{page.description}</p>
                <span className="page-card-hint">Click to view full page</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isOpen && activePage && activeIndex !== null && (
        <div
          className="page-viewer-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${activePage.title}`}
          onClick={closeViewer}
        >
          <button
            type="button"
            className="page-viewer-close"
            onClick={closeViewer}
            aria-label="Close viewer"
          >
            ×
          </button>

          <div
            className="page-viewer-toolbar"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="page-viewer-meta">
              <p className="page-viewer-title">{activePage.title}</p>
              <p className="page-viewer-counter">
                {activeIndex + 1} of {JOURNAL_PAGES.length}
              </p>
            </div>
          </div>

          <div
            className="page-viewer-stage"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="page-viewer-nav page-viewer-nav--prev"
              onClick={goPrev}
              aria-label="Previous page"
            >
              ‹
            </button>

            <div
              className="page-viewer-image-wrap"
              style={{
                aspectRatio: `${activePage.width} / ${activePage.height}`,
                ["--page-height-ratio" as string]:
                  activePage.height / activePage.width,
              }}
            >
              <Image
                src={activePage.src}
                alt={activePage.alt}
                fill
                className="page-viewer-image"
                sizes="(max-width: 768px) calc(100vw - 96px), 620px"
                priority
                style={{ objectFit: "contain" }}
              />
            </div>

            <button
              type="button"
              className="page-viewer-nav page-viewer-nav--next"
              onClick={goNext}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
