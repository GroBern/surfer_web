import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import TimePicker from 'react-time-picker';
import BookingNavbar from '../../components/booking_engine/BookingNavbar';
import BookingFooter from '../../components/booking_engine/BookingFooter';

const Addon = () => {
  const [dateRange, setDateRange] = useState(() => {
    const storedDateRange = localStorage.getItem("dateRange");
    return storedDateRange ? JSON.parse(storedDateRange) : null;
  });
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [totalSelectedPackages, setTotalSelectedPackages] = useState(0);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(() => {
    const storedPrice = localStorage.getItem("totalPrice");
    return storedPrice ? JSON.parse(storedPrice) : 0;
  });
  const [selectedAddons, setSelectedAddons] = useState(() => {
    const storedAddons = localStorage.getItem("addons");
    return storedAddons ? JSON.parse(storedAddons) : [];
  });
  const [travellerInfo, setTravellerInfo] = useState(() => {
    const storedInfo = localStorage.getItem("travellerInfo");
    return storedInfo ? JSON.parse(storedInfo) : [{}];
  });
  const [showArrivalForm, setShowArrivalForm] = useState(false);
  const [showDepartureForm, setShowDepartureForm] = useState(false);

  // Load initial data from localStorage
  useEffect(() => {
    const storedRooms = localStorage.getItem("selectedRooms");
    if (storedRooms) setSelectedRooms(JSON.parse(storedRooms));

    const storedPackages = localStorage.getItem("selectedPackages");
    if (storedPackages) {
      const packageArray = JSON.parse(storedPackages);
      const totalPackages = packageArray.reduce((sum, pkg) => {
        const count = parseInt(pkg.split(" x ")[0]);
        return sum + count;
      }, 0);
      setTotalSelectedPackages(totalPackages);
      setSelectedPackages(packageArray);
    }
  }, []);

  const isAddonActive = (title) =>
    selectedAddons.some((addon) => addon.title === title);

  // Handle flight information changes
  const handleFlightInfoChange = (e) => {
    const { name, value } = e.target;
    setTravellerInfo(prev => {
      const updatedInfo = [...prev];
      if (updatedInfo.length === 0) updatedInfo.push({});
      updatedInfo[0] = { ...updatedInfo[0], [name]: value };
      return updatedInfo;
    });
  };

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("addons", JSON.stringify(selectedAddons));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("travellerInfo", JSON.stringify(travellerInfo));
  }, [selectedAddons, totalPrice, travellerInfo]);

  const handleArrivalFee = () => {
    const isActive = isAddonActive("Airport Pick-up");

    if (isActive) {
      // Remove addon
      setSelectedAddons(prev => prev.filter(addon => addon.title !== "Airport Pick-up"));
      setTotalPrice(prev => prev - (totalSelectedPackages >= 4 ? 100 : 75));
      setShowArrivalForm(false);
    } else {
      // Add addon
      setSelectedAddons(prev => [
        ...prev,
        {
          title: "Airport Pick-up",
          amount: 1,
          price: totalSelectedPackages >= 4 ? 100 : 75
        }
      ]);
      setTotalPrice(prev => prev + (totalSelectedPackages >= 4 ? 100 : 75));
      setShowArrivalForm(true);
    }
  };

  const handleDepartureFee = () => {
    const isActive = isAddonActive("Airport Drop");

    if (isActive) {
      // Remove addon
      setSelectedAddons(prev => prev.filter(addon => addon.title !== "Airport Drop"));
      setTotalPrice(prev => prev - (totalSelectedPackages >= 4 ? 100 : 65));
      setShowDepartureForm(false);
    } else {
      // Add addon
      setSelectedAddons(prev => [
        ...prev,
        {
          title: "Airport Drop",
          amount: 1,
          price: totalSelectedPackages >= 4 ? 100 : 65
        }
      ]);
      setTotalPrice(prev => prev + (totalSelectedPackages >= 4 ? 100 : 65));
      setShowDepartureForm(true);
    }
  };

  const isArrivalInfoValid = () => {
    const info = travellerInfo[0];
    return (
      !isAddonActive("Airport Pick-up") || (
        info?.arrivalFlightNumber &&
        info?.arrivalFlightDate &&
        info?.arrivalFlightTime
      )
    );
  };

  const isDepartureInfoValid = () => {
    const info = travellerInfo[0];
    return (
      !isAddonActive("Airport Drop") || (
        info?.departureFlightNumber &&
        info?.departureFlightDate &&
        info?.departureFlightTime
      )
    );
  };

  const isFormValid = isArrivalInfoValid() && isDepartureInfoValid();

  return (
    <>
      <BookingNavbar />
      <div className="addon-container">
        <h3>Select Airport Details</h3>
        <div className="main-content">
          <div className="left-section">
            {/* Add-on 1 */}
            <div className="addon">
              <div className="addon-box">
                <div className="addon-content">
                  <div className="addon-title">
                    Airport Pick-up {totalSelectedPackages <= 3 ? "(Up to 3 People)" : "(More than 4 People)"}
                  </div>
                  <div className="addon-price">EUR {totalSelectedPackages >= 4 ? 100 : 75}</div>
                </div>

                {/* Surfboard checkbox */}
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="surfboard-checkbox"
                    name="surfboard-checkbox"
                    checked={travellerInfo[0]?.hasSurfboard || false}
                    onChange={(e) => {
                      setTravellerInfo(prev => {
                        const updatedInfo = [...prev];
                        if (updatedInfo.length === 0) updatedInfo.push({});
                        updatedInfo[0] = { ...updatedInfo[0], hasSurfboard: e.target.checked };
                        return updatedInfo;
                      });
                    }}
                  />
                  <label htmlFor="surfboard-checkbox" style={{ marginLeft: "5px" }}>
                    Will you bring a surfboard?
                  </label>
                </div>

                <div className="transfer-buttons">
                  <button
                    className="booking-button"
                    onClick={handleArrivalFee}
                    style={
                      isAddonActive("Airport Pick-up")
                        ? { backgroundColor: "#0a67a9", color: "#fff" }
                        : {}
                    }
                  >
                    {isAddonActive("Airport Pick-up") ? "Remove" : "Add"}
                  </button>
                </div>
              </div>

              <div className="viewmore-box">
                <p>
                  Transfer from Bandaranaike International Airport to the Surf Camp.
                  Price for up to 3 pax: €75. Price for 4 pax or more: €100.
                </p>

                {/* Arrival Information Form */}
                {selectedAddons.some((addon) => addon.title === "Airport Pick-up") && (
                  <div className="flight-info-form traveller-form">
                    <h4>Arrival Information</h4>
                    <div className="form-group">
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label htmlFor="arrivalFlightNumber">Arrival Flight Number</label>
                        <input
                          type="text"
                          placeholder="Enter your arrival flight number"
                          name="arrivalFlightNumber"
                          value={travellerInfo[0]?.arrivalFlightNumber || ""}
                          onChange={handleFlightInfoChange}
                          required
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label htmlFor="arrivalFlightDate">Arrival Flight Date</label>
                        <input
                          type="date"
                          name="arrivalFlightDate"
                          value={travellerInfo[0]?.arrivalFlightDate || ""}
                          onChange={handleFlightInfoChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label htmlFor="arrivalFlightTime">Arrival Flight Time</label>
                        <TimePicker
                          name="arrivalFlightTime"
                          onChange={(value) => handleFlightInfoChange({ target: { name: "arrivalFlightTime", value } })}
                          value={travellerInfo[0]?.arrivalFlightTime || ""}
                          format="h:m a"
                          disableClock={true}
                          clearIcon={null}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Add-on 2 */}
            <div className="addon">
              <div className="addon-box">
                <div className="addon-content">
                  <div className="addon-title">
                    Airport Drop {totalSelectedPackages <= 3 ? "(up to 3 people)" : "(more than 4 people)"}
                  </div>
                  <div className="addon-price">EUR {totalSelectedPackages >= 4 ? 100 : 65}</div>
                </div>
                <div className="transfer-buttons">
                  <button
                    className="booking-button"
                    onClick={handleDepartureFee}
                    style={
                      isAddonActive("Airport Drop")
                        ? { backgroundColor: "#0a67a9", color: "#fff" }
                        : {}
                    }
                  >
                    {isAddonActive("Airport Drop") ? "Remove" : "Add"}
                  </button>
                </div>
              </div>

              <div className="viewmore-box">
                <p>
                  Transfer from the Surf Camp to Bandaranaike International Airport.
                  Price for up to 3 pax: €65. Price for 4 pax or more: €100.
                </p>

                {/* Departure Information Form */}
                {selectedAddons.some((addon) => addon.title === "Airport Drop") && (
                  <div className="flight-info-form traveller-form">
                    <h4>Departure Information</h4>
                    <div className="form-group">
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label htmlFor="departureFlightNumber">Departure Flight Number</label>
                        <input
                          type="text"
                          placeholder="Enter your departure flight number"
                          name="departureFlightNumber"
                          value={travellerInfo[0]?.departureFlightNumber || ""}
                          onChange={handleFlightInfoChange}
                          required
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label htmlFor="departureFlightDate">Departure Flight Date</label>
                        <input
                          type="date"
                          name="departureFlightDate"
                          value={travellerInfo[0]?.departureFlightDate || ""}
                          onChange={handleFlightInfoChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <label htmlFor="departureFlightTime">Departure Flight Time</label>
                        <TimePicker
                          name="departureFlightTime"
                          onChange={(value) => handleFlightInfoChange({ target: { name: "departureFlightTime", value } })}
                          value={travellerInfo[0]?.departureFlightTime || ""}
                          format="h:m a"
                          disableClock={true}
                          clearIcon={null}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="right-section">
            <Summary
              dateRange={dateRange}
              selectedPackages={selectedPackages}
              selectedRooms={selectedRooms}
              totalPrice={totalPrice}
              addons={selectedAddons}
            />
            <Link
              to={isFormValid ? "/information" : "#"}
              className={`next-button ${!isFormValid ? "disabled-link" : ""}`}
              onClick={(e) => {
                if (!isFormValid) {
                  e.preventDefault();
                  alert("Please fill in all required arrival and/or departure flight information.");
                }
              }}
            >
              <div className="next-button" style={!isFormValid ? { backgroundColor: "gainsboro" } : {}}>
                Traveller Details <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <BookingFooter />
    </>
  );
};

export default Addon;