"use client";

import { useEffect, useRef, useState } from "react";

// MOTION ELEMENT #2 — the SEM explainer.
// Job: make "a traveler searches Google, finds your inn first, and books on
// your website — not Booking.com" visible without words, for a reader who may
// not know what Google Ads are. Four beats: a plain-language search types
// itself → results appear → the inn rises to the top → a booked-direct
// confirmation lands (+ a small report line).
//
// The default render is the FINAL tableau, so no-JS and reduced-motion users
// see a complete, legible scene. With JS + motion allowed, a phase machine
// replays the beats on scroll-in, then loops with a long hold.
// The featured inn is The Marlow House — the same fictional property as the
// first proof card, so the page's world stays coherent.

const QUERY = "where to stay in beacon, ny";

type Phase = "typing" | "results" | "rise" | "booked" | "coda";

const TIMELINE: Array<[Phase, number]> = [
  ["results", 1900],
  ["rise", 3100],
  ["booked", 4500],
  ["coda", 5900],
];
const CYCLE_MS = 11500;

export default function SemDemo({
  frameless = false,
  startDelayMs = 0,
}: {
  /* drop the outer paper panel so the cards float directly on the scene */
  frameless?: boolean;
  /* wait after scroll-in before the first cycle (e.g. until the fog settles) */
  startDelayMs?: number;
}) {
  // SSR default = finished state (static tableau)
  const [phase, setPhase] = useState<Phase>("coda");
  const [typed, setTyped] = useState(QUERY);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let typing: ReturnType<typeof setInterval> | undefined;
    let running = false;

    const runCycle = () => {
      // beat 1: retype the query
      setPhase("typing");
      setTyped("");
      let i = 0;
      typing = setInterval(() => {
        i += 1;
        setTyped(QUERY.slice(0, i));
        if (i >= QUERY.length && typing) clearInterval(typing);
      }, 42);
      // beats 2–5
      for (const [p, at] of TIMELINE) {
        timers.push(setTimeout(() => setPhase(p), at));
      }
      timers.push(setTimeout(runCycle, CYCLE_MS));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          timers.push(setTimeout(runCycle, startDelayMs));
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      if (typing) clearInterval(typing);
    };
  }, [startDelayMs]);

  return (
    <div
      className={
        /* text-ink pins the scene's base color — the hero places it inside a
           text-paper context, which would render inherited text invisibly on
           the paper cards */
        frameless
          ? "sem-demo text-ink"
          : "sem-demo mt-14 rounded-2xl border border-line bg-paper px-5 py-10 md:px-10 md:py-14 text-ink"
      }
      data-phase={phase}
      ref={sceneRef}
    >
      <div className="mx-auto flex w-full max-w-xl flex-col gap-3">
        {/* the search */}
        <div className="mb-2 flex items-center gap-3 rounded-full border border-line bg-paper px-5 py-3.5 shadow-[0_2px_10px_rgba(34,28,21,0.06)]">
          <svg viewBox="0 0 20 20" className="size-4 shrink-0 text-muted" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12.8" y1="12.8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="truncate text-[1.0625rem]">{typed}</span>
          <span className="sem-demo__caret h-5 w-px shrink-0 bg-ink" aria-hidden="true" />
        </div>

        {/* the results — DOM order is the FINAL order (inn on top) */}
        <div className="sem-demo__results flex flex-col gap-3">
          <div className="sem-demo__result sem-demo__result--inn flex h-[4.5rem] items-center gap-4 rounded-xl border border-line bg-paper px-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-green font-display text-xl text-paper">
              M
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-[1.1875rem] leading-tight">
                The Marlow House
              </span>
              <span className="block truncate text-[0.9375rem] text-muted">
                ★ 4.9 · Inn · Beacon, New York
              </span>
            </span>
            <span className="sem-demo__badge ml-auto shrink-0 rounded-full bg-green/10 px-3 py-1 text-[0.8125rem] font-semibold text-green">
              themarlowhouse.com
            </span>
          </div>

          <div className="sem-demo__result flex h-[4.5rem] items-center gap-4 rounded-xl border border-line bg-paper px-4 text-muted">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-paper-deep font-display text-xl">
              R
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[1.0625rem]">Riverside Rooms</span>
              <span className="block truncate text-[0.9375rem]">Guesthouse · Beacon</span>
            </span>
          </div>

          <div className="sem-demo__result flex h-[4.5rem] items-center gap-4 rounded-xl border border-line bg-paper px-4 text-muted">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-paper-deep font-display text-xl">
              B
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[1.0625rem]">Beacon stays — Booking.com</span>
              <span className="block truncate text-[0.9375rem]">From $210 a night</span>
            </span>
          </div>
        </div>

        {/* the confirmation */}
        <div className="sem-demo__confirm mt-2 flex items-center gap-3 rounded-xl bg-green px-4 py-3.5 text-paper">
          <svg viewBox="0 0 20 20" className="size-5 shrink-0" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 10.5l2.6 2.6L14 7.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[1.0625rem] font-semibold">Booked direct</span>
          <span className="text-[0.9375rem] text-paper/75">2 nights · June 14–16</span>
          {/* the coda: a whisper of "you see every booking we drive" */}
          <span className="sem-demo__coda ml-auto text-[0.875rem] text-paper/75">
            +1 in your monthly report
          </span>
        </div>
      </div>
    </div>
  );
}
