import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { EVENT_QUERY_RESULT } from "@/sanity.types";

type EventDescriptionValue = NonNullable<NonNullable<EVENT_QUERY_RESULT>["description"]>;

function isAllowedHref(href: string) {
  return /^(https?:\/\/|mailto:)/i.test(href);
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-lg leading-8 text-[color-mix(in_srgb,var(--color-ink)_92%,transparent)]">
        {children}
      </p>
    ),
    h2: ({ children }) => <h3 className="mb-3 mt-10 text-3xl">{children}</h3>,
    h3: ({ children }) => <h4 className="mb-2 mt-8 text-2xl">{children}</h4>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2.5 pl-7 marker:text-[var(--color-coral-deep)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2.5 pl-7 marker:font-bold marker:text-[var(--color-coral-deep)]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1 text-lg leading-8">{children}</li>,
    number: ({ children }) => <li className="pl-1 text-lg leading-8">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "";

      if (!isAllowedHref(href)) return <>{children}</>;

      const isExternal = /^https?:\/\//i.test(href);

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-semibold text-[var(--color-teal-deep)] underline decoration-[var(--color-coral)] decoration-2 underline-offset-4 hover:text-[var(--color-coral-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-teal-deep)]"
        >
          {children}
          {isExternal && (
            <>
              <span aria-hidden="true"> ↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          )}
        </a>
      );
    },
  },
};

export default function EventDescription({ value }: { value: EventDescriptionValue }) {
  return <PortableText value={value} components={components} />;
}
