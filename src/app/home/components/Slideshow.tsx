"use client";
import { useState, useEffect } from "react";

const images = [
  // THIS IS WHERE THE PHOTOS FOR THE SLIDESHOW GO!!
  "/slideshow_photos/DSC00728_resized.webp",
  "/slideshow_photos/DSC00802_resized.webp",
  "/slideshow_photos/ey_event_crowd_picture.png",
  "/slideshow_photos/DSC01357_resized.webp",
  "/slideshow_photos/hokiebirdwarm_resized.webp",
  "/slideshow_photos/DSC02583_resized.webp",
  "/slideshow_photos/mocktails_1.png",
  "/slideshow_photos/mocktails_2.png",

  // fun fact, hokebirdwarm is actually my own photo
];

export default function MainPageSlideshow() {
  const [current, setCurrent] = useState(0);

  // Changes the image every 10 seconds. DO NOT TOUCH!!!
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: ReturnType<typeof setInterval> | undefined;

    const updateSlideshow = () => {
      if (interval) clearInterval(interval);

      interval = mediaQuery.matches
        ? undefined
        : setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
          }, 7500);
    };

    updateSlideshow();
    mediaQuery.addEventListener("change", updateSlideshow);

    return () => {
      if (interval) clearInterval(interval);
      mediaQuery.removeEventListener("change", updateSlideshow);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === current ? "opacity-60" : "opacity-0"}
          `}
        />
      ))}

      <div className="relative z-10 text-center px-4">
         <img src="/main_logos_and_assets/logos/club_logos/bit_logo_text_transparent_extended.png" alt="Header Test" className="mx-auto h-32 md:h-48" />

        {/* <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold">
          BIT Club
        </h1>

        Commented this part out since this is where text would go instead of the image. I personally like the image over the carousel, but if you want 
        to change it, then just uncomment and recomment the respective <img> and <h1> tags.
        */}
      </div>
    </div>
  );
}
