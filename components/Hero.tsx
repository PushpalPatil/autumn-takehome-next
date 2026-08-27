"use client";

import { useEffect, useRef } from "react";
import SemDemo from "./SemDemo";
import { Button, Container } from "./ui";

// MOTION ELEMENT #1 — the fog reveal. The scene stack and choreography live
// in globals.css (they're CSS-shaped: layered gradients, masks, keyframes);
// this component lays out the content with utilities and arms `.is-ready`
// after mount. The .hero__* class names are the choreography's hooks.
//
// When the AI-generated scene lands, drop it in /public as hero-scene.jpg
// and replace the `.hero__scene` div with an <Image fill priority /> whose
// className keeps "hero__scene" (object-cover via utilities).
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroRef.current?.classList.add("is-ready");
  }, []);

  return (
    <section
      className="hero relative flex min-h-svh items-center overflow-hidden bg-ink"
      id="hero"
      ref={heroRef}
    >
      {/* TEMP until hero-scene.jpg lands: painted stand-in of dawn hills */}
      <div className="hero__scene" aria-hidden="true" />

      {/* contrast scrim so paper text reads on any image region */}
      <div className="hero__scrim" aria-hidden="true" />

      {/* fog: two sweep banks (cross once, park offscreen) + two ambient drifters */}
      <div className="hero__fog hero__fog--sweep-1" aria-hidden="true" />
      <div className="hero__fog hero__fog--sweep-2" aria-hidden="true" />
      <div className="hero__fog hero__fog--ambient-1" aria-hidden="true" />
      <div className="hero__fog hero__fog--ambient-2" aria-hidden="true" />

      {/* flat-color floor above the fog — hands off cleanly to the section below */}
      <div className="hero__floor" aria-hidden="true" />

      {/* pt clears the fixed nav; block sits centered, slightly high of true middle */}
      <Container className="relative z-[1] w-full pt-24 pb-[clamp(3rem,8vh,5rem)] text-paper">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="hero__line--1 font-[420]">
              <em className="block whitespace-nowrap italic font-[380] text-[clamp(1.65rem,4.2vw+0.6rem,4.25rem)]">
                Dear independent hotels,
              </em>
              <span className="mt-5 block max-w-[20ch] text-[clamp(1.8rem,3.5vw+0.8rem,3.4rem)]">
                this is search engine marketing, done for you.
              </span>
            </h1>
            <p className="hero__line--2 mt-20 max-w-[44ch] text-deck text-paper/85">
              Your inn at the top of Google, guests booking direct. No monthly
              fees — we pay for the ads and only earn when you get bookings.
            </p>
            <div className="hero__ctas mt-10 flex flex-wrap gap-4">
              <Button href="#flagship" variant="sheer">
                Apply to the Flagship Program
              </Button>
              <Button href="#sem" variant="ghost-light">
                See how it works
              </Button>
            </div>
          </div>

          {/* MOTION ELEMENT #2 — the SEM demo, playing after the fog settles */}
          <div className="hero__demo w-full max-w-[34rem] lg:justify-self-end">
            <SemDemo frameless startDelayMs={3400} />
          </div>
        </div>
      </Container>

      <div
        className="hero__cue absolute bottom-5 left-1/2 -translate-x-1/2 text-xl text-paper/70"
        aria-hidden="true"
      >
        ↓
      </div>
    </section>
  );
}
