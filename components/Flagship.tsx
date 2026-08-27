import FlagshipForm from "./FlagshipForm";
import { Container, Eyebrow } from "./ui";

// Flagship Program entry point: curated and exclusive, zero pressure tactics.
// Two cards: the terms as a plain checklist (dark), and the mini application
// (beige). Entry point only — no real application flow (per brief).
const terms = [
  "No fixed fees, no contracts",
  "We pay for the ad spend",
  "13% only on the bookings we bring you",
  "If we don't deliver, you pay nothing",
];

export default function Flagship() {
  return (
    <section
      id="flagship"
      className="fade-to-footer py-section pb-[calc(var(--spacing-section)+6rem)]"
    >
      <Container>
        <Eyebrow>The Flagship Program</Eyebrow>
        <h2 className="max-w-[24ch] text-h2">
          A risk-free way to try Autumn&apos;s search marketing.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* the terms, plainly — dark card */}
          <div className="rounded-2xl border border-paper/10 bg-ink p-8 text-paper md:p-10">
            <h3 className="text-2xl">The terms, plainly.</h3>
            <ul className="mt-7 space-y-4">
              {terms.map((t) => (
                <li className="flex items-start gap-3" key={t}>
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green">
                    <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                      <path
                        d="M2.5 6.5l2.4 2.4L9.5 3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[1.0625rem] text-paper/85">{t}</span>
                </li>
              ))}
            </ul>
            <hr className="mt-8 border-0 border-t border-paper/15" />
            <p className="mt-6 text-[0.9375rem] text-paper/60">
              We take on a small number of properties at a time.
            </p>
          </div>

          {/* the mini application — beige card */}
          <div className="rounded-2xl border border-line bg-paper p-8 text-ink md:p-10">
            <h3 className="text-2xl">Apply for a place.</h3>
            <div className="mt-7">
              <FlagshipForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
