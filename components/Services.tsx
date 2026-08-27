"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Eyebrow } from "./ui";

// The other five services as a ring of green bubbles around the section's
// own headline — thin lines radiate from the center to each bubble as the
// cluster assembles. Hover/tap a bubble and its one-liner appears beside it.
// Entrance/lines/bob live in globals.css; static (no-JS / reduced motion)
// shows the settled cluster with lines drawn.
const services = [
  {
    name: "Email marketing",
    blurb: "Past guests become repeat bookings. You approve once.",
    size: "12.5rem",
    x: "38%",
    y: "0%",
    cx: "49.2%",
    cy: "17.4%",
    side: "right",
  },
  {
    name: "Social media",
    blurb: "Posts, Stories and Reels — approved by you monthly.",
    size: "11.5rem",
    x: "70%",
    y: "20%",
    cx: "80.3%",
    cy: "36%",
    side: "right",
  },
  {
    name: "Website, SEO & AI search",
    blurb: "A beautiful site, visible on Google, ChatGPT and Gemini.",
    size: "14rem",
    x: "56%",
    y: "58%",
    cx: "68.5%",
    cy: "77.4%",
    side: "right",
  },
  {
    name: "Dynamic pricing",
    blurb: "Bespoke pricing, tuned 24/7 — best rate on your own site.",
    size: "12rem",
    x: "12%",
    y: "60%",
    cx: "22.7%",
    cy: "76.7%",
    side: "left",
  },
  {
    name: "Reputation",
    blurb: "Every review answered thoughtfully, in your voice.",
    size: "11rem",
    x: "3%",
    y: "17%",
    cx: "12.8%",
    cy: "32.3%",
    side: "left",
  },
];

export default function Services() {
  const stageRef = useRef<HTMLDivElement>(null);
  const tourTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [active, setActive] = useState<number | null>(null);

  // any real user interaction cancels the one-time tour
  const cancelTour = () => {
    tourTimers.current.forEach(clearTimeout);
    tourTimers.current = [];
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    el.classList.add("is-armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          observer.disconnect();
          // one-time tour: after the ring assembles, show each tip briefly
          // so passive scrollers receive the blurbs without any clutter
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const start = 2100; // after the last bubble has popped in
            const dwell = 1900;
            services.forEach((_, i) => {
              tourTimers.current.push(
                setTimeout(() => setActive(i), start + i * dwell)
              );
            });
            tourTimers.current.push(
              setTimeout(
                () => setActive(null),
                start + services.length * dwell
              )
            );
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelTour();
    };
  }, []);

  return (
    <section id="services" className="py-section">
      <Container>
        <Eyebrow>Beyond search</Eyebrow>

        <div
          className="svc-stage mx-auto mt-10 flex max-w-[56rem] flex-col gap-7 md:relative md:mt-14 md:block md:h-[36rem]"
          ref={stageRef}
        >
          {/* radiating lines, center → each bubble (desktop ring only) */}
          <svg
            className="svc-lines hidden md:block"
            aria-hidden="true"
          >
            {services.map((s, i) => (
              <line
                key={s.name}
                x1="50%"
                y1="50%"
                x2={s.cx}
                y2={s.cy}
                pathLength={100}
                style={{ "--i": i } as React.CSSProperties}
              />
            ))}
          </svg>

          {/* the headline lives at the heart of the ring */}
          <h2 className="svc-center order-first w-full text-center font-display text-[1.75rem] leading-tight md:absolute md:left-1/2 md:top-1/2 md:w-[19rem] md:-translate-x-1/2 md:-translate-y-1/2 md:text-[1.9rem]">
            Everything else a full marketing team would do.
          </h2>

          {services.map((s, i) => (
            <button
              type="button"
              key={s.name}
              className={`svc-bubble group relative md:absolute ${
                active === i ? "is-active z-10" : "hover:z-10 focus-visible:z-10"
              }`}
              data-side={s.side}
              style={
                {
                  "--i": i,
                  "--size": s.size,
                  "--x": s.x,
                  "--y": s.y,
                } as React.CSSProperties
              }
              onMouseEnter={() => {
                cancelTour();
                setActive(i);
              }}
              onMouseLeave={() => setActive((a) => (a === i ? null : a))}
              onFocus={() => {
                cancelTour();
                setActive(i);
              }}
              onClick={() => {
                cancelTour();
                setActive(i);
              }}
            >
              <span className="svc-bubble__inner grid size-full place-items-center rounded-full bg-green p-6 text-center font-display text-[1.375rem] leading-snug text-paper shadow-[0_14px_34px_rgba(34,28,21,0.22)] transition-[scale,box-shadow] duration-300 group-hover:scale-[1.06] group-hover:shadow-[0_20px_44px_rgba(34,28,21,0.3)]">
                {s.name}
              </span>

              {/* the peek tip, beside its own bubble */}
              <span className="svc-tip rounded-xl border border-line bg-paper px-4 py-3 text-left text-[0.9375rem] leading-snug text-ink shadow-[0_10px_28px_rgba(34,28,21,0.14)]">
                {s.blurb}
              </span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
