import Image from "next/image";
import LeafEl from "@/app/components/background-elements/LeafEl";
import FlowerEl from "@/app/components/background-elements/FlowerEl";
import Reveal from "@/app/components/ui/Reveal";

import AboutmeBg from "@/public/assets/aboutme-bg.png";
import AboutMeImage from "@/public/photos/about-me.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center overflow-x-hidden py-20 "
      style={{ backgroundImage: `url(${AboutmeBg.src})` }}
    >
      <FlowerEl />
      <LeafEl className="bottom-10 right-[-30] rotate-90 animate-float delay-anim-300" />

      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col-reverse gap-12 md:flex-row md:items-center md:gap-16">
    

        {/* Content */}
        <Reveal animation="fade-in-right" className="flex-1 flex flex-col items-start gap-5 text-right">
          <span className="text-sm font-semibold tracking-wide text-primary-light">
            אודותי
          </span>

          <h2 className="text-4xl font-bold leading-tight text-primary">
            היוגה שמחזירה אותך
            <span className="block">אל עצמך</span>
          </h2>

          <p className="text-lg text-text-muted leading-relaxed max-w-md">
            אני שקד, מורה יוגה מוסמכת עם למעלה מעשור ניסיון בהוראה ובליווי
            אישי. הגישה שלי משלבת תרגול גופני מדויק עם קשב פנימי עמוק — מרחב
            שבו כל גוף מוזמן להתקדם בקצב שלו.
          </p>

          <div className="border-r-4 border-primary-light pr-4 py-1">
            <p className="text-text-subtle italic max-w-sm">
              כל תרגול הוא הזמנה לשוב הביתה, אל הגוף ואל הנשימה.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-2 px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            בואי נכיר
          </a>
        </Reveal>
            {/* Image — offset accent block behind it, matching the Hero treatment */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Reveal animation="fade-in-left" className="relative before:content-[''] before:absolute before:inset-0 before:translate-x-4 before:translate-y-4 before:bg-primary/20 before:rounded-tl-[100px] before:rounded-br-[100px] before:-z-10">
            <div className="relative w-72 h-80 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-lg">
              <Image
                src={AboutMeImage}
                alt="שקד, מורה יוגה מוסמכת"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 384px, 320px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
