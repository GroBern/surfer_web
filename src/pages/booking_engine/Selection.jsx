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
  const [dateRange] = useState(() => {
    const storedDateRange = localStorage.getItem("dateRange");
    try { return storedDateRange ? JSON.parse(storedDateRange) : null; } catch { return null; }
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [selectedPackages] = useState(() => {
    const storedPackages = localStorage.getItem("selectedPackages");
    try { return storedPackages ? JSON.parse(storedPackages) : []; } catch { return []; }
  });
  const [selectedRooms] = useState(() => {
    const stored = localStorage.getItem("selectedRooms");
    try { return stored ? JSON.parse(stored) : []; } catch { return []; }
  });

  const [totalPrice, setTotalPrice] = useState(() => {
    const storedPrice = localStorage.getItem("totalPrice");
    try { return storedPrice ? JSON.parse(storedPrice) : 0; } catch { return 0; }
  });

  const [travellerInfo, setTravellerInfo] = useState(() => {
    const storedInfo = localStorage.getItem("travellerInfo");
    try { return storedInfo ? JSON.parse(storedInfo) : []; } catch { return []; }
  });

  const [peakCharge] = useState(() => {
    const stored = localStorage.getItem("peakCharge");
    try { return stored ? JSON.parse(stored) : false; } catch { return false; }
  });

  const [availablePackages, setAvailablePackages] = useState([]);

  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) setSelectedCamp(storedCamp);
    const s = localStorage.getItem("selectedStartDate");
    const e = localStorage.getItem("selectedEndDate");
    if (s) setStartDate(s);
    if (e) setEndDate(e);
  }, []);


  // Initialize traveller info from selections (or reuse valid saved data)

  useEffect(() => {
    localStorage.removeItem("addons");

    if (selectedPackages.length > 0 && selectedRooms.length > 0) {
      const storedInfo = localStorage.getItem("travellerInfo");
      if (storedInfo) {
        try {

          const parsed = JSON.parse(storedInfo);
          const valid =
            Array.isArray(parsed) &&
            parsed.every(
              (p) =>
                p &&
                typeof p === "object" &&
                "room" in p &&
                "package" in p &&
                "firstName" in p &&
                "lastName" in p
            );
          if (valid) {
            setTravellerInfo(parsed);
            // also rebuild availability from selectedPackages in case of reload
            setAvailablePackages(buildAvailablePackageArray(selectedPackages));
            return;
          }
        } catch {}

      }
      initializeTravellerInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPackages, selectedRooms]);


  const buildAvailablePackageArray = (packagesList) => {
    const counts = {};
    packagesList.forEach((pkgStr) => {
      const [countStr, ...titleParts] = pkgStr.split(" x ");
      const title = titleParts.join(" x ");
      const count = parseInt(countStr, 10) || 0;
      counts[title] = (counts[title] || 0) + count;

  
    });
    return Object.entries(counts).flatMap(([pkg, count]) => Array(count).fill(pkg));
  };

  const initializeTravellerInfo = () => {
    const newAvailable = buildAvailablePackageArray(selectedPackages);
    setAvailablePackages(newAvailable);

    const newTravellerInfo = selectedRooms.flatMap((roomStr) => {

      const [roomCountStr, ...roomParts] = roomStr.split(" x ");
      const roomType = roomParts.join(" x ");
      const capacity = getRoomCapacity(roomType);
      const roomCount = parseInt(roomCountStr, 10) || 0;

      return Array(roomCount)

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

  };

  const getRoomCapacity = (roomType) => {
    if (roomType.includes("Triple")) return 3;
    if (roomType.includes("Double")) return 2;
    return 1;
  };

  const handleNameChange = (index, field, value) => {
    setTravellerInfo((prev) => {
      const next = [...prev];
      next[index][field] = value;
      return next;
    });
  };


  // Price calculation (re-run when inputs that affect price change)
  useEffect(() => {
    if (!selectedCamp || travellerInfo.length === 0 || !startDate || !endDate) return;

    let subtotal = 0;
    travellerInfo.forEach((person) => {
      if (person.package) {
        const base = packagePrices[selectedCamp]?.[person.package]?.[person.room] || 0;
        const peakFee =
          peakCharge ? (person.room.includes("Dorm") ? 100 : 150) : 0;
        subtotal += base + peakFee;
      }
    });

    const nights = Math.max(
      1,
      Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))
    );

    const total = subtotal * nights;
    setTotalPrice(total);
    localStorage.setItem("totalPrice", JSON.stringify(total));
  }, [selectedCamp, travellerInfo, peakCharge, startDate, endDate]);

  // Persist traveller info

  useEffect(() => {
    if (travellerInfo.length > 0) {
      localStorage.setItem("travellerInfo", JSON.stringify(travellerInfo));
    }
  }, [travellerInfo]);

  const handlePackageChange = (index, pkg) => {

    setTravellerInfo((prev) => {
      const next = [...prev];
      const previousPkg = next[index].package;
      next[index].package = pkg;

      setAvailablePackages((availPrev) => {
        const availNext = [...availPrev];
        if (previousPkg) availNext.push(previousPkg);
        const i = availNext.indexOf(pkg);
        if (i !== -1) availNext.splice(i, 1);
        return availNext;
      });

      return next;
    });
  };

  const getAvailablePackageOptions = (current) => {
    const counts = {};
    availablePackages.forEach((p) => (counts[p] = (counts[p] || 0) + 1));
    if (current) counts[current] = (counts[current] || 0) + 1;

    return Object.entries(counts).map(([pkg, count]) => ({
      pkg,
      count,
      disabled: count <= 0 && pkg !== current,

    }));
  };

  const allFieldsFilled = travellerInfo.every(

    (p) => p.package && p.firstName && p.lastName
  );

  // Group travellers by room (to show per-room cards)
  const groupedTravellers = travellerInfo.reduce((acc, person) => {
    const last = acc[acc.length - 1];
    if (
      last &&
      last[0].room === person.room &&
      last.length < getRoomCapacity(person.room)
    ) {
      last.push(person);

    } else {
      acc.push([person]);
    }
    return acc;
  }, []);

  return (
    <>
      <BookingNavbar />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          Match Packages to Rooms
        </h3>

        <div className="mt-1 text-sm text-gray-600">
          Assign a package and names to each person in every room.
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Left: assignments */}
          <div className="lg:col-span-2">
            {/* Table headers (hidden on mobile) */}
            <div className="hidden sm:grid grid-cols-12 gap-3 px-2 py-2 text-xs font-semibold text-gray-600">
              <div className="col-span-4">Room / Person</div>
              <div className="col-span-4">Package</div>
              <div className="col-span-4">Name</div>
            </div>

            <div className="space-y-5">
              {groupedTravellers.map((roomGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">
                      {roomGroup[0].room.replace(" Per Person", "")}

                    </div>
                    <div className="text-xs text-gray-500">
                      Capacity: {getRoomCapacity(roomGroup[0].room)}
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {roomGroup.map((person, personIndex) => {
                      const globalIndex = travellerInfo.indexOf(person);
                      const pkgOptions = getAvailablePackageOptions(person.package);

                      return (
                        <div
                          key={personIndex}
                          className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-3"
                        >
                          {/* Person label */}
                          <div className="sm:col-span-4">
                            <div className="text-xs text-gray-500 sm:hidden mb-1">
                              Room / Person
                            </div>
                            <div className="inline-flex h-8 items-center rounded-full bg-gray-100 px-3 text-sm font-medium text-gray-700">
                              Person {personIndex + 1}
                            </div>
                          </div>

                          {/* Package select */}
                          <div className="sm:col-span-4">
                            <div className="text-xs text-gray-500 sm:hidden mb-1">
                              Package
                            </div>
                            <select
                              value={person.package}
                              onChange={(e) =>
                                handlePackageChange(globalIndex, e.target.value)
                              }
                              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                            >
                              <option value="">Select Package</option>
                              {pkgOptions.map((opt, i) => (
                                <option
                                  key={i}
                                  value={opt.pkg}
                                  disabled={opt.disabled}
                                >
                                  {opt.pkg}
                                  {opt.count > 0 ? ` (${opt.count} available)` : ""}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Names */}
                          <div className="sm:col-span-4">
                            <div className="text-xs text-gray-500 sm:hidden mb-1">
                              Name
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <input
                                type="text"
                                value={person.firstName}
                                onChange={(e) =>
                                  handleNameChange(globalIndex, "firstName", e.target.value)
                                }
                                placeholder="First Name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              />
                              <input
                                type="text"
                                value={person.lastName}
                                onChange={(e) =>
                                  handleNameChange(globalIndex, "lastName", e.target.value)
                                }
                                placeholder="Last Name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: summary + CTA */}
          <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
              <Summary
                dateRange={dateRange}
                selectedPackages={selectedPackages}
                selectedRooms={selectedRooms}
                totalPrice={totalPrice}
              />
            </div>

            <Link
              to={allFieldsFilled ? "/air-port" : "#"}
              onClick={(e) => { if (!allFieldsFilled) e.preventDefault(); }}
              className="block"
              aria-disabled={!allFieldsFilled}
            >
              <div
                className={[
                  "grid h-12 sm:h-14 w-full place-items-center rounded-lg text-base font-semibold transition",
                  allFieldsFilled
                    ? "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700"
                    : "cursor-not-allowed bg-gray-300 text-gray-600"
                ].join(" ")}
              >
                Add-on Selection <FontAwesomeIcon className="ml-2" icon={faArrowRight} />

              </div>
            </Link>
          </aside>
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default Selection;
