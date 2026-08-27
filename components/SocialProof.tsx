import { Container, Eyebrow } from "./ui";

// Social proof is structural, not an afterthought (brief). Fabricated but
// plausible — fictional people and properties, numbers in language a
// non-technical hotelier feels (dollars and commissions, not ROAS).
const cases = [
  {
    quote: "Autumn pays for the ads. I just watch the bookings come in.",
    metric: "+$21,400",
    label: "in direct bookings, one season",
    property: "The Marlow House · 9 rooms · Beacon, New York",
  },
  {
    quote: "We finally stopped handing a fifth of every stay to Booking.com.",
    metric: "−24%",
    label: "paid in Booking.com & Expedia commissions",
    property: "Harbor Lane B&B · 6 rooms · Camden, Maine",
  },
  {
    quote: "Guests tell me they found us right at the top of Google.",
    metric: "#1",
    label: "Google became their top source of direct bookings",
    property: "Quail Run Lodge · 12 rooms · Sonoma, California",
  },
];

export default function SocialProof() {
  return (
    <section id="stories" className="grad-green-exit py-section">
      <Container>
        {/* heading sits in the green carried down from Partners — paper text */}
        <Eyebrow>From hoteliers like you</Eyebrow>
        <h2 className="max-w-[24ch] text-h2 text-paper">
          Loved by the people who pick the towels themselves.
        </h2>

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6">
          {cases.map((c) => (
            <article
              className="flex flex-col rounded-2xl border border-line bg-paper p-8"
              key={c.property}
            >
              <p className="mb-6 font-display text-xl italic leading-[1.45]">
                &ldquo;{c.quote}&rdquo;
              </p>
              <p className="font-display text-[2.5rem] leading-none text-accent">
                {c.metric}
              </p>
              <p className="mt-2 mb-5 text-muted">{c.label}</p>
              <hr className="mt-auto border-0 border-t border-line" />
              <p className="mt-5 text-[0.9375rem] font-medium">{c.property}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
