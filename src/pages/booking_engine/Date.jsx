// src/pages/booking_engine/DatePage.jsx
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Summary from "../../components/booking_engine/Summary";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const DatePage = () => {
  const [startDate, setStartDate] = useState(null); // Date | null
  const [endDate, setEndDate] = useState(null);     // Date | null
  const [dateRange, setDateRange] = useState(() => {
    try {
      const stored = localStorage.getItem("dateRange");
      return stored ? JSON.parse(stored) : "";
    } catch {
      return "";
    }
  });
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [peakCharge, setPeakCharge] = useState(() => {
    try {
      const stored = localStorage.getItem("peakCharge");
      return stored ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  // Responsive monthsShown: 1 on <1024px, 2 on >=1024px
  const getMonthsShown = () =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1;
  const [monthsShown, setMonthsShown] = useState(getMonthsShown());

  useEffect(() => {
    const onResize = () => setMonthsShown(getMonthsShown());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // On mount: clear downstream selections & restore previous dates
  useEffect(() => {
    [
      "peopleCount",
      "selectedRooms",
      "amounts",
      "selectedPackages",
      "totalPrice",
      "travellerInfo",
    ].forEach((k) => localStorage.removeItem(k));

    const s = localStorage.getItem("selectedStartDate");
    const e = localStorage.getItem("selectedEndDate");
    if (s && e) {
      const start = new Date(s);
      const end = new Date(e);
      setStartDate(start);
      setEndDate(end);
      setHighlightedDates(buildDateArray(start, end));
    }
  }, []);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start || null);
    setEndDate(end || null);

    if (start && end) {
      const isPeak = crossesPeakRange(start, end);
      setPeakCharge(isPeak);
      if (isPeak) localStorage.setItem("peakCharge", "true");
      else localStorage.removeItem("peakCharge");

      const formatted = formatRange(start, end);
      setDateRange(formatted);
      localStorage.setItem("dateRange", JSON.stringify(formatted));
      localStorage.setItem("selectedStartDate", start.toLocaleDateString("en-US"));
      localStorage.setItem("selectedEndDate", end.toLocaleDateString("en-US"));

      setHighlightedDates(buildDateArray(start, end));
    }
  };

  /** Peak window: Dec 23 – Jan 5 (cross-year aware) */
  const crossesPeakRange = (start, end) => {
    const year = start.getFullYear();
    const peakStart = new Date(year, 11, 23); // Dec 23 this year
    const peakEnd = new Date(year + 1, 0, 5); // Jan 5 next year
    return start <= peakEnd && end >= peakStart;
  };

  const formatRange = (s, e) => {
    const opt = { year: "numeric", month: "short", day: "numeric" };
    return `${s.toLocaleDateString("en-US", opt)} - ${e.toLocaleDateString("en-US", opt)}`;
  };

  const buildDateArray = (s, e) => {
    const days = [];
    const d = new Date(s);
    while (d <= e) {
      days.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }
    return days;
  };

  const canProceed = Boolean(startDate && endDate);

  return (
    <>
      <BookingNavbar />

      {/* Scoped, page-only CSS (does not touch Summary styles) */}
      <style>{`
        /* Headline align/size to match other pages */
        .date-container .page-head h1 {
          margin: 0 0 6px 0;
        }

        /* Make the calendar fully fluid and keep 2-up layout on desktop */
        .date-container .react-datepicker { width: 100%; }
        @media (min-width: 1024px) {
          .date-container .react-datepicker__month-container { width: 50% !important; }
        }
        @media (max-width: 1023px) {
          .date-container .react-datepicker__month-container { width: 100% !important; border-right: 0 !important; }
        }

        /* Avoid double borders around the DatePicker block */
        .date-container .date-picker {
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }

        /* Keep the CTA always visible on small screens and beautify the button */
        @media (max-width: 640px) {
          .date-container { padding-bottom: calc(var(--footer-h, 90px) + 88px); }
          .date-container .cta-sticky {
            position: sticky;
            bottom: calc(12px + env(safe-area-inset-bottom));
            z-index: 10;
            padding: 6px 0;
            background: linear-gradient(to top, rgba(255,255,255,0.96), rgba(255,255,255,0.84));
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }
        }

        .date-container .next-button {
          display: grid;
          place-items: center;
          height: 56px;
          border-radius: 9999px;
          font-weight: 700;
          letter-spacing: .2px;
          color: #fff;
          background: linear-gradient(90deg, #00afef, #0a67a9);
          box-shadow:
            0 12px 24px rgba(2, 132, 199, 0.28),
            0 4px 10px rgba(2, 132, 199, 0.2);
          transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
        }
        .date-container .next-button:hover {
          transform: translateY(-1px);
          box-shadow:
            0 14px 28px rgba(2, 132, 199, 0.34),
            0 6px 12px rgba(2, 132, 199, 0.22);
          filter: saturate(1.05);
        }
        .date-container .next-button:active {
          transform: translateY(0);
        }
        /* Disabled visual without touching your logic */
        .date-container a[aria-disabled="true"] .next-button {
          background: #e5e7eb !important;
          color: #6b7280 !important;
          box-shadow: none !important;
          cursor: not-allowed !important;
        }
      `}</style>

      <div className="date-container">
        {peakCharge && (
          <div className="date-notice" role="status" aria-live="polite">
            Following high peak charge will be applicable for the period 23rd December to 05th January. <br />
            Per Week Per Room Additional 150 € • Per Week Per Dorm Additional 100 €
          </div>
        )}

        {/* Headline + subhead (left-aligned, same size as other pages) */}
        <div className="page-head">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Select Dates</h1>
          <p className="text-sm text-gray-600" style={{ marginTop: 6, marginBottom: 16 }}>
            The price shown is the total price for all travelers.
          </p>
        </div>

        <div className="date-box">
          {/* Calendar */}
          <div className="left-section">
            <div className="date-picker">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                monthsShown={monthsShown}
                minDate={new Date()}
                highlightDates={highlightedDates}
                dateFormat="yyyy-MM-dd"
                calendarStartDay={1}
              />
            </div>
          </div>

          {/* Summary + CTA (Summary design untouched) */}
          <div className="right-section">
            <div className="summary-box">
              <Summary dateRange={dateRange} />
            </div>

            {/* Sticky wrapper only on mobile (via CSS) to keep button fully visible above fixed footer */}
            <div className="cta-sticky">
              <Link
                to={canProceed ? "/room" : "#"}
                onClick={(e) => { if (!canProceed) e.preventDefault(); }}
                className="block"
                aria-disabled={!canProceed}
              >
                <div className="next-button">
                  Room Selection <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default DatePage;
