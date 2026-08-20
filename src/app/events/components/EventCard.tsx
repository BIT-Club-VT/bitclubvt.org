import Image from "next/image";
import Link from "next/link";
import type { ALL_EVENTS_QUERY_RESULT } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { formatEventSchedule } from "../lib/formatEventSchedule";

export type EventCardEvent = ALL_EVENTS_QUERY_RESULT[number];

export default function EventCard({ event }: { event: EventCardEvent }) {
  if (!event.slug) return null;

  const formattedDateTime = formatEventSchedule(event.date, event.startTime, event.endTime);
  const imageUrl = event.image?.asset
    ? urlForImage(event.image).width(960).height(540).fit("crop").auto("format").url()
    : null;

  return (
    <article className="overflow-hidden rounded-xl border border-[var(--color-image-ring)] bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/events/${event.slug}`}
        className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-teal-deep)]"
      >
        <div className="relative aspect-video overflow-hidden bg-[var(--color-peach)]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={event.image?.alt ?? ""}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              placeholder={event.image?.asset?.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={event.image?.asset?.metadata?.lqip ?? undefined}
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-xl font-bold text-[var(--color-coral-deep)]">
              {event.name}
            </div>
          )}
        </div>

        <div className="space-y-3 p-5">
          <h3 className="text-2xl text-[var(--color-ink)] group-hover:text-[var(--color-coral-deep)]">
            {event.name}
          </h3>

          <div className="text-lg leading-snug text-[var(--color-teal-deep)]">
            <p>{formattedDateTime.date}</p>
            <p>{formattedDateTime.time}</p>
          </div>

          {event.location?.name && (
            <p className="text-base text-[var(--color-ink)]">{event.location.name}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
