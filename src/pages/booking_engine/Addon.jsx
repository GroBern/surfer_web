import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import TimePicker from "react-time-picker";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

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

  // Load initial data
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

  const handleFlightInfoChange = (e) => {
    const { name, value } = e.target;
    setTravellerInfo((prev) => {
      const updated = [...prev];
      if (updated.length === 0) updated.push({});
      updated[0] = { ...updated[0], [name]: value };
      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("addons", JSON.stringify(selectedAddons));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("travellerInfo", JSON.stringify(travellerInfo));
  }, [selectedAddons, totalPrice, travellerInfo]);

  const handleArrivalFee = () => {
    const isActive = isAddonActive("Airport Pick-up");
    const price = totalSelectedPackages >= 4 ? 100 : 75;
    if (isActive) {
      setSelectedAddons((prev) =>
        prev.filter((addon) => addon.title !== "Airport Pick-up")
      );
      setTotalPrice((prev) => prev - price);
    } else {
      setSelectedAddons((prev) => [
        ...prev,
        { title: "Airport Pick-up", amount: 1, price },
      ]);
      setTotalPrice((prev) => prev + price);
    }
  };

  const handleDepartureFee = () => {
    const isActive = isAddonActive("Airport Drop");
    const price = totalSelectedPackages >= 4 ? 100 : 65;
    if (isActive) {
      setSelectedAddons((prev) =>
        prev.filter((addon) => addon.title !== "Airport Drop")
      );
      setTotalPrice((prev) => prev - price);
    } else {
      setSelectedAddons((prev) => [
        ...prev,
        { title: "Airport Drop", amount: 1, price },
      ]);
      setTotalPrice((prev) => prev + price);
    }
  };

  const isArrivalInfoValid = () => {
    const info = travellerInfo[0];
    return (
      !isAddonActive("Airport Pick-up") ||
      (info?.arrivalFlightNumber && info?.arrivalFlightDate && info?.arrivalFlightTime)
    );
  };

  const isDepartureInfoValid = () => {
    const info = travellerInfo[0];
    return (
      !isAddonActive("Airport Drop") ||
      (info?.departureFlightNumber && info?.departureFlightDate && info?.departureFlightTime)
    );
  };

  const isFormValid = isArrivalInfoValid() && isDepartureInfoValid();

  return (
    <>
      <BookingNavbar />
      <div className="px-5 md:px-[10%] py-[10%] mb-[10%]">
        <h3 className="text-xl font-semibold mb-6">Select Airport Details</h3>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left section */}
          <div className="flex-1">
            {/* Airport Pick-up */}
            <div className="border border-black rounded-xl p-5 mb-10">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-bold">
                    Airport Pick-up{" "}
                    {totalSelectedPackages <= 3
                      ? "(Up to 3 People)"
                      : "(More than 4 People)"}
                  </div>
                  <div className="text-gray-700 font-medium">
                    EUR {totalSelectedPackages >= 4 ? 100 : 75}
                  </div>
                </div>
                <button
                  onClick={handleArrivalFee}
                  className={`w-28 h-10 border-2 rounded-md ${
                    isAddonActive("Airport Pick-up")
                      ? "bg-[#0a67a9] text-white border-[#0a67a9]"
                      : "bg-white border-[#0a67a9]"
                  }`}
                >
                  {isAddonActive("Airport Pick-up") ? "Remove" : "Add"}
                </button>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Transfer from Bandaranaike International Airport to the Surf
                Camp. Price up to 3 pax: €75. Price for 4 pax or more: €100.
              </p>

              {isAddonActive("Airport Pick-up") && (
                <div className="mt-4 space-y-4">
                  <h4 className="font-semibold">Arrival Information</h4>
                  <div className="grid gap-4">
                    <div className="flex flex-col">
                      <label>Arrival Flight Number</label>
                      <input
                        type="text"
                        name="arrivalFlightNumber"
                        placeholder="Enter flight number"
                        value={travellerInfo[0]?.arrivalFlightNumber || ""}
                        onChange={handleFlightInfoChange}
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Arrival Flight Date</label>
                      <input
                        type="date"
                        name="arrivalFlightDate"
                        min={new Date().toISOString().split("T")[0]}
                        value={travellerInfo[0]?.arrivalFlightDate || ""}
                        onChange={handleFlightInfoChange}
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Arrival Flight Time</label>
                      <TimePicker
                        name="arrivalFlightTime"
                        onChange={(value) =>
                          handleFlightInfoChange({
                            target: { name: "arrivalFlightTime", value },
                          })
                        }
                        value={travellerInfo[0]?.arrivalFlightTime || ""}
                        format="h:m a"
                        disableClock={true}
                        clearIcon={null}
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="surfboard"
                        checked={travellerInfo[0]?.hasSurfboard || false}
                        onChange={(e) =>
                          setTravellerInfo((prev) => {
                            const updated = [...prev];
                            if (updated.length === 0) updated.push({});
                            updated[0] = {
                              ...updated[0],
                              hasSurfboard: e.target.checked,
                            };
                            return updated;
                          })
                        }
                      />
                      <label htmlFor="surfboard" className="ml-2">
                        Will you bring a surfboard?
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Airport Drop */}
            <div className="border border-black rounded-xl p-5 mb-10">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-bold">
                    Airport Drop{" "}
                    {totalSelectedPackages <= 3
                      ? "(Up to 3 People)"
                      : "(More than 4 People)"}
                  </div>
                  <div className="text-gray-700 font-medium">
                    EUR {totalSelectedPackages >= 4 ? 100 : 65}
                  </div>
                </div>
                <button
                  onClick={handleDepartureFee}
                  className={`w-28 h-10 border-2 rounded-md ${
                    isAddonActive("Airport Drop")
                      ? "bg-[#0a67a9] text-white border-[#0a67a9]"
                      : "bg-white border-[#0a67a9]"
                  }`}
                >
                  {isAddonActive("Airport Drop") ? "Remove" : "Add"}
                </button>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Transfer from Surf Camp to Bandaranaike International Airport.
                Price up to 3 pax: €65. Price for 4 pax or more: €100.
              </p>

              {isAddonActive("Airport Drop") && (
                <div className="mt-4 space-y-4">
                  <h4 className="font-semibold">Departure Information</h4>
                  <div className="grid gap-4">
                    <div className="flex flex-col">
                      <label>Departure Flight Number</label>
                      <input
                        type="text"
                        name="departureFlightNumber"
                        placeholder="Enter flight number"
                        value={travellerInfo[0]?.departureFlightNumber || ""}
                        onChange={handleFlightInfoChange}
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Departure Flight Date</label>
                      <input
                        type="date"
                        name="departureFlightDate"
                        min={new Date().toISOString().split("T")[0]}
                        value={travellerInfo[0]?.departureFlightDate || ""}
                        onChange={handleFlightInfoChange}
                        className="border rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Departure Flight Time</label>
                      <TimePicker
                        name="departureFlightTime"
                        onChange={(value) =>
                          handleFlightInfoChange({
                            target: { name: "departureFlightTime", value },
                          })
                        }
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

          {/* Right section */}
          <div className="w-full lg:w-1/3">
            <Summary
              dateRange={dateRange}
              selectedPackages={selectedPackages}
              selectedRooms={selectedRooms}
              totalPrice={totalPrice}
              addons={selectedAddons}
            />
            <Link
              to={isFormValid ? "/information" : "#"}
              onClick={(e) => {
                if (!isFormValid) {
                  e.preventDefault();
                  alert("Please fill in all required flight information.");
                }
              }}
              className={`block mt-6`}
            >
              <div
                className={`text-center py-3 rounded-lg font-semibold flex justify-center items-center space-x-2 ${
                  isFormValid
                    ? "bg-[#00afef] text-white hover:bg-[#0a67a9]"
                    : "bg-gray-300 text-gray-600 pointer-events-none"
                }`}
              >
                <span>Traveller Details</span>
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

export default Addon;
