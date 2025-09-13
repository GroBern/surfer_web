import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const packagePrices = {
  "The Surfer Beach Camp": {
    "Moderate Surf Lesson Package": {
      "Dorm Bed": 56,
      "Private Double Room Per Person": 70,
      "Private Triple Room Per Person": 65,
      "Private Single Room": 99,
    },
    "Full Surf Lesson Package": {
      "Dorm Bed": 70,
      "Private Double Room Per Person": 85,
      "Private Triple Room Per Person": 79,
      "Private Single Room": 113,
    },
    "Surf & Yoga Package": {
      "Dorm Bed": 65,
      "Private Double Room Per Person": 79,
      "Private Triple Room Per Person": 72,
      "Private Single Room": 108,
    },
  },
  "TS2 Surf Camp": {
    "Moderate Surf Lesson Package": {
      "Dorm Bed": 42,
      "Private Double Room Per Person": 42,
      "Private Triple Room Per Person": 42,
      "Private Single Room": 56,
    },
    "Full Surf Lesson Package": {
      "Dorm Bed": 56,
      "Private Double Room Per Person": 56,
      "Private Triple Room Per Person": 56,
      "Private Single Room": 70,
    },
    "Surf & Yoga Package": {
      "Dorm Bed": 50,
      "Private Double Room Per Person": 50,
      "Private Triple Room Per Person": 50,
      "Private Single Room": 65,
    },
  },
};

