import LeafEl from "../background-elements/LeafEl";
import FlowerEl from "../background-elements/FlowerEl";
import VideosSlideshow from "../ui/VideosSlideshow";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative bg-section-1 overflow-x-hidden min-h-[100vh] flex items-center">

        {/* Decorative elements — fade in late so they don't distract */}

          <LeafEl className="bottom-5 right-0 invert-75" />

  
          <FlowerEl />
      

        <div className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col gap-12 md:flex-row md:items-center md:gap-16 ">

          {/* Video card — slides in from left, then floats */}
          <div className="flex-1 flex justify-center md:justify-start">

            {/* animate-enter-then-float = fadeInLeft(0.8s) then floatY(∞) */}
            <div className="relative before:content-[''] before:absolute before:inset-0 before:translate-x-4 before:translate-y-4 before:bg-primary/20 before:rounded-tl-[100px] before:rounded-br-[100px] before:-z-10 animate-enter-then-float translate-y-20">

              {/* Video card */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-[60rem] md:w-120 md:h-130 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-lg">
                <VideosSlideshow
                  videos={[
                    "/videos/video1.mp4",
                    "/videos/video2.mp4",
                    "/videos/video4.mp4",
                    "/videos/video5.mp4",
                  ]}
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>

          {/* Content — slides in from right, staggered */}
          <div className="flex-1 flex flex-col items-start gap-6 text-right">

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-primary animate-fade-in-right">
              ShakYogi —{" "}
              <span className="block">יוגה לכל שלבי החיים</span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-md animate-fade-in-right delay-anim-200">
              מרחב של שקט, ריפוי וחיבור עצמי. בהנחיית שמי שקד, מורה מוסמכת
              המשלבת מעל עשור של ניסיון עם גישה טיפולית מעמיקה.
            </p>

            <div className="flex flex-row-reverse gap-3 mt-2 animate-fade-up delay-anim-400">
              <a
                href="#contact"
                className="px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-primary text-white font-medium text-base hover:bg-primary-dark transition-colors"
              >
                תאמו שיעור
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-tl-2xl rounded-br-2xl border border-primary text-primary font-medium text-base hover:bg-primary/8 hover:bg-primary/20 hover:text-primary-dark transition-colors"
              >
                נעים להכיר
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
