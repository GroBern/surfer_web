import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Summary from "../../components/booking_engine/Summary";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookingNavbar from '../../components/booking_engine/BookingNavbar';
import BookingFooter from '../../components/booking_engine/BookingFooter';

const DatePage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateRange, setDateRange] = useState(() => {
    const storedDateRange = localStorage.getItem("dateRange");
    return storedDateRange ? JSON.parse(storedDateRange) : "";
  });
  const [highlightedDates, setHighlightedDates] = useState([]);

  useEffect(() => {
    localStorage.removeItem("peopleCount");
    localStorage.removeItem("selectedRooms");
    localStorage.removeItem("amounts");
    localStorage.removeItem("selectedPackages");
    localStorage.removeItem("totalPrice");

    // Load selected start and end dates from local storage
    const storedStartDate = localStorage.getItem("selectedStartDate");
    const storedEndDate = localStorage.getItem("selectedEndDate");

    if (storedStartDate && storedEndDate) {
      const start = new Date(storedStartDate);
      const end = new Date(storedEndDate);
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
      let formattedDateRange = formatDateRange(start, end);

      // Check if the selected range includes peak dates
      if (isPeakDateRange(start, end)) {
        // formattedDateRange += " (peak charge)";
        localStorage.setItem("peakCharge", "true");
      } else {
        localStorage.removeItem("peakCharge");
      }

      setDateRange(formattedDateRange);
      localStorage.setItem("dateRange", JSON.stringify(formattedDateRange));
      localStorage.setItem("selectedStartDate", start.toLocaleDateString("en-US"));
      localStorage.setItem("selectedEndDate", end.toLocaleDateString("en-US"));

      setHighlightedDates(getDateRange(start, end));
    }
  };

  // Function to check if the selected range includes peak dates
  const isPeakDateRange = (start, end) => {
    const peakStart = new Date(start.getFullYear(), 11, 23); // 23rd Dec
    const peakEnd = new Date(start.getFullYear() + (start.getMonth() === 11 ? 1 : 0), 0, 5); // 5th Jan

    return (
      (start <= peakEnd && end >= peakStart) // Overlaps with peak dates
    );
  };

  const formatDateRange = (start, end) => {
    if (!start || !end) return "";

    const options = { year: "numeric", month: "short", day: "numeric" };
    const startFormatted = start.toLocaleDateString("en-US", options);
    const endFormatted = end.toLocaleDateString("en-US", options);

    return `${startFormatted} - ${endFormatted}`;
  };

  const getDateRange = (start, end) => {
    if (!start || !end) return [];
    let dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  return (
    <>
      <BookingNavbar />
      <div className="date-container">
        {localStorage.getItem("peakCharge") && (
          <div className="date-notice">
            <p className="main-text">Following high peak charge will Be Applicable for the dates period 23rd December to 05th January</p>
            <p>Per Week Per Room Additional 150 €</p>
            <p>Per Week Per Dorm Additional 100 €</p>
          </div>
        )}

        <h3>Select Dates</h3>
        <p>The price shown is the total price for all travelers.</p>
        <div className="date-box">
          <div className="left-section">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat="yyyy-MM-dd"
              placeholderText="Select start and end date"
              className="date-picker"
              inline
              monthsShown={2}
              minDate={new Date()}
              highlightDates={highlightedDates}
            />
          </div>
          <div className="right-section">
            <Summary dateRange={dateRange} />
            <Link to="/room" className={startDate && endDate ? `next-button` : `disabled-link`}>
              <div className="next-button" style={startDate && endDate ? {} : { backgroundColor: "gainsboro" }}>
                Room Selection <FontAwesomeIcon icon={faArrowRight} />
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
