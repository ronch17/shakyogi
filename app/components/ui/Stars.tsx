export default function Stars({
  rating,
  className = "w-4 h-4",
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div
      className="flex flex-row-reverse gap-0.5"
      aria-label={`דירוג ${rating} מתוך 5 כוכבים`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`${className} ${i < rating ? "fill-primary" : "fill-border"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}
