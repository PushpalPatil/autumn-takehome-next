"use client";

import { useEffect, useRef } from "react";
import { Container, Eyebrow } from "./ui";

// Partner wall: straight photo cards overlapping like a dealt stack. On
// scroll-in, cards slide in from the right one after another and settle into
// the pile (choreography in globals.css). Hover (or keyboard focus) lifts a
// card and reveals the property + one stat since partnering. Fictional
// identities on unbranded imagery — never invent stats for a real named hotel.
// NOTE: hrefs are placeholders — point each at the partner's site when real.
const partners = [
  {
    img: "/partners/hotel-1.jpg",
    alt: "Tatami sitting room with a round paper window",
    name: "Enso House",
    place: "Kyoto, Japan",
    stat: "+41% direct bookings in the first year",
    href: "#",
  },
  {
    img: "/partners/hotel-3.jpg",
    alt: "Cliffside hotel terraces above a long pool at golden hour",
    name: "Villa Sirena",
    place: "Taormina, Sicily",
    stat: "Direct bookings doubled in two seasons",
    href: "#",
  },
  {
    img: "/partners/hotel-4.jpg",
    alt: "Glass-walled pool house looking onto snowy pines",
    name: "Cedarlight Lodge",
    place: "St. Anton, Austria",
    stat: "−31% paid to Booking.com & Expedia",
    href: "#",
  },
  {
    img: "/partners/hotel-5.jpg",
    alt: "Sculptural white hotel rising from a snowfield",
    name: "Hotel Vesna",
    place: "High Tatras, Slovakia",
    stat: "78% of first-winter stays booked direct",
    href: "#",
  },
  {
    img: "/partners/hotel-7.jpg",
    alt: "Palm-lined pool meeting a bay with sea rocks",
    name: "Casa Almar",
    place: "Baja California Sur, Mexico",
    stat: "+$63,000 direct revenue in year one",
    href: "#",
  },
  {
    img: "/partners/hotel-8.jpg",
    alt: "Warm lounge with fringed chandeliers and green banquettes",
    name: "Hotel Paloma",
    place: "Palm Springs, California",
    stat: "Weekends fully booked, six months running",
    href: "#",
  },
  {
    img: "/partners/hotel-9.jpg",
    alt: "Chalet lounge with sheepskin chairs facing snowy peaks",
    name: "Alpenrose Chalet",
    place: "Lech, Austria",
    stat: "+38% direct revenue over the winter",
    href: "#",
  },
  {
    img: "/partners/hotel-10.jpg",
    alt: "Quiet machiya room with a paper lantern and courtyard",
    name: "Machiya Hoshi",
    place: "Kanazawa, Japan",
    stat: "Repeat guests doubled in a year",
    href: "#",
  },
  {
    img: "/partners/hotel-14.jpg",
    alt: "Stone plunge pool in dappled evening light",
    name: "Sundara Bathhouse",
    place: "Ubud, Bali",
    stat: "Midweek stays up 46% since partnering",
    href: "#",
  },
  {
    img: "/partners/hotel-16.jpg",
    alt: "Marble colonnade pool hall open to the sea",
    name: "Thalassa House",
    place: "Hydra, Greece",
    stat: "9 in 10 guests now book direct",
    href: "#",
  },
  {
    img: "/partners/hotel-17.jpg",
    alt: "Plunge pool tucked beneath desert rock at sunset",
    name: "Dar Sahar",
    place: "AlUla, Saudi Arabia",
    stat: "+52% direct revenue in a year",
    href: "#",
  },
  {
    img: "/partners/hotel-18.jpg",
    alt: "Desert lodge glowing beneath moonlit peaks",
    name: "Casa Luna",
    place: "Atacama, Chile",
    stat: "Sold out its opening season",
    href: "#",
  },
  {
    img: "/partners/hotel-19.jpg",
    alt: "Red stone library pavilions reflected in still water",
    name: "The Red House",
    place: "Wadi Rum, Jordan",
    stat: "Direct bookings doubled since launch",
    href: "#",
  },
];

export default function Partners() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    // hide the cards as soon as JS is live (the section is below the fold at
    // this point), so the first thing the user ever sees is the deal-in
    el.classList.add("is-armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // page by most of the visible width, so the current set slides off one side
  // as the next set arrives from the other — a dealt-deck carousel feel
  const scrollRow = (dir: 1 | -1) => {
    const row = rowRef.current;
    row?.scrollBy({ left: dir * row.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="partners" className="grad-hero-exit py-section">
      <Container>
        {/* heading sits in the green carried down from the hero — paper text */}
        <Eyebrow>Our partners</Eyebrow>
        <h2 className="max-w-[22ch] text-h2 text-paper">In good company.</h2>
      </Container>

      {/* full-bleed: the stack escapes the container toward the screen edges */}
      <div className="partners-wrap" ref={wrapRef}>
        <div
          className="partners-row mt-16 flex items-center overflow-x-auto px-[max(1.25rem,2.5vw)] py-8 pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={rowRef}
        >
          {partners.map((p, i) => (
            <a
              className="partner group relative aspect-[3/4] w-[clamp(13rem,18vw,16rem)] shrink-0 overflow-hidden rounded-[0.875rem] border border-line no-underline shadow-[0_5px_33px_rgba(34,28,21,0.32),0_5px_12px_rgba(34,28,21,0.14)] transition-all duration-300 ease-out first:ml-0 -ml-14 hover:z-10 hover:-translate-y-3.5 hover:scale-105 hover:shadow-[0_30px_64px_rgba(34,28,21,0.42),0_8px_20px_rgba(34,28,21,0.18)] focus-visible:z-10 focus-visible:-translate-y-3.5 focus-visible:scale-105"
              key={p.name}
              href={p.href}
              style={{ "--i": i } as React.CSSProperties}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,11,0.78)] to-transparent to-55% opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              />
              <span className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-1 p-5 text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="font-display text-[1.375rem] leading-tight">
                  {p.name}
                </span>
                <span className="text-sm text-paper/75">{p.place}</span>
                <span className="mt-2 text-[0.9375rem] font-semibold">
                  {p.stat}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* scroll hints: fade in after the deal finishes */}
        <div className="partners-nav mt-3 flex justify-between px-[max(1.25rem,2.5vw)]">
          <button
            type="button"
            aria-label="Scroll partners left"
            onClick={() => scrollRow(-1)}
            className="grid size-9 place-items-center rounded-full text-paper/60 transition-colors hover:bg-paper/15 hover:text-paper"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll partners right"
            onClick={() => scrollRow(1)}
            className="grid size-9 place-items-center rounded-full text-paper/60 transition-colors hover:bg-paper/15 hover:text-paper"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
