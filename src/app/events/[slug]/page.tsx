import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AddToCalendarButton from "../components/AddToCalendarButton";
import EventActionLinks, { type EventActionLink } from "../components/EventActionLinks";
import EventDescription from "../components/EventDescription";
import { formatEventSchedule } from "../lib/formatEventSchedule";
import { buildClient } from "@/sanity/lib/buildClient";
import { urlForImage } from "@/sanity/lib/image";
import { EVENT_QUERY, EVENT_SLUGS_QUERY } from "@/sanity/lib/queries";

const EMPTY_EVENT_SLUG = "__no_events__";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

const getEvent = cache((slug: string) => buildClient.fetch(EVENT_QUERY, { slug }));

function isHttpUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function isAllowedEventUrl(url: string) {
  return isHttpUrl(url) || /^mailto:/i.test(url);
}

export async function generateStaticParams() {
  const events = await buildClient.fetch(EVENT_SLUGS_QUERY);
  const params = events.flatMap((event) => (event.slug ? [{ slug: event.slug }] : []));

  // Next.js 16 requires at least one generated parameter for an exported dynamic route.
  // This private sentinel keeps an empty initial dataset buildable and resolves to a 404.
  return params.length > 0 ? params : [{ slug: EMPTY_EVENT_SLUG }];
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === EMPTY_EVENT_SLUG) return { title: "Event" };

  const event = await getEvent(slug);

  if (!event) return { title: "Event" };

  const eventName = event.name?.trim() || "BIT Club Event";
  const formattedDateTime = formatEventSchedule(event.date, event.startTime, event.endTime);
  const location = event.location?.name?.trim() || event.location?.address?.trim();
  const description = `${eventName} — ${formattedDateTime.date}${
    location ? ` at ${location}` : ""
  }. View event details from BIT Club at Virginia Tech.`;
  const socialImage = event.image?.asset
    ? urlForImage(event.image).width(1200).height(630).fit("crop").auto("format").url()
    : null;

  return {
    title: eventName,
    description,
    alternates: {
      canonical: `/events/${slug}`,
    },
    openGraph: {
      title: eventName,
      description,
      url: `/events/${slug}`,
      images: socialImage
        ? [
            {
              url: socialImage,
              width: 1200,
              height: 630,
              alt: event.image?.alt?.trim() || eventName,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: eventName,
      description,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  if (slug === EMPTY_EVENT_SLUG) notFound();

  const event = await getEvent(slug);

  if (!event) notFound();

  const eventName = event.name?.trim() || "BIT Club Event";
  const formattedDateTime = formatEventSchedule(event.date, event.startTime, event.endTime);
  const imageUrl = event.image?.asset
    ? urlForImage(event.image).width(1400).height(1200).fit("crop").auto("format").url()
    : null;
  const locationName = event.location?.name?.trim();
  const locationAddress = event.location?.address?.trim();
  const locationLabel = locationName || locationAddress || "Location to be announced";
  const mapUrl = event.location?.mapUrl?.trim();
  const safeMapUrl = mapUrl && isHttpUrl(mapUrl) ? mapUrl : null;
  const calendarLocation = [locationName, locationAddress].filter(Boolean).join(", ");
  const eventLinks: EventActionLink[] = (event.links ?? []).flatMap((link) => {
    const title = link.title?.trim();
    const url = link.url?.trim();

    return title && url && isAllowedEventUrl(url)
      ? [{ _key: link._key, title, url }]
      : [];
  });

  return (
    <>
      <Navbar />
      <main className="bg-[var(--color-paper)] text-[var(--color-ink)]">
        <article>
          <div className="border-b border-[var(--color-image-ring)] px-4 py-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl">
              <ol className="flex min-w-0 items-center gap-2 text-base text-[var(--color-teal-deep)] sm:text-lg">
                <li>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 font-bold transition-colors hover:text-[var(--color-coral-deep)] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-teal-deep)]"
                  >
                    <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
                    Events
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[var(--color-coral-deep)]">
                  /
                </li>
                <li className="min-w-0 truncate" aria-current="page">
                  {eventName}
                </li>
              </ol>
            </nav>
          </div>

          <header className="relative isolate overflow-hidden bg-[var(--color-coral-deep)] text-white">
            <div
              aria-hidden="true"
              className="absolute -left-32 top-10 h-80 w-80 rounded-full border-[52px] border-white/5"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-black/5"
            />

            <div className="relative mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-12 lg:px-8 lg:py-14">
              <div className="flex min-w-0 flex-col justify-center py-2 lg:py-8">
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-peach)] sm:text-base">
                  <span aria-hidden="true" className="h-1 w-10 bg-[var(--color-peach)]" />
                  BIT Club Event
                </div>

                <h1 className="mt-5 max-w-[13ch] text-balance text-5xl leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                  {eventName}
                </h1>

                <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="flex gap-4 rounded-2xl border border-white/15 bg-black/10 p-4 sm:p-5">
                    <FiCalendar
                      aria-hidden="true"
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-peach)]"
                    />
                    <div className="min-w-0">
                      <dt className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-peach)]">
                        When
                      </dt>
                      <dd className="mt-1 text-lg font-bold leading-snug">
                        <time dateTime={event.date ?? undefined}>
                          {formattedDateTime.date}
                        </time>
                      </dd>
                      <dd className="mt-1 flex items-start gap-2 text-base leading-snug text-white/85">
                        <FiClock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{formattedDateTime.time} Eastern</span>
                      </dd>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-white/15 bg-black/10 p-4 sm:p-5">
                    <FiMapPin
                      aria-hidden="true"
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-peach)]"
                    />
                    <div className="min-w-0">
                      <dt className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-peach)]">
                        Where
                      </dt>
                      <dd className="mt-1 text-lg font-bold leading-snug">{locationLabel}</dd>
                      {locationName && locationAddress && (
                        <dd className="mt-1 text-base leading-snug text-white/85">
                          {locationAddress}
                        </dd>
                      )}
                      {safeMapUrl && (
                        <dd className="mt-2">
                          <a
                            href={safeMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 rounded-sm py-2 font-bold text-[var(--color-peach)] underline decoration-2 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)] motion-reduce:transition-none"
                          >
                            View map
                            <FiArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </dd>
                      )}
                    </div>
                  </div>
                </dl>

                <EventActionLinks links={eventLinks} variant="hero" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-[var(--color-peach)] shadow-2xl sm:aspect-[16/10] lg:aspect-auto lg:min-h-[38rem]">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={event.image?.alt?.trim() ?? ""}
                    fill
                    priority
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                    placeholder={event.image?.asset?.metadata?.lqip ? "blur" : "empty"}
                    blurDataURL={event.image?.asset?.metadata?.lqip ?? undefined}
                  />
                ) : (
                  <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden px-8 py-12 text-center">
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[var(--color-coral)]/60"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[44px] border-white/30"
                    />
                    <div className="relative flex flex-col items-center">
                      <Image
                        src="/main_logos_and_assets/logos/club_logos/bit_logo_transparent.png"
                        alt=""
                        width={862}
                        height={777}
                        className="h-auto w-36 drop-shadow-md sm:w-44"
                      />
                      <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-ink)] sm:text-base">
                        BIT Club at Virginia Tech
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-16">
              <section aria-labelledby="about-event-heading" className="max-w-3xl">
                <h2 id="about-event-heading" className="text-4xl sm:text-5xl">
                  About this event
                </h2>
                <div aria-hidden="true" className="mt-4 h-1.5 w-16 bg-[var(--color-coral)]" />

                <div className="mt-8">
                  {event.description && event.description.length > 0 ? (
                    <EventDescription value={event.description} />
                  ) : (
                    <p className="max-w-2xl text-lg leading-8 text-[var(--color-teal-deep)]">
                      More event details will be posted here. Check back soon for updates.
                    </p>
                  )}
                </div>

                <EventActionLinks links={eventLinks} variant="content" />
              </section>

              <aside aria-label="Event details" className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl border border-[var(--color-image-ring)] bg-white shadow-[0_18px_50px_rgba(16,42,47,0.10)]">
                  <div aria-hidden="true" className="h-2 bg-[var(--color-teal)]" />
                  <div className="p-6 sm:p-7">
                    <h2 className="text-3xl">Event details</h2>

                    <dl className="mt-6 divide-y divide-[var(--color-image-ring)]">
                      <div className="flex gap-4 py-5 first:pt-0">
                        <FiCalendar
                          aria-hidden="true"
                          className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-coral-deep)]"
                        />
                        <div>
                          <dt className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-teal-deep)]">
                            Date
                          </dt>
                          <dd className="mt-1 text-lg font-bold leading-snug">
                            <time dateTime={event.date ?? undefined}>
                              {formattedDateTime.date}
                            </time>
                          </dd>
                        </div>
                      </div>

                      <div className="flex gap-4 py-5">
                        <FiClock
                          aria-hidden="true"
                          className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-coral-deep)]"
                        />
                        <div>
                          <dt className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-teal-deep)]">
                            Time
                          </dt>
                          <dd className="mt-1 text-lg font-bold leading-snug">
                            {formattedDateTime.time}
                          </dd>
                          <dd className="mt-1 text-sm text-[var(--color-teal-deep)]">
                            Eastern time
                          </dd>
                        </div>
                      </div>

                      <div className="flex gap-4 py-5 last:pb-0">
                        <FiMapPin
                          aria-hidden="true"
                          className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-coral-deep)]"
                        />
                        <div>
                          <dt className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-teal-deep)]">
                            Location
                          </dt>
                          <dd className="mt-1 text-lg font-bold leading-snug">{locationLabel}</dd>
                          {locationName && locationAddress && (
                            <dd className="mt-1 text-base leading-snug text-[var(--color-teal-deep)]">
                              <address className="not-italic">{locationAddress}</address>
                            </dd>
                          )}
                          {safeMapUrl && (
                            <dd className="mt-2">
                              <a
                                href={safeMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 rounded-sm py-2 font-bold text-[var(--color-coral-deep)] underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-teal-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-teal-deep)] motion-reduce:transition-none"
                              >
                                View map
                                <FiArrowUpRight
                                  aria-hidden="true"
                                  className="h-4 w-4 shrink-0"
                                />
                                <span className="sr-only"> (opens in a new tab)</span>
                              </a>
                            </dd>
                          )}
                        </div>
                      </div>
                    </dl>

                    <AddToCalendarButton
                      title={eventName}
                      slug={event.slug ?? slug}
                      eventId={event._id}
                      date={event.date}
                      startTime={event.startTime}
                      endTime={event.endTime}
                      location={calendarLocation || undefined}
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
