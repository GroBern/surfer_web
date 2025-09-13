import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
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
    const storedCount = localStorage.getItem("peopleCount");
    return storedCount ? parseInt(storedCount) : 0;
  });
  const [viewRoomId, setViewRoomId] = useState(null);
  const [peakCharge, setPeakCharge] = useState(() => {
    const stored = localStorage.getItem("peakCharge");
    return stored ? JSON.parse(stored) : false;
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
    } catch (err) {
      console.error("Error parsing selected rooms from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("peopleCount", peopleCount.toString());
    const readableRooms = selectedRooms.map((r) => {
      const room = roomsData.find((room) => room.id === r.id);
      return `${r.count} x ${room.title}`;
    });
    localStorage.setItem("selectedRooms", JSON.stringify(readableRooms));
  }, [peopleCount, selectedRooms]);

  const handlePeopleCountChange = (increment) => {
    const newCount = increment ? peopleCount + 1 : Math.max(0, peopleCount - 1);
    setPeopleCount(newCount);
    if (newCount === 0) {
      setSelectedRooms([]);
    } else if (getRoomCount() > newCount) {
      setSelectedRooms([]);
    }
  };

  const toggleRoomDetails = (roomId) => {
    setViewRoomId((prevId) => (prevId === roomId ? null : roomId));
  };

  const getRoomCount = () => {
    return selectedRooms.reduce((total, r) => {
      const room = roomsData.find((room) => room.id === r.id);
      return total + r.count * (room?.people || 0);
    }, 0);
  };

  const updateRoomCount = (roomId, increment) => {
    const updated = [...selectedRooms];
    const room = roomsData.find((r) => r.id === roomId);
    const idx = updated.findIndex((r) => r.id === roomId);
    const currentCount = idx !== -1 ? updated[idx].count : 0;
    const newCount = increment ? currentCount + 1 : currentCount - 1;

    if (increment && getRoomCount() + room.people > peopleCount) return;

    if (idx !== -1) {
      if (newCount <= 0) updated.splice(idx, 1);
      else updated[idx].count = newCount;
    } else {
      updated.push({ id: roomId, count: 1 });
    }

    setSelectedRooms(updated);
  };

  const canIncrement = (room) => getRoomCount() + room.people <= peopleCount;

  const displayedRooms = roomsData.filter((room) => {
    if (peopleCount === 0) return false;
    if (peopleCount === 1) return room.people === 1;
    if (peopleCount === 2) return room.people <= 2;
    return true;
  });

  const hasSelectedCorrectRooms = getRoomCount() === peopleCount && peopleCount > 0;

  return (
    <>
      <BookingNavbar />
      <div className="px-5 md:px-[10%] py-[10%] mb-[10%]">
        <div className="text-center mb-10">
          <label className="text-xl font-bold">Number of People:</label>
          <div className="mt-4 flex justify-center items-center space-x-3">
            <button
              onClick={() => handlePeopleCountChange(false)}
              disabled={peopleCount <= 0}
              className={`rounded-full px-3 py-2 ${
                peopleCount <= 0
                  ? "bg-gray-300 text-black cursor-not-allowed"
                  : "bg-[#00afef] text-white"
              }`}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="number"
              className="w-16 text-center border border-gray-300 rounded-md"
              min="0"
              value={peopleCount}
              onChange={(e) => {
                const newCount = Number(e.target.value);
                setPeopleCount(newCount);
                if (newCount === 0) {
                  setSelectedRooms([]);
                } else if (getRoomCount() > newCount) {
                  setSelectedRooms([]);
                }
              }}
            />
            <button
              onClick={() => handlePeopleCountChange(true)}
              className="rounded-full px-3 py-2 bg-[#00afef] text-white"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {peopleCount > 0 && (
          <>
            <h3 className="text-lg font-semibold">Select Your Room Type</h3>
            <p className="mb-6">Choose room combinations based on your group size.</p>
          </>
        )}

        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            {displayedRooms.map((room) => {
              const selected = selectedRooms.find((r) => r.id === room.id);
              const count = selected ? selected.count : 0;
              const isSelected = count > 0;
              const shouldGrayOut = hasSelectedCorrectRooms && !isSelected;

              return (
                <div
                  key={room.id}
                  className={`border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-md mx-auto transition duration-300 ${
                    shouldGrayOut ? "grayscale opacity-70" : ""
                  }`}
                >
                  <img
                    className="w-full object-cover rounded-md"
                    src={room.image}
                    alt={room.title}
                  />
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-bold">{room.title}</h4>
                    <p className="text-sm">{room.details}</p>
                    {room.notice && <p className="text-red-500">{room.notice}</p>}
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-sm">Capacity: {room.people} people</p>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateRoomCount(room.id, false)}
                          disabled={count === 0}
                          className={`px-3 py-2 rounded-full ${
                            count === 0
                              ? "bg-gray-300 text-black cursor-not-allowed"
                              : "bg-[#00afef] text-white"
                          }`}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span>{count}</span>
                        <button
                          onClick={() => updateRoomCount(room.id, true)}
                          disabled={!canIncrement(room) || shouldGrayOut}
                          className={`px-3 py-2 rounded-full ${
                            canIncrement(room) && !shouldGrayOut
                              ? "bg-[#00afef] text-white"
                              : "bg-gray-300 text-black cursor-not-allowed"
                          }`}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-1/3">
            <Summary
              dateRange={localStorage.getItem("dateRange")}
              selectedRooms={selectedRooms.map((r) => {
                const room = roomsData.find((room) => room.id === r.id);
                return `${r.count} x ${room.title}`;
              })}
            />
            <Link
              to="/package"
              className={`block mt-6 ${hasSelectedCorrectRooms ? "" : "pointer-events-none"}`}
            >
              <div
                className={`text-center py-3 rounded-lg font-semibold flex justify-center items-center space-x-2 ${
                  hasSelectedCorrectRooms
                    ? "bg-[#00afef] text-white hover:bg-[#0a67a9]"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                <span>Package Selection</span>
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

export default RoomPage;
