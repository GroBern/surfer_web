import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faCircleCheck,
  faAngleUp,
  faCircleInfo,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import BookingNavbar from '../../components/booking_engine/BookingNavbar';
import BookingFooter from '../../components/booking_engine/BookingFooter';

const Package = () => {
  const [dateRange, setDateRange] = useState(() => {
    const storedDateRange = localStorage.getItem("dateRange");
    return storedDateRange ? JSON.parse(storedDateRange) : null;
  });
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [includeIndex, setIncludeIndex] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(() => {
    const stored = localStorage.getItem("selectedRooms");
    return stored ? JSON.parse(stored) : [];
  });
  const [peopleCount, setPeopleCount] = useState(() => {
    const storedCount = localStorage.getItem("peopleCount");
    return storedCount ? parseInt(storedCount) : 0;
  });
  const [maxPackage, setMaxPackage] = useState(0);

  // Static package data
  const packageData = [
    {
      id: "1",
      title: "Moderate Surf Lesson Package",
      info: "Beginners, Level 01 / Level 02 / Intermediate OR MODERATE SURF GUIDING Advanced Surfers",
      includes: [
        "07 nights accommodation",
        "06 surf lessons or guiding sessions",
        "Surf Theory",
        "Everyday Breakfast",
        "06 Dinners Including Special Buffet Dinners",
        "02 Complimentary Yoga Sessions",
        "Free Transport To Different Surf Spots",
        "Free Use Of Surf Boards During Surf Sessions",
        "Small Groups Surf Teaching 6ppl Max per Group",
        "Daily Social Fun Activities"
      ],
    },
    {
      id: "2",
      title: "Full Surf Lesson Package",
      info: "Beginners, Level 01 / Level 02 / Intermediate OR FULL SURF GUIDING PACKAGE Advanced Surfers",
      includes: [
        "07 nights accommodation",
        "11 surf lessons or guiding sessions",
        "Surf Theory",
        "Everyday Breakfast",
        "06 Dinners Including Special Buffet Dinners",
        "02 Complimentary Yoga Sessions",
        "Free Transport To Different Surf Spots",
        "Free Use Of Surf Boards During Surf Sessions",
        "Small Groups Surf Teaching 6ppl Max per Group",
        "Daily Social Fun Activities"
      ],
    },
    {
      id: "3",
      title: "Surf & Yoga Package",
      info: "Surf Lessons OR Surf Guiding with Yoga",
      includes: [
        "07 nights accommodation",
        "Morning or evening everyday yoga",
        "06 surf lessons or guiding sessions",
        "Surf Theory",
        "Everyday Breakfast",
        "06 Dinners Including Special Buffet Dinners",
        "Free Transport To Different Surf Spots",
        "Free Use Of Surf Boards During Surf Sessions",
        "Small Groups Surf Teaching 6ppl Max per Group",
        "Daily Social Fun Activities"
      ],
    },
  ];

  useEffect(() => {
    localStorage.removeItem("travellerInfo");
    localStorage.removeItem("totalPrice");

    const storedAmounts = localStorage.getItem("amounts");
    const initialAmounts = storedAmounts
      ? JSON.parse(storedAmounts)
      : new Array(packageData.length).fill(0);
    setAmounts(initialAmounts);

    // Recalculate selectedPackages based on stored amounts
    const calculatedSelectedPackages = initialAmounts
      .map((amt, idx) =>
        amt > 0 ? `${amt} x ${packageData[idx]?.title}` : null
      )
      .filter((item) => item !== null);

    setSelectedPackages(calculatedSelectedPackages);
    setMaxPackage(peopleCount);
  }, [peopleCount]);

  useEffect(() => {
    const updatedSelectedPackages = amounts
      .map((amt, idx) =>
        amt > 0 ? `${amt} x ${packageData[idx]?.title}` : null
      )
      .filter((item) => item !== null);

    setSelectedPackages(updatedSelectedPackages);
    localStorage.setItem("selectedPackages", JSON.stringify(updatedSelectedPackages));
  }, [amounts]);

  const toggleInclude = (index) => {
    setIncludeIndex(includeIndex === index ? null : index);
  };

  const updateAmount = (index, increment) => {
    const updatedAmounts = [...amounts];
    const currentTotal = updatedAmounts.reduce((sum, a) => sum + a, 0);

    if (increment) {
      // Check if we can increment
      if (currentTotal >= peopleCount) return;
      updatedAmounts[index] += 1;
    } else {
      // Check if we can decrement
      if (updatedAmounts[index] <= 0) return;
      updatedAmounts[index] -= 1;
    }

    setAmounts(updatedAmounts);
    localStorage.setItem("amounts", JSON.stringify(updatedAmounts));
  };

  const getTotalSelectedPackages = () => {
    return amounts.reduce((total, amount) => total + amount, 0);
  };

  const isSelectionValid = () => {
    return getTotalSelectedPackages() === peopleCount && peopleCount > 0;
  };

  return (
    <>
      <BookingNavbar />
      <div className="package-container">
        <div className="main-content">
          <div className="left-section">
            <h3>Select Your Package</h3>
            <div className="package-header">
              <p>Surf Package</p>
              <p>Number of People: {peopleCount}</p>
            </div>
            {packageData.map((pkg, index) => (
              <div className="package" key={pkg.id}>
                <div className="package-box">
                  <div className="package-content">
                    <div className="package-title">{pkg.title}</div>
                  </div>
                  <div className="package-buttons">
                    <button
                      className="include-button"
                      onClick={() => toggleInclude(index)}
                    >
                      What's Included{" "}
                      {includeIndex === index ? (
                        <FontAwesomeIcon icon={faAngleUp} />
                      ) : (
                        <FontAwesomeIcon icon={faAngleDown} />
                      )}
                    </button>
                    <button
                      className="amount-button"
                      disabled={amounts[index] <= 0}
                      onClick={() => updateAmount(index, false)}
                      style={{
                        backgroundColor: amounts[index] <= 0 ? "gainsboro" : "#00afef",
                        color: amounts[index] <= 0 ? "black" : "white",
                        cursor: amounts[index] <= 0 ? "not-allowed" : "pointer"
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <p>{amounts[index]}</p>
                    <button
                      className="amount-button"
                      disabled={getTotalSelectedPackages() >= peopleCount}
                      onClick={() => updateAmount(index, true)}
                      style={{
                        backgroundColor: getTotalSelectedPackages() >= peopleCount ? "gainsboro" : "#00afef",
                        color: getTotalSelectedPackages() >= peopleCount ? "black" : "white",
                        cursor: getTotalSelectedPackages() >= peopleCount ? "not-allowed" : "pointer"
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                {includeIndex === index && (
                  <div className="include-box">
                    <p>Included per week</p>
                    {pkg.info && <p> <FontAwesomeIcon icon={faCircleInfo} /> {pkg.info}</p>}
                    {pkg.includes.map((item, i) => (
                      <p key={i}>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ marginRight: "5px" }}
                        />{" "}
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3">
            <Summary
              dateRange={dateRange}
              selectedRooms={selectedRooms}
              selectedPackages={selectedPackages}
            />
            <Link
              to="/selection"
              className={`block mt-6 ${isSelectionValid() ? "" : "pointer-events-none"}`}
                          >
              <div
                className={`text-center py-3 rounded-lg font-semibold flex justify-center items-center space-x-2 ${isSelectionValid()
                    ? "bg-[#00afef] text-white hover:bg-[#0a67a9]"
                    : "bg-gray-300 text-gray-600"
                  }`}
              >
                <span>Selection Matching</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <BookingFooter />
    </>
  );
};

export default Package;