import Image from "next/image";

interface ResourceItem {
  title: string;
  description?: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ResourceBoxProps {
  title: string;
  resources: ResourceItem[];
  heroHeader?:string;
  heroSubText?: string;
}

export default function ResourceBox({ title, resources }: ResourceBoxProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-paper)] flex justify-center">
      <div className="bg-[var(--color-teal-deep)] rounded-2xl shadow-lg p-8 w-fit max-w-6xl border-t-8 border-[var(--color-teal)]">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--color-on-dark)]">
          {title}
        </h2>

        {/* Resource Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-paper)] rounded-xl overflow-hidden shadow-md w-72 flex flex-col hover:shadow-lg hover:scale-105 transition-[transform,box-shadow] duration-300"
            >
              <div className="relative w-full h-40">
                <Image
                  src={resource.imageSrc}
                  alt={resource.title}
                  width={288}
                  height={160}
                  className="object-cover w-full h-40"
                />
            </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 className="text-lg font-semibold text-[var(--color-coral-deep)] mb-4">
                  {resource.title}
                </h4>

                {/* Optional Description */}
                {resource.description && (
                  <p className="text-sm text-[var(--color-teal-deep)] mb-4">
                    {resource.description}
                  </p>
                )}

                {/* Button */}
                {resource.buttonLink && (
                  <a
                    href={resource.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-[var(--color-coral)] text-[var(--color-ink)] px-4 py-2 rounded-lg font-semibold hover:bg-[var(--color-orange)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)] transition-all duration-300"
                  >
                    {resource.buttonText || "View Resource"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
