import React, { useEffect, useState } from "react";
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
    // build a peak range that includes the year boundary
    const year = start.getFullYear();
    const peakStart = new Date(year, 11, 23); // Dec 23, same year
    // peak end = Jan 5 of next year
    const peakEnd = new Date(year + 1, 0, 5);
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

      <div className="date-container">
        {peakCharge && (
          <div className="date-notice" role="status" aria-live="polite">
            Following high peak charge will be applicable for the period 23rd December to 05th January. <br />
            Per Week Per Room Additional 150 € • Per Week Per Dorm Additional 100 €
          </div>
        )}

        <h3 className="main-text" style={{ textAlign: "left", marginTop: 0 }}>
          Select Dates
        </h3>
        <p style={{ color: "#666", marginTop: "6px", marginBottom: "16px" }}>
          The price shown is the total price for all travelers.
        </p>

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

          {/* Summary + CTA */}
          <div className="right-section">
            <div className="summary-box">
              <Summary dateRange={dateRange} />
            </div>

            <Link
              to={canProceed ? "/room" : "#"}
              className={canProceed ? "next-button" : "disabled-link"}
              onClick={(e) => { if (!canProceed) e.preventDefault(); }}
              aria-disabled={!canProceed}
            >
              <div
                className="next-button"
                style={!canProceed ? { backgroundColor: "gainsboro", cursor: "not-allowed" } : {}}
              >
                Room Selection <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 8 }} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default DatePage;
