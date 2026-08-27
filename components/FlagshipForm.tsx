"use client";

import { useState } from "react";

// Mini application — the Flagship entry point. DEMO STUB: submitting shows a
// confirmation client-side only; nothing is sent or stored (the brief asks
// for the entry point, not the application flow behind it).
const LEAF_PATH =
  "M0.515885 16V12.1677L8.25415 6.27189L0.368489 10.3253C0.0736978 9.79465 0 8.82675 0 8.40912C0.353749 3.75142 3.19357 1.55523 4.56926 1.03935C7.87092 -0.552522 13.6587 0.0321474 16.1398 0.523466C16.7884 3.82513 13.8061 5.82971 12.2338 6.41929H15.2554C14.9607 8.83658 11.8408 10.0305 10.3177 10.3253H13.5604C12.7939 11.9171 11.1775 13.1012 10.4651 13.4943C7.92988 15.2041 4.00425 14.5506 2.35833 14.0102V16H0.515885Z";

const inputClasses =
  "w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-base transition-colors focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20";

export default function FlagshipForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-[19rem] flex-col items-start justify-center gap-3">
        <svg viewBox="0 0 17 16" className="h-6 w-auto text-green" aria-hidden="true">
          <path d={LEAF_PATH} fill="currentColor" />
        </svg>
        <p className="font-display text-2xl">Application received.</p>
        <p className="text-muted">Aaryan will reply within two days.</p>
      </div>
    );
  }

  return (
    <form
      className="flex min-h-[19rem] flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label htmlFor="fs-name" className="mb-1.5 block text-sm font-medium">
          Your name
        </label>
        <input id="fs-name" name="name" type="text" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="fs-property" className="mb-1.5 block text-sm font-medium">
          Property name
        </label>
        <input id="fs-property" name="property" type="text" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="fs-email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input id="fs-email" name="email" type="email" required className={inputClasses} />
      </div>

      <button
        type="submit"
        className="mt-2 inline-block rounded-full border border-ink bg-ink px-7 py-[0.9rem] text-base font-semibold text-paper transition-colors hover:border-accent hover:bg-accent"
      >
        Apply for a place
      </button>
      <p className="text-sm text-muted">
        No card details. Aaryan reads every one and replies within two days.
      </p>
    </form>
  );
}
