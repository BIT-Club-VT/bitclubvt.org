export default function Calendar() {
  const calendarSrc =
    "https://calendar.google.com/calendar/embed?src=virginiatechbitclub%40gmail.com&ctz=America%2FNew_York";

  return (
    <section className="bg-[#FDF8E8] py-12 px-4 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Check out our Google Calendar!
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          You can view all of the current and upcoming events for the BIT Club, as well as the Virginia Tech Academic Dates and Deadlines!
        </p>

        {/* Calendar iframe (this is where it goes) */}
        <div className="relative pb-[75%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={calendarSrc}
            className="absolute top-0 left-0 w-full h-full border-0"
            frameBorder="0"
            scrolling="no"
            title="BIT Club Google Calendar"
          ></iframe>
        </div>

        <p className="mt-4 text-lg sm:text-xl">
          If you are having trouble accessing the calendar, click{" "}
            <a
              href={calendarSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B83A20] hover:text-[#861F41]"
            >
              HERE
            </a>
          <br />
          <b>NOTE: If you are signed into your VT Email, you will not be able to access the calendar</b>
        </p>
      </div>
    </section>
  );
}
