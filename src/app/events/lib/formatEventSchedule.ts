export const EVENT_TIME_ZONE = "America/New_York";

const longDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "UTC",
});

const easternDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: EVENT_TIME_ZONE,
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

export type FormattedEventSchedule = {
  date: string;
  time: string;
};

const EVENT_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const EVENT_TIME_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

function getEasternCalendarDate(date: Date) {
  const parts = easternDateFormatter.formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
  };
}

export function getEasternTodayDate(now = new Date()) {
  const today = getEasternCalendarDate(now);

  return `${today.year}-${String(today.month).padStart(2, "0")}-${String(today.day).padStart(
    2,
    "0",
  )}`;
}

export function formatEventSchedule(
  dateValue: string | null | undefined,
  startTime: string | null | undefined,
  endTime: string | null | undefined,
): FormattedEventSchedule {
  const dateMatch = dateValue?.match(EVENT_DATE_PATTERN);

  if (!dateMatch || !startTime || !endTime) {
    return {
      date: "Date to be announced",
      time: "Time to be announced",
    };
  }

  const [, year, month, day] = dateMatch;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  if (
    date.getUTCFullYear() !== Number(year) ||
    date.getUTCMonth() + 1 !== Number(month) ||
    date.getUTCDate() !== Number(day) ||
    !EVENT_TIME_PATTERN.test(startTime) ||
    !EVENT_TIME_PATTERN.test(endTime) ||
    endTime <= startTime
  ) {
    return {
      date: "Date to be announced",
      time: "Time to be announced",
    };
  }

  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);
  const start = new Date(Date.UTC(2000, 0, 1, startHours, startMinutes));
  const end = new Date(Date.UTC(2000, 0, 1, endHours, endMinutes));

  return {
    date: longDateFormatter.format(date),
    time: `${timeFormatter.format(start)} – ${timeFormatter.format(end)}`,
  };
}
