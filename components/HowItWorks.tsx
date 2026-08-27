import { Container, Eyebrow } from "./ui";

// Answers the hotelier's two unspoken questions after they believe the offer:
// "how much of MY time does this take?" and "who's in control of my brand?"
// Three steps, one line each — plus a single reassurance line. Nothing more.
const steps = [
  {
    title: "A short call",
    body: "Tell us about your property and the guests you love.",
  },
  {
    title: "We set you up on Google",
    body: "We build your Google presence & pay for the ads. Nothing to install or learn.",
  },
  {
    title: "Guests book direct",
    body: "You watch bookings arrive, we only earn on the bookings we bring you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="grad-deep-to-light py-section">
      <Container>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="max-w-[22ch] text-h2">You run the inn. <br/>We bring the guests.</h2>

        <ol className="mt-14 grid list-none grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6 p-0">
          {steps.map((s, i) => (
            <li
              className="rounded-2xl border border-green bg-paper-deep p-7 md:p-8"
              key={s.title}
            >
              <span className="mb-4 block font-display text-[2.5rem] leading-none text-accent">
                {i + 1}
              </span>
              <h3 className="mb-3 text-[1.375rem]">{s.title}</h3>
              <p className="text-[1.0625rem] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-none border-t border-line pt-7 text-[1.0625rem] text-muted">
          Your inn stays yours — your photos, your voice, your rates. <br/>We just
          review everything before it goes live.
        </p>
      </Container>
    </section>
  );
}
