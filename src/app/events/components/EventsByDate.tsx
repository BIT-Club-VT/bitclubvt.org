"use client";

import { useEffect, useMemo, useState } from "react";
import type { ALL_EVENTS_QUERY_RESULT } from "@/sanity.types";
import EventCard, { type EventCardEvent } from "./EventCard";
import { getEasternTodayDate } from "../lib/formatEventSchedule";

type EventsByDateProps = {
  events: ALL_EVENTS_QUERY_RESULT;
  initialTodayDate: string;
};

type EventGroups = {
  todaysEvents: EventCardEvent[];
  upcomingEvents: EventCardEvent[];
  pastEvents: EventCardEvent[];
};

function compareDateTimeAscending(first: EventCardEvent, second: EventCardEvent) {
  return (
    (first.date ?? "").localeCompare(second.date ?? "") ||
    (first.startTime ?? "").localeCompare(second.startTime ?? "") ||
    first._id.localeCompare(second._id)
  );
}

function groupEventsByDate(events: ALL_EVENTS_QUERY_RESULT, todayDate: string): EventGroups {
  const groups: EventGroups = {
    todaysEvents: [],
    upcomingEvents: [],
    pastEvents: [],
  };

  for (const event of events) {
    if (!event.date) continue;

    if (event.date === todayDate) {
      groups.todaysEvents.push(event);
    } else if (event.date > todayDate) {
      groups.upcomingEvents.push(event);
    } else {
      groups.pastEvents.push(event);
    }
  }

  groups.todaysEvents.sort(compareDateTimeAscending);
  groups.upcomingEvents.sort(compareDateTimeAscending);
  groups.pastEvents.sort((first, second) => compareDateTimeAscending(second, first));

  return groups;
}

function EventGrid({
  events,
  emptyMessage,
}: {
  events: EventCardEvent[];
  emptyMessage: string;
}) {
  if (events.length === 0) {
    return <p className="text-lg text-[var(--color-teal-deep)]">{emptyMessage}</p>;
  }

  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default function EventsByDate({ events, initialTodayDate }: EventsByDateProps) {
  const [todayDate, setTodayDate] = useState(initialTodayDate);

  useEffect(() => {
    const syncTodayDate = () => setTodayDate(getEasternTodayDate());

    syncTodayDate();
    const intervalId = window.setInterval(syncTodayDate, 60_000);

    const handleVisibilityChange = () => {
      if (!document.hidden) syncTodayDate();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const { todaysEvents, upcomingEvents, pastEvents } = useMemo(
    () => groupEventsByDate(events, todayDate),
    [events, todayDate],
  );

  return (
    <section className="bg-[var(--color-paper)] px-4 py-12 text-[var(--color-ink)]">
      <div className="mx-auto max-w-7xl space-y-14">
        <header className="max-w-3xl">
          <p className="mb-2 text-lg font-bold uppercase tracking-[0.16em] text-[var(--color-coral-deep)]">
            BIT Club at Virginia Tech
          </p>
          <h1 className="text-4xl sm:text-5xl">Events</h1>
          <p className="mt-4 text-xl leading-8">
            Join us for professional development, community, and social events in Blacksburg.
          </p>
        </header>

        <section aria-labelledby="todays-events-heading" className="space-y-6">
          <h2 id="todays-events-heading" className="text-3xl sm:text-4xl">
            Today&apos;s Events
          </h2>
          <EventGrid
            events={todaysEvents}
            emptyMessage="There are no events scheduled for today."
          />
        </section>

        <section aria-labelledby="upcoming-events-heading" className="space-y-6">
          <h2 id="upcoming-events-heading" className="text-3xl sm:text-4xl">
            Upcoming Events
          </h2>
          <EventGrid
            events={upcomingEvents}
            emptyMessage="There are no upcoming events posted right now. Check back soon."
          />
        </section>

        <section aria-labelledby="past-events-heading" className="space-y-6">
          <h2 id="past-events-heading" className="text-3xl sm:text-4xl">
            Past Events
          </h2>
          <EventGrid events={pastEvents} emptyMessage="No past events have been posted yet." />
        </section>
      </div>
    </section>
  );
}
