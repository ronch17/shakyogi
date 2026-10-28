import Image from "next/image";
import { getGoogleReviews } from "@/app/lib/google-reviews";
import Stars from "@/app/components/ui/Stars";
import GoogleIcon from "@/app/components/ui/GoogleIcon";
import Reveal from "@/app/components/ui/Reveal";

export default async function Testimonials() {
  const data = await getGoogleReviews();

  if (!data || data.reviews.length === 0) return null;

  return (
    <section id="testimonials" className="relative bg-section-3 overflow-x-hidden min-h-[100vh] flex flex-col items-center justify-center gap-10 py-20 px-6">
      <Reveal className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-4xl font-bold text-primary">מה אומרות המתרגלות</h2>
        <div className="flex items-center gap-2">
          <GoogleIcon />
          <Stars rating={Math.round(data.rating)} />
          <span className="text-text-muted">
            {data.rating.toFixed(1)} ({data.userRatingCount} ביקורות בגוגל)
          </span>
        </div>
        <a
          href={data.writeReviewUri}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-2 px-6 rounded-tl-xl rounded-br-xl hover:bg-primary-light transition-colors"
        >
          השאירי חוות דעת
        </a>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {data.reviews.map((review, i) => (
          <Reveal
            key={review.id}
            delay={i * 100}
            className="flex flex-col gap-4 w-full sm:w-80 bg-white/60 border border-border rounded-tl-[40px] rounded-br-[40px] p-6"
          >
            <Stars rating={review.rating} />
            <p className="text-text-muted leading-relaxed">{review.text}</p>
            <div className="flex items-center gap-3 mt-auto">
              {review.authorPhotoUrl && (
                <Image
                  src={review.authorPhotoUrl}
                  alt={review.authorName}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div className="flex flex-col">
                <span className="font-semibold text-primary">
                  {review.authorName}
                </span>
                <span className="text-sm text-text-subtle">
                  {review.relativeTime}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
