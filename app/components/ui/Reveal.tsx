"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import clsx from "clsx";

const animations = {
  "fade-up": "animate-fade-up",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
} as const;

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  animation?: keyof typeof animations;
  /** Delay in ms, e.g. for staggering siblings */
  delay?: number;
  children: ReactNode;
};

/**
 * Plays an entrance animation once the element scrolls into view,
 * instead of on page load (so below-the-fold sections animate when seen).
 */
export default function Reveal({
  animation = "fade-up",
  delay,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        visible ? animations[animation] : "opacity-0",
        "motion-reduce:animate-none motion-reduce:opacity-100"
      )}
      style={delay ? { ...style, animationDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </div>
  );
}
