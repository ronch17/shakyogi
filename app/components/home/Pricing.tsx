"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";
import Reveal from "@/app/components/ui/Reveal";

import VINYASA from "@/public/photos/vinyasa-ashtanga-yoga/1.jpg";
import KIDS from "@/public/photos/kids-yoga/yoga-kids.jpg";
import ELDERLY from "@/public/photos/elderly-yoga/yoga-elderly.jpg";

type PriceOption = {
  label: string;
  price: string;
};

type PricingTab = {
  id: string;
  label: string;
  icon: string;
  image: StaticImageData;
  heading: string;
  description: string;
  priceOptions: PriceOption[];
  ctaLabel: string;
};

const tabs: PricingTab[] = [
  {
    id: "group",
    label: "שיעורי קבוצה",
    icon: "/assets/yoga-icons/yoga-pos-1.svg",
    image: VINYASA,
    heading: "הצטרפות לשיעורי קבוצה",
    description:
      "שיעורי יוגה קבוצתיים באזור השרון והמרכז — מרחב תומך ללמידה משותפת.",
    priceOptions: [{ label: "שיעור בודד", price: "50₪" }],
    ctaLabel: "להצטרפות לקבוצה",
  },
  {
    id: "private",
    label: "שיעור פרטי עד הבית",
    icon: "/assets/yoga-icons/yoga-pos-2.svg",
    image: ELDERLY,
    heading: "שיעור יוגה פרטי עד הבית",
    description:
      "שיעור אישי שמגיע אלייך הביתה, מותאם בדיוק לצרכים ולקצב שלך.",
    priceOptions: [
      { label: "שיעור פרטי (בהתאם למיקום)", price: "250–300₪" },
    ],
    ctaLabel: "לתיאום שיעור פרטי",
  },
  {
    id: "kids",
    label: "ילדים",
    icon: "/assets/yoga-icons/yoga-pos-3.svg",
    image: KIDS,
    heading: "יוגה לילדים",
    description:
      "מרחב מהנה ותנועתי לילדים, בין אם כחוג קבוע ובין אם כסדנה חווייתית.",
    priceOptions: [
      { label: "חוג שבועי (45 דק׳)", price: "250₪" },
      { label: "סדנה חד־פעמית (45 דק׳)", price: "350₪" },
    ],
    ctaLabel: "להרשמה לחוג ילדים",
  },
];

export default function Pricing() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section
      id="pricing"
      className="relative bg-section-1 overflow-x-hidden py-20 px-6"
    >
      <Reveal className="max-w-2xl mx-auto text-center mb-14 flex flex-col items-center gap-2">
        <span className="text-sm font-semibold tracking-wide text-primary-light">
          המחירון שלנו
        </span>
        <h2 className="text-4xl font-bold text-primary">תוכניות ומחירים</h2>
        <div className="w-16 h-1 bg-primary-light rounded-full mt-2" />
      </Reveal>

      <Reveal
        role="tablist"
        delay={100}
        className="flex flex-wrap justify-center gap-8 sm:gap-14 mb-14"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`pricing-panel-${tab.id}`}
            onClick={() => setActive(i)}
            className={clsx(
              "flex flex-col items-center gap-3 transition-colors",
              i === active
                ? "text-primary"
                : "text-text-subtle hover:text-primary-light"
            )}
          >
            <span
              className={clsx(
                "w-16 h-16 rounded-full flex items-center justify-center border-2 transition-colors",
                i === active
                  ? "border-primary bg-primary/10"
                  : "border-border"
              )}
              aria-hidden="true"
            >
              <span className="relative w-8 h-8">
                <Image
                  src={tab.icon}
                  alt=""
                  fill
                  className={clsx(
                    "object-contain transition-opacity",
                    i === active ? "opacity-100" : "opacity-50"
                  )}
                />
              </span>
            </span>
            <h3 className="font-semibold text-sm sm:text-base">
              {tab.label}
            </h3>
          </button>
        ))}
      </Reveal>

      <Reveal delay={200}>
      <div
        key={current.id}
        id={`pricing-panel-${current.id}`}
        role="tabpanel"
        className="w-full max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:items-center md:gap-16 animate-fade-up"
      >
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md h-72 sm:h-96 rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-lg">
            <Image
              src={current.image}
              alt={current.heading}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start gap-4 text-right">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary leading-snug">
            {current.heading}
          </h3>
          <p className="text-text-muted leading-relaxed max-w-md">
            {current.description}
          </p>

          <div className="w-full max-w-md flex flex-col gap-2">
            {current.priceOptions.map((option) => (
              <div
                key={option.label}
                className="flex items-center justify-between gap-4 border-b border-border py-2"
              >
                <span className="text-text-muted">{option.label}</span>
                <span className="text-lg font-bold text-primary whitespace-nowrap">
                  {option.price}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-2 px-6 py-3 rounded-tl-2xl rounded-br-2xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            {current.ctaLabel}
          </a>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
