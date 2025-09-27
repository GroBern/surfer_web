import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

/** PER-DAY rates (from your sheet) */
const packagePrices = {
  "The Surfer Beach Camp": {
    "Full Surf Lesson Package": {
      "Dorm Bed": 70.0,
      "Private Single Room": 112.86,
      "Private Double Room Per Person": 84.29,
      "Private Triple Room Per Person": 78.57,
    },
    "Moderate Surf Lesson Package": {
      "Dorm Bed": 55.71,
      "Private Single Room": 98.57,
      "Private Double Room Per Person": 70.0,
      "Private Triple Room Per Person": 64.29,
    },
    "Surf & Yoga Package": {
      "Dorm Bed": 64.29,
      "Private Single Room": 107.14,
      "Private Double Room Per Person": 78.57,
      "Private Triple Room Per Person": 71.43,
    },
  },
  "TS2 Surf Camp": {
    "Full Surf Lesson Package": {
      "Dorm Bed": 55.71,
      "Private Single Room": 70.0,
      "Private Double Room Per Person": 55.71,
      "Private Triple Room Per Person": 55.71,
    },
    "Moderate Surf Lesson Package": {
      "Dorm Bed": 41.43,
      "Private Single Room": 55.71,
      "Private Double Room Per Person": 41.43,
      "Private Triple Room Per Person": 41.43,
    },
    "Surf & Yoga Package": {
      "Dorm Bed": 50.0,
      "Private Single Room": 64.29,
      "Private Double Room Per Person": 50.0,
      "Private Triple Room Per Person": 50.0,
    },
  },
  "The Surfer SurfStyle Camp": {
    "Full Surf Lesson Package": {
      "Shared Room": 83.0,
      "Single Room": 108.0,
      "Double Room": 85.0,
      // "Private Double Room With Balcony": 90.0, // not available
    },
    "Moderate Surf Lesson Package": {
      "Shared Room": 80.0,
      "Single Room": 100.0,
      "Double Room": 83.0,
      // "Private Double Room With Balcony": 75.0, // not available
    },
    "Surf & Yoga Package": {
      "Shared Room": 99.0,
      "Single Room": 115.0,
      "Double Room": 100.0,
      // "Private Double Room With Balcony": 85.0, // not available
    },
  },
};

/** PER-WEEK (per person) rates (from your sheet) */
const weeklyPrices = {
  "The Surfer Beach Camp": {
    "Full Surf Lesson Package": {
      "Dorm Bed": 490,
      "Private Single Room": 790,
      "Private Double Room Per Person": 590,
      "Private Triple Room Per Person": 550,
    },
    "Moderate Surf Lesson Package": {
      "Dorm Bed": 390,
      "Private Single Room": 690,
      "Private Double Room Per Person": 490,
      "Private Triple Room Per Person": 450,
    },
    "Surf & Yoga Package": {
      "Dorm Bed": 450,
      "Private Single Room": 750,
      "Private Double Room Per Person": 550,
      "Private Triple Room Per Person": 500,
    },
  },
  "TS2 Surf Camp": {
    "Full Surf Lesson Package": {
      "Dorm Bed": 390,
      "Private Single Room": 490,
      "Private Double Room Per Person": 390,
      "Private Triple Room Per Person": 390,
    },
    "Moderate Surf Lesson Package": {
      "Dorm Bed": 290,
      "Private Single Room": 390,
      "Private Double Room Per Person": 290,
      "Private Triple Room Per Person": 290,
    },
    "Surf & Yoga Package": {
      "Dorm Bed": 350,
      "Private Single Room": 450,
      "Private Double Room Per Person": 350,
      "Private Triple Room Per Person": 350,
    },
  },
  "The Surfer SurfStyle Camp": {
    "Full Surf Lesson Package": {
      "Shared Room": 510.0,
      "Single Room": 750.0,
      "Double Room": 510.0,
      // "Private Double Room With Balcony": 90.0, // not available
    },
    "Moderate Surf Lesson Package": {
      "Shared Room": 480.0,
      "Single Room": 700.0,
      "Double Room": 490.0,
      // "Private Double Room With Balcony": 75.0, // not available
    },
    "Surf & Yoga Package": {
      "Shared Room": 598.0,
      "Single Room": 800.0,
      "Double Room": 600.0,
      // "Private Double Room With Balcony": 85.0, // not available
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

  // Optional: exact weeks the user explicitly picked earlier
  const [weeksSelected] = useState(() => {
    const raw = localStorage.getItem("selectedWeeks");
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : null;
  });

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

  /** Helper: compute NIGHTS and whether the range is whole weeks (7,14,…) */
  const getNightsAndWeeksFromDates = (start, end) => {
    if (!start || !end) return { nights: null, weeksFromDates: null };
    const a = new Date(start);
    const b = new Date(end);
    // normalize to noon to avoid DST/midnight issues
    a.setHours(12, 0, 0, 0);
    b.setHours(12, 0, 0, 0);
    const MS = 1000 * 60 * 60 * 24;
    const nights = Math.max(1, Math.round((b - a) / MS));
    // pricing now uses NIGHTS, and 7 nights = 1 week
    const weeksFromDates = nights % 7 === 0 ? nights / 7 : null;
    return { nights, weeksFromDates };
  };

  // Price calculation (weekly when exact weeks; otherwise per-night) + ROUND UP for non-week mode
  useEffect(() => {
    if (!selectedCamp || travellerInfo.length === 0) return;

    let basePerDayTotal = 0;   // per-night prices (sheet)
    let basePerWeekTotal = 0;  // per-week prices (sheet)
    let peakPerDayTotal = 0;   // peak per night

    travellerInfo.forEach((person) => {
      if (!person.package) return;

      const dayBase =
        packagePrices[selectedCamp]?.[person.package]?.[person.room] || 0;

      const weekBase =
        weeklyPrices[selectedCamp]?.[person.package]?.[person.room] ??
        dayBase * 7;

      const peakFeePerDay =
        peakCharge ? (person.room.includes("Dorm") ? 100 : 150) : 0;

      basePerDayTotal += dayBase;
      basePerWeekTotal += weekBase;
      peakPerDayTotal += peakFeePerDay;
    });

    const { nights, weeksFromDates } = getNightsAndWeeksFromDates(startDate, endDate);
    const effectiveWeeks = weeksSelected ?? weeksFromDates;

    let total = 0;

    if (effectiveWeeks) {
      const nightsInWeeks = effectiveWeeks * 7;
      // exact whole weeks → weekly price × weeks + peak per night × nights
      total = basePerWeekTotal * effectiveWeeks + peakPerDayTotal * nightsInWeeks;
      // weekly totals are already whole numbers; no rounding needed
    } else {
      if (!nights) return;
      // non-exact weeks → per-night price × nights + peak per night × nights
      total = (basePerDayTotal + peakPerDayTotal) * nights;
      // BUSINESS RULE: always round up (ceil) for non-week stays
      total = Math.ceil(total);
    }

    setTotalPrice(total);
    localStorage.setItem("totalPrice", JSON.stringify(total));
  }, [selectedCamp, travellerInfo, peakCharge, startDate, endDate, weeksSelected]);

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
      last.length < getRoomCapacity(last[0].room)
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
