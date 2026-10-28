"use client";

import { useState } from "react";
import Stars from "@/app/components/ui/Stars";
import GoogleIcon from "@/app/components/ui/GoogleIcon";
import type { GoogleReview } from "@/app/lib/google-reviews";

type Props = {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
  reviewsUrl: string;
  writeReviewUrl: string;
};

export default function GoogleReviewsBadgeClient({
  rating,
  userRatingCount,
  reviews,
  reviewsUrl,
  writeReviewUrl,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-3">
      {open && (
        <div className="w-72 max-w-[80vw] bg-white shadow-xl rounded-2xl border border-border p-4 flex flex-col gap-3 animate-fade-up">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GoogleIcon />
              <span className="font-semibold text-primary">
                {rating.toFixed(1)}
              </span>
              <Stars rating={Math.round(rating)} />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="סגירת חלון הביקורות"
              className="text-text-subtle hover:text-primary"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-text-muted">
            {userRatingCount} ביקורות בגוגל
          </p>

          <div className="flex flex-col gap-3 max-h-56 overflow-y-auto">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="text-sm text-text-muted border-t border-border pt-3 first:border-0 first:pt-0"
              >
                <span className="font-medium text-primary block mb-1">
                  {review.authorName}
                </span>
                <p className="line-clamp-3">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href={writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-sm text-center py-2 rounded-tl-xl rounded-br-xl hover:bg-primary-light transition-colors"
            >
              השאירי חוות דעת
            </a>
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline text-center"
            >
              כל הביקורות בגוגל
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-2 bg-white shadow-lg rounded-full ps-3 pe-4 py-2 border border-border hover:shadow-xl transition-shadow"
      >
        <GoogleIcon />
        <span className="font-semibold text-primary text-sm">
          {rating.toFixed(1)}
        </span>
        <Stars rating={Math.round(rating)} className="w-3 h-3" />
      </button>
    </div>
  );
}
