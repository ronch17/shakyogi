"use client";

import { useState, useEffect, useRef } from "react";

interface VideosSlideshowProps {
  videos: string[];
  interval?: number;
  className?: string;
}

export default function VideosSlideshow({
  videos,
  interval = 5000,
  className = "",
}: VideosSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videos.length <= 1) return;

    const timer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setVisible(true);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [videos.length, interval]);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [currentIndex]);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setVisible(true);
    }, 400);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        key={currentIndex}
        src={videos[currentIndex]}
        autoPlay
        muted
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-400 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dot indicators */}
      {videos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`וידאו ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "w-5 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
