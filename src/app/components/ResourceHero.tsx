import Link from "next/link";

interface ResourceHeroProps {
  heroHeader: string;
  heroSubText: string;
  showSecondText?: boolean; // Only need this for top section so made it an optional boolean
}

export default function ResourceHero({
  heroHeader,
  heroSubText,
  showSecondText = false, // defaults to false
}: ResourceHeroProps) {
  return (
    <section className="bg-[#FDF8E8] py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          {heroHeader}
        </h1>

        <p className="text-lg md:text-xl text-black leading-relaxed mb-8">
          {heroSubText}
        </p>

        {showSecondText && (
          <div className="mt-2 pt-1">
            <p className="text-lg text-black sm:text-xl mb-10">
              (Psst... want access to more resources, insider tips, and to connect with your peers? Check out our{" "}
              <Link
                href="/events"
                className="text-[#B83A20] underline hover:text-[#861F41] transition-colors duration-200"
              >
                Events page
              </Link>{" "}
              and join us at a club meeting!)
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