const Selection = () => {
  const [selectedCamp, setSelectedCamp] = useState("");
  const [dateRange, setDateRange] = useState(() => {
    const storedDateRange = localStorage.getItem("dateRange");
    return storedDateRange ? JSON.parse(storedDateRange) : null;
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedPackages, setSelectedPackages] = useState(() => {
    const storedPackages = localStorage.getItem("selectedPackages");
    return storedPackages ? JSON.parse(storedPackages) : [];
  });
  const [selectedRooms, setSelectedRooms] = useState(() => {
    const stored = localStorage.getItem("selectedRooms");
    return stored ? JSON.parse(stored) : [];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    const storedPrice = localStorage.getItem("totalPrice");
    return storedPrice ? JSON.parse(storedPrice) : 0;
  });
  const [travellerInfo, setTravellerInfo] = useState(() => {
    const storedInfo = localStorage.getItem("travellerInfo");
    return storedInfo ? JSON.parse(storedInfo) : [];
  });
  const [peakCharge, setPeakCharge] = useState(() => {
    const stored = localStorage.getItem("peakCharge");
    return stored ? JSON.parse(stored) : false;
  });
  const [availablePackages, setAvailablePackages] = useState([]);

  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) setSelectedCamp(storedCamp);

    const storedStartDate = localStorage.getItem("selectedStartDate");
    if (storedStartDate) setStartDate(storedStartDate);
    const storedEndDate = localStorage.getItem("selectedEndDate");
    if (storedEndDate) setEndDate(storedEndDate);
  }, []);

  useEffect(() => {
    localStorage.removeItem("addons");
    if (selectedPackages.length > 0 && selectedRooms.length > 0) {
      const storedInfo = localStorage.getItem("travellerInfo");
      if (storedInfo) {
        try {
          const parsedInfo = JSON.parse(storedInfo);
          if (
            Array.isArray(parsedInfo) &&
            parsedInfo.every(
              (item) =>
                item &&
                typeof item === "object" &&
                "room" in item &&
                "package" in item &&
                "firstName" in item &&
                "lastName" in item
            )
          ) {
            setTravellerInfo(parsedInfo);
            return;
          }
        } catch (e) {
          console.error("Error parsing travellerInfo", e);
        }
      }
      initializeTravellerInfo();
    }
  }, [selectedPackages, selectedRooms]);

  const initializeTravellerInfo = () => {
    const packageCounts = {};
    selectedPackages.forEach((pkgStr) => {
      const [count, ...pkgTitleParts] = pkgStr.split(" x ");
      const pkgTitle = pkgTitleParts.join(" x ");
      packageCounts[pkgTitle] =
        (packageCounts[pkgTitle] || 0) + parseInt(count);
    });

    const newTravellerInfo = selectedRooms.flatMap((roomStr) => {
      const [roomCount, ...roomParts] = roomStr.split(" x ");
      const roomType = roomParts.join(" x ");
      const capacity = getRoomCapacity(roomType);

      return Array(parseInt(roomCount))
        .fill()
        .flatMap(() =>
          Array(capacity)
            .fill()
            .map(() => ({
              room: roomType,
              package: "",
              firstName: "",
              lastName: "",
            }))
        );
    });

    setTravellerInfo(newTravellerInfo);
    setAvailablePackages(
      Object.entries(packageCounts).flatMap(([pkg, count]) =>
        Array(count).fill(pkg)
      )
    );
  };

  const getRoomCapacity = (roomType) => {
    if (roomType.includes("Triple")) return 3;
    if (roomType.includes("Double")) return 2;
    return 1;
  };

  const handleNameChange = (index, field, value) => {
    const updatedInfo = [...travellerInfo];
    updatedInfo[index][field] = value;
    setTravellerInfo(updatedInfo);
  };

  useEffect(() => {
    if (selectedCamp && travellerInfo.length > 0) {
      let newTotal = 0;
      travellerInfo.forEach((person) => {
        if (person.package) {
          const basePrice =
            packagePrices[selectedCamp]?.[person.package]?.[person.room] || 0;
          let peakFee = 0;
          if (peakCharge) {
            peakFee = person.room.includes("Dorm") ? 100 : 150;
          }
          newTotal += basePrice + peakFee;
        }
      });
      const days = Math.ceil(
        (new Date(endDate) - new Date(startDate)) /
          (1000 * 60 * 60 * 24)
      );
      newTotal = newTotal * days;
      setTotalPrice(newTotal);
      localStorage.setItem("totalPrice", JSON.stringify(newTotal));
    }
  }, [selectedCamp, travellerInfo, peakCharge]);

  useEffect(() => {
    if (travellerInfo.length > 0) {
      localStorage.setItem("travellerInfo", JSON.stringify(travellerInfo));
    }
  }, [travellerInfo]);

  const handlePackageChange = (index, pkg) => {
    const updatedInfo = [...travellerInfo];
    const previousPkg = updatedInfo[index].package;
    updatedInfo[index].package = pkg;
    setTravellerInfo(updatedInfo);

    setAvailablePackages((prev) => {
      const newAvailable = [...prev];
      if (previousPkg) newAvailable.push(previousPkg);
      const pkgIndex = newAvailable.indexOf(pkg);
      if (pkgIndex !== -1) newAvailable.splice(pkgIndex, 1);
      return newAvailable;
    });
  };

  const getAvailablePackageOptions = (currentSelection) => {
    const counts = {};
    availablePackages.forEach((pkg) => {
      counts[pkg] = (counts[pkg] || 0) + 1;
    });
    if (currentSelection) {
      counts[currentSelection] = (counts[currentSelection] || 0) + 1;
    }
    return Object.entries(counts).map(([pkg, count]) => ({
      pkg,
      count,
      disabled: count <= 0 && pkg !== currentSelection,
    }));
  };

  const allFieldsFilled = travellerInfo.every(
    (person) => person.package && person.firstName && person.lastName
  );

  const groupedTravellers = travellerInfo.reduce((acc, person) => {
    const lastGroup = acc[acc.length - 1];
    if (
      lastGroup &&
      lastGroup[0].room === person.room &&
      lastGroup.length < getRoomCapacity(person.room)
    ) {
      lastGroup.push(person);
    } else {
      acc.push([person]);
    }
    return acc;
  }, []);

  return (
    <>
      <BookingNavbar />
      <div className="px-5 md:px-[10%] py-[10%] mb-[10%]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-xl font-semibold">Match Packages to Rooms</h3>

            <div className="flex justify-around gap-6 mt-10 mb-4 font-medium">
              <div>Room Type</div>
              <div>Package</div>
              <div>Name</div>
            </div>

            {groupedTravellers.map((roomGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="border border-black rounded-xl mb-10 p-6"
              >
                <div className="mb-3 font-bold px-5">
                  {roomGroup[0].room.replace(" Per Person", "")} (Capacity:{" "}
                  {getRoomCapacity(roomGroup[0].room)})
                </div>

                {roomGroup.map((person, personIndex) => {
                  const globalIndex = travellerInfo.indexOf(person);
                  return (
                    <div
                      key={personIndex}
                      className="flex items-center justify-evenly border-t border-gray-300 py-5"
                    >
                      <div>Person {personIndex + 1}</div>

                      <select
                        value={person.package}
                        onChange={(e) =>
                          handlePackageChange(globalIndex, e.target.value)
                        }
                        className="px-3 py-2 border border-gray-300 rounded-md bg-white"
                      >
                        <option value="">Select Package</option>
                        {getAvailablePackageOptions(person.package).map(
                          (option, i) => (
                            <option
                              key={i}
                              value={option.pkg}
                              disabled={option.disabled}
                            >
                              {option.pkg}{" "}
                              {option.count > 0 &&
                                `(${option.count} available)`}
                            </option>
                          )
                        )}
                      </select>

                      <div className="grid gap-4">
                        <input
                          type="text"
                          value={person.firstName}
                          onChange={(e) =>
                            handleNameChange(
                              globalIndex,
                              "firstName",
                              e.target.value
                            )
                          }
                          placeholder="First Name"
                          className="px-3 py-2 border border-gray-300 rounded-md"
                        />

                        <input
                          type="text"
                          value={person.lastName}
                          onChange={(e) =>
                            handleNameChange(
                              globalIndex,
                              "lastName",
                              e.target.value
                            )
                          }
                          placeholder="Last Name"
                          className="px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3">
            <Summary
              dateRange={dateRange}
              selectedPackages={selectedPackages}
              selectedRooms={selectedRooms}
              totalPrice={totalPrice}
            />
            <Link
              to="/air-port"
              className={`block mt-6 ${
                allFieldsFilled ? "" : "pointer-events-none"
              }`}
            >
              <div
                className={`flex justify-center items-center space-x-2 text-center py-3 rounded-lg font-semibold transition ${
                  allFieldsFilled
                    ? "bg-[#00afef] text-white hover:bg-[#0a67a9]"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                <span>Add-on Selection</span>
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

export default Selection;
