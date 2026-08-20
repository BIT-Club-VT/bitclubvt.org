import Image, { type StaticImageData } from "next/image";

interface ImageFrameProps {
  imageSrc: StaticImageData;
  alt: string;
  caption?: string;
}

export default function ImageFrame({
  imageSrc,
  alt,
  caption,
}: ImageFrameProps) {
  return (
    <section className="py-24 bg-[var(--color-paper)] flex justify-center px-4">
      <div className="bg-[var(--color-coral)] rounded-2xl shadow-lg p-10 sm:p-12 md:p-16 lg:p-20 xl:p-24 max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-5xl w-full flex flex-col items-center">
        {/* Image */}
        <Image
          src={imageSrc}
          alt={alt}
          className="h-auto w-full rounded-xl object-contain shadow-md"
        />

        {/* Optional caption */}
        {caption && (
          <p className="mt-6 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[var(--color-ink)]">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
