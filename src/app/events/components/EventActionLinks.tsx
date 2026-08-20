import { FiArrowUpRight } from "react-icons/fi";

export type EventActionLink = {
  _key: string;
  title: string;
  url: string;
};

type EventActionLinksProps = {
  links: EventActionLink[];
  variant: "hero" | "content";
};

function isHttpUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export default function EventActionLinks({ links, variant }: EventActionLinksProps) {
  if (links.length === 0) return null;

  const isHero = variant === "hero";

  return (
    <section aria-label="Event links" className={isHero ? "mt-8" : "mt-10"}>
      <ul className="flex flex-wrap gap-3">
        {links.map((link, index) => {
          const isExternal = isHttpUrl(link.url);
          const isPrimary = index === 0;
          const variantClasses = isHero
            ? isPrimary
              ? "bg-white text-[var(--color-coral-deep)] shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-peach)] motion-reduce:transform-none"
              : "border border-white/50 bg-white/5 text-white hover:border-white hover:bg-white/10"
            : isPrimary
              ? "bg-[var(--color-coral-deep)] text-white shadow-md hover:-translate-y-0.5 hover:bg-[var(--color-teal-deep)] hover:shadow-lg motion-reduce:transform-none"
              : "border border-[var(--color-teal-deep)] bg-white text-[var(--color-teal-deep)] hover:bg-[var(--color-peach)]";

          return (
            <li key={link._key} className={isPrimary ? "w-full sm:w-auto" : ""}>
              <a
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-center text-lg font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none sm:w-auto ${
                  isHero
                    ? "focus-visible:outline-[var(--color-peach)]"
                    : "focus-visible:outline-[var(--color-teal-deep)]"
                } ${variantClasses}`}
              >
                <span>{link.title}</span>
                {isExternal && (
                  <>
                    <FiArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
