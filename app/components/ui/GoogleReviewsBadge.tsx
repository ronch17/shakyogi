import { getGoogleReviews } from "@/app/lib/google-reviews";
import GoogleReviewsBadgeClient from "@/app/components/ui/GoogleReviewsBadgeClient";

export default async function GoogleReviewsBadge() {
  const data = await getGoogleReviews();

  if (!data || data.reviews.length === 0) return null;

  return (
    <GoogleReviewsBadgeClient
      rating={data.rating}
      userRatingCount={data.userRatingCount}
      reviews={data.reviews.slice(0, 3)}
      reviewsUrl={data.googleMapsUri}
      writeReviewUrl={data.writeReviewUri}
    />
  );
}
