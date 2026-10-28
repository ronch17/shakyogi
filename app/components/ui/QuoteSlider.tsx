"use client";

import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

export type Quote = {
  text: string;
  author?: string;
};

const AUTO_ADVANCE_MS = 6000;

export default function QuoteSlider({
  quotes,
  className,
}: {
  quotes: Quote[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => setIndex((i + quotes.length) % quotes.length),
    [quotes.length]
  );

  useEffect(() => {
    if (quotes.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [quotes.length, paused]);

  if (quotes.length === 0) return null;

  const current = quotes[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={clsx(
        "relative flex flex-col items-center gap-2 max-w-2xl mx-auto text-center px-6",
        className
      )}
    >
      <span
        className="text-[220px] h-fit -mb-20 text-primary-light/40 leading-none font-serif select-none"
        aria-hidden="true"
      >
        “
      </span>

      <div
        key={index}
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-2 animate-fade-up min-h-32"
      >
        <p className="text-xl sm:text-2xl text-primary font-medium leading-relaxed">
          {current.text}
        </p>
        {current.author && (
          <span className="text-text-muted text-sm">{current.author}</span>
        )}
      </div>

      {quotes.length > 1 && (
        <div className="flex flex-row-reverse items-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="הציטוט הבא"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-primary hover:bg-primary hover:text-white transition-colors"
          >
            ›
          </button>

          <div className="flex items-center gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`עבור לציטוט ${i + 1}`}
                aria-current={i === index}
                className={clsx(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  i === index ? "bg-primary" : "bg-border"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="הציטוט הקודם"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-primary hover:bg-primary hover:text-white transition-colors"
          >
            ‹
          </button>
        </div>
      )}
    </div>
  );
}
