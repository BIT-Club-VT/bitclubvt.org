"use client";
import React from "react";

interface ImageHeaderProps {
  text: string;
}

export default function ImageHeader({ text }: ImageHeaderProps) {
  return (
    <section className="py-16 bg-[#FDF8E8] flex justify-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black max-w-3xl w-full">
        {text}
      </h1>
    </section>
  );
}
