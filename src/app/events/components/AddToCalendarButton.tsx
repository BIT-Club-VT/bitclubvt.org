"use client";

import { FiCalendar } from "react-icons/fi";

const EVENT_TIME_ZONE = "America/New_York";
const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

type AddToCalendarButtonProps = {
  title: string;
  slug: string;
  eventId: string;
  date: string | null | undefined;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  location?: string;
};

function isValidSchedule(
  dateValue: string | null | undefined,
  startTime: string | null | undefined,
  endTime: string | null | undefined,
) {
  const dateMatch = dateValue?.match(DATE_PATTERN);

  if (!dateMatch || !startTime || !endTime) return false;

  const [, year, month, day] = dateMatch;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return (
    date.getUTCFullYear() === Number(year) &&
    date.getUTCMonth() + 1 === Number(month) &&
    date.getUTCDate() === Number(day) &&
    TIME_PATTERN.test(startTime) &&
    TIME_PATTERN.test(endTime) &&
    endTime > startTime
  );
}

function escapeCalendarText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function foldCalendarLine(line: string) {
  const encoder = new TextEncoder();
  const segments: string[] = [];
  let segment = "";
  let byteLength = 0;

  for (const character of line) {
    const characterLength = encoder.encode(character).length;
    const limit = segments.length === 0 ? 75 : 74;

    if (byteLength + characterLength > limit) {
      segments.push(segment);
      segment = character;
      byteLength = characterLength;
    } else {
      segment += character;
      byteLength += characterLength;
    }
  }

  if (segment) segments.push(segment);

  return segments.join("\r\n ");
}

function formatTimestamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function createCalendarFile({
  title,
  eventId,
  date,
  startTime,
  endTime,
  location,
}: Required<Pick<AddToCalendarButtonProps, "title" | "eventId">> &
  Pick<AddToCalendarButtonProps, "date" | "startTime" | "endTime" | "location">) {
  const compactDate = date!.replace(/-/g, "");
  const compactStartTime = startTime!.replace(":", "");
  const compactEndTime = endTime!.replace(":", "");
  const eventUrl = `${window.location.origin}${window.location.pathname}`;
  const stableEventId = eventId.replace(/^drafts\./, "");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//BIT Club at Virginia Tech//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-TIMEZONE:${EVENT_TIME_ZONE}`,
    "BEGIN:VTIMEZONE",
    `TZID:${EVENT_TIME_ZONE}`,
    `X-LIC-LOCATION:${EVENT_TIME_ZONE}`,
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:-0500",
    "TZOFFSETTO:-0400",
    "TZNAME:EDT",
    "DTSTART:20070311T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:-0400",
    "TZOFFSETTO:-0500",
    "TZNAME:EST",
    "DTSTART:20071104T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${escapeCalendarText(`${stableEventId}@bitclubvt.org`)}`,
    `DTSTAMP:${formatTimestamp(new Date())}`,
    `DTSTART;TZID=${EVENT_TIME_ZONE}:${compactDate}T${compactStartTime}00`,
    `DTEND;TZID=${EVENT_TIME_ZONE}:${compactDate}T${compactEndTime}00`,
    `SUMMARY:${escapeCalendarText(title)}`,
    ...(location ? [`LOCATION:${escapeCalendarText(location)}`] : []),
    `DESCRIPTION:${escapeCalendarText(`View event details: ${eventUrl}`)}`,
    `URL:${eventUrl}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return `${lines.map(foldCalendarLine).join("\r\n")}\r\n`;
}

export default function AddToCalendarButton(props: AddToCalendarButtonProps) {
  const {title, slug, date, startTime, endTime} = props;

  if (!isValidSchedule(date, startTime, endTime)) return null;

  function handleAddToCalendar() {
    const calendarFile = createCalendarFile(props);
    const blob = new Blob([calendarFile], {type: "text/calendar;charset=utf-8"});
    const objectUrl = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");

    downloadLink.href = objectUrl;
    downloadLink.download = `${slug || "bit-club-event"}.ics`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCalendar}
      aria-label={`Add ${title} to calendar`}
      className="mt-7 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--color-teal-deep)] px-5 py-3 text-center text-lg font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-coral-deep)] hover:shadow-lg active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-teal-deep)] motion-reduce:transform-none motion-reduce:transition-none"
    >
      Add to calendar
      <FiCalendar aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
