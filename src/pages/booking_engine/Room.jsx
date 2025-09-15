import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Summary from "../../components/booking_engine/Summary";
import { Link } from "react-router-dom";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const roomsData = [
  { id: 1, title: "Dorm Bed", people: 1, image: "booking_engine/dorm.jpg", images: ["booking_engine/room1.jpg"], details: "A bed in a mixed dormitory. Shared room, maximum 5 people." },
  { id: 2, title: "Private Single Room", people: 1, image: "booking_engine/single.jpg", images: ["booking_engine/room4.jpg"], details: "Private single room with private bathroom." },
  { id: 3, title: "Private Double Room Per Person", people: 2, image: "booking_engine/double.jpg", images: ["booking_engine/room2.jpg"], details: "Private double room with private bathroom. Price will be shown for 2 people" },
  { id: 4, title: "Private Triple Room Per Person", people: 3, image: "booking_engine/triple.jpg", images: ["booking_engine/room3.jpg"], details: "Private triple room with private bathroom. Price will be shown for 3 people" },
];

const RoomPage = () => {
  const [peopleCount, setPeopleCount] = useState(() => {
    const stored = localStorage.getItem("peopleCount");
    return stored ? parseInt(stored) : 0;
  });
  const [selectedRooms, setSelectedRooms] = useState(() => {
    const stored = localStorage.getItem("selectedRooms");
    if (!stored) return [];
    try {
      const roomStrings = JSON.parse(stored);
      return roomStrings
        .map((entry) => {
          const [countStr, ...titleParts] = entry.split(" x ");
          const title = titleParts.join(" x ");
          const room = roomsData.find((r) => r.title === title.trim());
          return room ? { id: room.id, count: parseInt(countStr) } : null;
        })
        .filter(Boolean);
    } catch {
      return [];
    }
  });

  // persist people & room selection in a readable way
  useEffect(() => {
    localStorage.setItem("peopleCount", String(peopleCount));
    const readableRooms = selectedRooms.map((r) => {
      const room = roomsData.find((room) => room.id === r.id);
      return `${r.count} x ${room.title}`;
    });
    localStorage.setItem("selectedRooms", JSON.stringify(readableRooms));
  }, [peopleCount, selectedRooms]);

  const getFilledCapacity = () =>
    selectedRooms.reduce((acc, r) => {
      const room = roomsData.find((x) => x.id === r.id);
      return acc + r.count * (room?.people || 0);
    }, 0);

  const handlePeopleCountChange = (inc) => {
    const next = inc ? peopleCount + 1 : Math.max(0, peopleCount - 1);
    setPeopleCount(next);
    if (next === 0 || getFilledCapacity() > next) setSelectedRooms([]);
  };

  const updateRoomCount = (roomId, inc) => {
    const updated = [...selectedRooms];
    const room = roomsData.find((r) => r.id === roomId);
    const ix = updated.findIndex((r) => r.id === roomId);
    const cur = ix !== -1 ? updated[ix].count : 0;
    const next = inc ? cur + 1 : cur - 1;

    // prevent exceeding headcount
    if (inc && getFilledCapacity() + (room?.people || 0) > peopleCount) return;

    if (ix !== -1) {
      if (next <= 0) updated.splice(ix, 1);
      else updated[ix].count = next;
    } else if (inc) {
      updated.push({ id: roomId, count: 1 });
    }
    setSelectedRooms(updated);
  };

  const canIncrement = (room) => getFilledCapacity() + room.people <= peopleCount;

  const displayedRooms = roomsData.filter((room) => {
    if (peopleCount === 0) return false;
    if (peopleCount === 1) return room.people === 1;
    if (peopleCount === 2) return room.people <= 2;
    return true;
  });

  const selectionComplete = peopleCount > 0 && getFilledCapacity() === peopleCount;

  // parse dateRange so Summary won’t show quotes
  const parsedDateRange = (() => {
    const raw = localStorage.getItem("dateRange");
    try {
      return raw ? JSON.parse(raw) : "";
    } catch {
      return raw || "";
    }
  })();

  return (
    <>
      <BookingNavbar />

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        {/* People selector */}
        <h3 className="text-center text-xl font-semibold mb-1">Number of People:</h3>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handlePeopleCountChange(false)}
            disabled={peopleCount <= 0}
            aria-label="Decrease people"
            className={[
              "grid h-10 w-10 place-items-center rounded-full text-base font-semibold transition",
              peopleCount <= 0
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
            ].join(" ")}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <div className="min-w-[60px] h-10 px-3 grid place-items-center rounded-xl border-2 border-sky-500 text-base font-semibold">
            {peopleCount}
          </div>

          <button
            onClick={() => handlePeopleCountChange(true)}
            aria-label="Increase people"
            className="grid h-10 w-10 place-items-center rounded-full bg-sky-500 text-white text-base font-semibold transition hover:bg-sky-600 active:bg-sky-700"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {peopleCount > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Select Your Room Type</h4>
            <p className="text-sm text-gray-600">Choose room combinations based on your group size.</p>
          </div>
        )}

        {/* Main layout */}
        <div className="mt-5 grid gap-6 lg:grid-cols-3">
          {/* Rooms list */}
          <div className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {displayedRooms.map((room) => {
                const sel = selectedRooms.find((r) => r.id === room.id);
                const count = sel?.count || 0;
                const isSelected = count > 0;
                const shouldGray = selectionComplete && !isSelected;

                return (
                  <div
                    key={room.id}
                    className={[
                      "rounded-xl border border-gray-200 bg-white shadow-sm p-3 transition",
                      shouldGray ? "grayscale opacity-70" : "",
                    ].join(" ")}
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full aspect-[4/3] object-cover rounded-lg"
                    />

                    <div className="mt-3 text-center">
                      <h5 className="text-base font-semibold">{room.title}</h5>
                      <p className="mt-1 text-sm text-gray-700">{room.details}</p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm text-gray-700">Capacity: {room.people} people</p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateRoomCount(room.id, false)}
                          disabled={count === 0}
                          aria-label={`Remove ${room.title}`}
                          className={[
                            "grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition",
                            count === 0
                              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                              : "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
                          ].join(" ")}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        <span className="min-w-[1.25rem] text-base font-semibold text-gray-900 text-center">
                          {count}
                        </span>

                        <button
                          onClick={() => updateRoomCount(room.id, true)}
                          disabled={!canIncrement(room) || shouldGray}
                          aria-label={`Add ${room.title}`}
                          className={[
                            "grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition",
                            !canIncrement(room) || shouldGray
                              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                              : "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
                          ].join(" ")}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary + CTA */}
          <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
              <Summary
                dateRange={parsedDateRange}
                selectedRooms={selectedRooms.map((r) => {
                  const room = roomsData.find((x) => x.id === r.id);
                  return `${r.count} x ${room.title}`;
                })}
              />
            </div>

            {selectionComplete ? (
              <Link to="/package" className="block">
                <div className="grid h-12 sm:h-14 w-full place-items-center rounded-lg bg-sky-500 text-white text-base font-semibold transition hover:bg-sky-600 active:bg-sky-700">
                  Package Selection <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                </div>
              </Link>
            ) : (
              <div
                className="grid h-12 sm:h-14 w-full place-items-center rounded-lg bg-gray-300 text-gray-600 text-base font-semibold cursor-not-allowed"
                role="button"
                aria-disabled="true"
                tabIndex={-1}
                title="Add rooms to match the number of people"
              >
                Package Selection <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </div>
            )}
          </aside>
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default RoomPage;