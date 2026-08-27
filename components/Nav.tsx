"use client";

import { useEffect, useState } from "react";
import AutumnWordmark from "./AutumnWordmark";
import { Container } from "./ui";

// Fixed nav: transparent (paper text) while over the hero scene, gains the
// blurred-paper background once the hero scrolls away.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line/70 bg-paper/55 text-ink backdrop-blur-xl"
          : "border-transparent text-paper"
      }`}
    >
      <Container className="flex items-center gap-8 py-[1.375rem]">
        <a href="/" className="mr-auto inline-flex items-center" aria-label="Autumn">
          <AutumnWordmark className="h-[1.375rem] w-auto" />
        </a>
        <nav className="flex gap-6 max-md:hidden" aria-label="Main">
          {[
            ["#sem", "Marketing"],
            ["#services", "Services"],
            ["#stories", "Guest stories"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-base font-medium no-underline opacity-75 transition-opacity hover:opacity-100"
            >
              {label}
            </a>
          ))}
        </nav>
        {/* header CTA: sleeker than the page buttons — rectangular, quieter
            weight, sized to sit level with the nav links */}
        {/* over the hero: frosted dark glass to match the hero CTA;
            scrolled: quiet ink outline, sheer ink fill on hover */}
        <a
          href="#flagship"
          className={`rounded-md border px-[1.15rem] py-[0.55rem] text-base font-medium no-underline backdrop-blur-md transition-colors ${
            scrolled
              ? "border-ink/60 text-ink hover:bg-ink/10"
              : "border-paper/30 bg-[rgba(24,32,22,0.35)] text-paper hover:bg-[rgba(24,32,22,0.6)]"
          }`}
        >
          Apply to the Flagship Program
        </a>
      </Container>
    </header>
  );
}
