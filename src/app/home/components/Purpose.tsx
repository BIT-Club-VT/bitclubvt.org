"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface PurposeProps {
  header: string;
  body: string;
  imageSrc: string;
}

export default function PurposeSection({ header, body, imageSrc }: PurposeProps) {
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

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FDF8E8] py-12 px-4 text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* For both the header & body text */}
        <div
        // modify the text transition time in the line below
          className={`flex-1 text-left transition-all duration-2000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{header}</h2>
          <p className="text-lg sm:text-xl mt-4">{body}</p>
        </div>

        {/* Image container */}
        <div
        // modify the image transition time in the line below
          className={`flex-1 w-full md:w-auto transition-all duration-2000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <Image
            src={imageSrc}
            alt="Purpose Image"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
