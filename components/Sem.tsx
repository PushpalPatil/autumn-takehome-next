"use client";

import { useEffect, useRef } from "react";
import { Container, Eyebrow } from "./ui";

// SEM deep-dive: what Autumn actually does, in plain language.
// Each benefit is a row: title on the left, a thin arrow that draws itself
// toward the one-line body on the right (choreography in globals.css).
// Static (no-JS / reduced motion): everything visible, arrows drawn.
const points = [
  {
    title: "Guests find you first",
    body: "Your property at the top of Google Search, Maps, and Hotels.",
  },
  {
    title: "The right guests, not just more clicks",
    body: "We target travelers most likely to book — and love — your property.",
  },
  {
    title: "Tended daily, by people",
    body: "A hospitality expert adjusts budgets and bids, every day. You never touch a dashboard.",
  },
  {
    title: "You see every booking we drive",
    body: "A simple monthly report shows performance and direct bookings. No jargon, no spreadsheets.",
  },
];

export default function Sem() {
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowsRef.current;
    if (!el) return;
    el.classList.add("is-armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sem" className="grad-beige-arrive py-section">
      <Container>
        <Eyebrow>Search engine marketing, done for you</Eyebrow>
        <h2 className="text-h2">More of the guests you love, booking direct.</h2>
        <p className="mt-5 max-w-[68ch] text-lg text-muted">
          Use modern AI to fill your rooms with the guests you love — more
          travelers finding your website.
        </p>

        <div className="sem-rows mt-16 flex flex-col gap-10" ref={rowsRef}>
          {points.map((p, i) => (
            <div
              className="sem-row grid items-center gap-4 md:grid-cols-[minmax(15rem,22rem)_minmax(5rem,9rem)_1fr] md:gap-8"
              style={{ "--i": i } as React.CSSProperties}
              key={p.title}
            >
              <h3 className="flex items-center gap-3 text-[1.375rem]">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-green"
                  aria-hidden="true"
                />
                {p.title}
              </h3>

              {/* the arrow draws itself toward the body */}
              <svg
                className="sem-row__arrow hidden h-3 w-full md:block"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path className="sem-row__shaft" d="M2 6 H92" pathLength={100} />
                <path
                  className="sem-row__head"
                  d="M84 1.5 L93 6 L84 10.5"
                  pathLength={100}
                />
              </svg>

              <p className="sem-row__body text-[1.0625rem] text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
