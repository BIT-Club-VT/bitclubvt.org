"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface WhyJoinUsProps {
  header: string;
  body: string;
  imageSrc: string;
}

export default function WhyJoinSection({ header, body, imageSrc }: WhyJoinUsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FDF8E8] overflow-hidden">
      {/* Orange rhombus-shaped background (inversed slope) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="bg-[#F26645] absolute w-full h-full top-0 left-0"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 90%)",
          }}
        />
      </div>

      {/* Content inside the shape */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-28 md:py-40 flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Text */}
        <div
        // modify the text transition time in the line below
          className={`flex-1 text-left transition-all duration-2000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {header}
          </h2>
          <p className="text-base sm:text-lg text-white leading-relaxed">
            {body}
          </p>
        </div>

        {/* Image */}
        <div
        // modify the image transition time in the line below
          className={`flex-1 flex justify-center transition-all duration-2000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <Image
            src={imageSrc}
            alt="Why Join Image"
            width={1800}
            height={900}
            className="rounded-xl shadow-lg w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
