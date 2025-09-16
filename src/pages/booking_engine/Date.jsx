import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Summary from "../../components/booking_engine/Summary";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const MOBILE_BP = 640; // tailwind sm

const DatePage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateRange, setDateRange] = useState(() => {
    const stored = localStorage.getItem("dateRange");
    try { return stored ? JSON.parse(stored) : ""; } catch { return stored || ""; }
  });
  const [highlightedDates, setHighlightedDates] = useState([]);

  // Responsive monthsShown: 1 on phones, 2 on >= sm
  const getMonthsShown = () =>
    typeof window !== "undefined" && window.innerWidth < MOBILE_BP ? 1 : 2;
  const [monthsShown, setMonthsShown] = useState(getMonthsShown);

  useEffect(() => {
    const onResize = () => setMonthsShown(getMonthsShown());
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  useEffect(() => {
    // reset downstream steps
    ["peopleCount","selectedRooms","amounts","selectedPackages","totalPrice"].forEach((k)=>localStorage.removeItem(k));

    // restore previously picked dates
    const s = localStorage.getItem("selectedStartDate");
    const e = localStorage.getItem("selectedEndDate");
    if (s && e) {
      const start = new Date(s);
      const end = new Date(e);
      setStartDate(start);
      setEndDate(end);
      setHighlightedDates(getDateRange(start, end));
    }
  }, []);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      // peak period Dec 23 → Jan 5 (cross-year aware)
      if (isPeakDateRange(start, end)) localStorage.setItem("peakCharge", "true");
      else localStorage.removeItem("peakCharge");

      const formatted = formatDateRange(start, end);
      setDateRange(formatted);
      localStorage.setItem("dateRange", JSON.stringify(formatted));
      localStorage.setItem("selectedStartDate", start.toLocaleDateString("en-US"));
      localStorage.setItem("selectedEndDate", end.toLocaleDateString("en-US"));

      setHighlightedDates(getDateRange(start, end));
    }
  };

  const isPeakDateRange = (start, end) => {
    const peakStart = new Date(start.getFullYear(), 11, 23);
    const peakEnd = new Date(start.getFullYear() + (start.getMonth() === 11 ? 1 : 0), 0, 5);
    return start <= peakEnd && end >= peakStart;
  };

  const formatDateRange = (start, end) => {
    if (!start || !end) return "";
    const opt = { year: "numeric", month: "short", day: "numeric" };
    return `${start.toLocaleDateString("en-US", opt)} - ${end.toLocaleDateString("en-US", opt)}`;
  };

  const getDateRange = (start, end) => {
    if (!start || !end) return [];
    const out = [];
    const cur = new Date(start);
    while (cur <= end) { out.push(new Date(cur)); cur.setDate(cur.getDate() + 1); }
    return out;
  };

  const canProceed = Boolean(startDate && endDate);

  return (
    <>
      <BookingNavbar />

      {/* Mobile tweaks scoped to this page for react-datepicker internals */}
      <style>{`
        .tw-date .react-datepicker { width: 100%; border: 1px solid #e5e7eb !important; }
        @media (max-width: ${MOBILE_BP - 1}px) {
          .tw-date .react-datepicker__month-container { width: 100% !important; border-right: 0 !important; }
          .tw-date .react-datepicker__header { border-radius: 10px 10px 0 0 !important; }
          .tw-date .react-datepicker__current-month { font-size: 1rem !important; }
          .tw-date .react-datepicker__day-names { padding: 0 4px; }
          .tw-date .react-datepicker__day-name { font-size: .8rem !important; }
          .tw-date .react-datepicker__week { display: flex; justify-content: space-between; }
          .tw-date .react-datepicker__day {
            width: 2.1rem !important;
            line-height: 2.1rem !important;
            margin: .25rem .18rem !important;
            font-size: .95rem !important;
          }
          .tw-date .react-datepicker__navigation { top: 8px !important; height: 28px !important; width: 28px !important; }
        }
      `}</style>

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        {localStorage.getItem("peakCharge") && (
          <div role="status" aria-live="polite" className="mb-6 rounded-lg bg-sky-500 text-white shadow-md">
            <div className="px-4 py-3 sm:px-6">
              <p className="text-center text-base sm:text-lg font-semibold">
                Following high peak charge will be applicable for the period 23rd December to 05th January
              </p>
              <div className="mt-2 text-center space-y-1 text-sm sm:text-base">
                <p>Per Week Per Room Additional 150 €</p>
                <p>Per Week Per Dorm Additional 100 €</p>
              </div>
            </div>
          </div>
        )}

        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Select Dates</h3>
        <p className="mt-1 text-sm text-gray-600">The price shown is the total price for all travelers.</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="tw-date rounded-xl border border-gray-200 bg-white p-2 sm:p-3 shadow-sm overflow-hidden">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="yyyy-MM-dd"
                placeholderText="Select start and end date"
                className="date-picker w-full"
                inline
                monthsShown={monthsShown}
                minDate={new Date()}
                highlightDates={highlightedDates}
                calendarStartDay={1} // Monday
              />
            </div>
          </div>

          {/* Summary + CTA */}
          <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
              <Summary dateRange={dateRange} />
            </div>

            <Link
              to={canProceed ? "/room" : "#"}
              onClick={(e) => { if (!canProceed) e.preventDefault(); }}
              className="block"
              aria-disabled={!canProceed}
            >
              <div
                className={[
                  "grid h-12 sm:h-14 w-full place-items-center rounded-lg text-base font-semibold transition",
                  canProceed
                    ? "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700"
                    : "cursor-not-allowed bg-gray-300 text-gray-600"
                ].join(" ")}
              >
                <span> Room Selection </span> <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </div>
            </Link>
          </aside>
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default DatePage;
