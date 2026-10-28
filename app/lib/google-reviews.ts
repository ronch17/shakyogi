const PLACE_ID = "ChIJJz6hVFt9ngMRcXwqI6be-4w";

export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type PlaceReviews = {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
  googleMapsUri: string;
  writeReviewUri: string;
};

type PlaceDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    name: string;
    rating: number;
    relativePublishTimeDescription: string;
    text?: { text: string };
    authorAttribution?: { displayName?: string; photoUri?: string };
  }>;
};

// Google's Place Details API returns at most 5 reviews, chosen by Google (not selectable).
export async function getGoogleReviews(): Promise<PlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=he`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
      },
      next: { revalidate: 60 * 60 * 24 },
    }
  );

  if (!response.ok) return null;

  const data: PlaceDetailsResponse = await response.json();

  const reviews: GoogleReview[] = (data.reviews ?? [])
    .filter((review) => review.text?.text)
    .map((review) => ({
      id: review.name,
      authorName: review.authorAttribution?.displayName ?? "",
      authorPhotoUrl: review.authorAttribution?.photoUri,
      rating: review.rating,
      text: review.text!.text,
      relativeTime: review.relativePublishTimeDescription,
    }));

  return {
    rating: data.rating ?? 0,
    userRatingCount: data.userRatingCount ?? 0,
    reviews,
    googleMapsUri: data.googleMapsUri ?? "https://maps.google.com/",
    writeReviewUri: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
  };
}
