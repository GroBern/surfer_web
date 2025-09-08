import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Summary from "../../components/booking_engine/Summary";
import { Link } from "react-router-dom";
import BookingNavbar from '../../components/booking_engine/BookingNavbar';
import BookingFooter from '../../components/booking_engine/BookingFooter';

const roomsData = [
  { id: 1, title: "Dorm Bed", people: 1, image: "booking_engine/dorm.jpg", images: ["booking_engine/room1.jpg"], details: "A bed in a mixed dormitory. Shared room, maximum 5 people." },
  { id: 2, title: "Private Single Room", people: 1, image: "booking_engine/single.jpg", images: ["booking_engine/room4.jpg"], details: "Private single room with private bathroom." },
  { id: 3, title: "Private Double Room Per Person", people: 2, image: "booking_engine/double.jpg", images: ["booking_engine/room2.jpg"], details: "Private double room with private bathroom. Price will be shown for 2 people" },
  { id: 4, title: "Private Triple Room Per Person", people: 3, image: "booking_engine/triple.jpg", images: ["booking_engine/room3.jpg"], details: "Private triple room with private bathroom. Price will be shown for 3 people" },
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
      return roomStrings.map((entry) => {
        const [countStr, ...titleParts] = entry.split(" x ");
        const title = titleParts.join(" x ");
        const room = roomsData.find((r) => r.title === title.trim());
        return room ? { id: room.id, count: parseInt(countStr) } : null;
      }).filter(Boolean);
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
      const room = roomsData.find(room => room.id === r.id);
      return total + r.count * (room?.people || 0);
    }, 0);
  };

  const updateRoomCount = (roomId, increment) => {
    const updated = [...selectedRooms];
    const room = roomsData.find(r => r.id === roomId);
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

  // Check if user has selected the exact number of rooms needed
  const hasSelectedCorrectRooms = getRoomCount() === peopleCount && peopleCount > 0;

  return (
    <>
      <BookingNavbar />
      <div className="room-container">
        <div className="package-selector">
          <label>
            Number of People:{" "}
          </label>
          <div style={{ marginTop: "15px" }}>
            <button
              onClick={() => handlePeopleCountChange(false)}
              disabled={peopleCount <= 0}
              className="amount-button"
              style={{
                backgroundColor: peopleCount <= 0 ? "gainsboro" : "#00afef",
                color: peopleCount <= 0 ? "black" : "white",
                cursor: peopleCount <= 0 ? "not-allowed" : "pointer"
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="number"
              className="count-box"
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
              className="amount-button"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {peopleCount > 0 && (
          <>
            <h3>Select Your Room Type</h3>
            <p>Choose room combinations based on your group size.</p>
          </>
        )}

        <div className="room-box">
          <div className="left-section">
            <div className="room-list">
              {displayedRooms.map((room) => {
                const selected = selectedRooms.find((r) => r.id === room.id);
                const count = selected ? selected.count : 0;
                const isSelected = count > 0;
                const shouldGrayOut = hasSelectedCorrectRooms && !isSelected;

                return (
                  <div key={room.id}>
                    <div
                      className="room-card"
                      style={{
                        filter: shouldGrayOut ? "grayscale(100%)" : "none",
                        opacity: shouldGrayOut ? 0.7 : 1,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <img
                        className="room-image"
                        src={room.image}
                        alt={room.title}
                        style={{
                          filter: shouldGrayOut ? "grayscale(100%)" : "none"
                        }}
                      />
                      <div className="room-details">
                        <h4>{room.title}</h4>
                        <p>{room.details}</p>
                        {room.notice && <p style={{ color: "red" }}>{room.notice}</p>}
                        <div className="room-actions">
                          <p>Capacity: {room.people} people</p>
                          <div className="counter">
                            <button
                              onClick={() => updateRoomCount(room.id, false)}
                              disabled={count === 0}
                              style={{
                                marginRight: "10px",
                                backgroundColor: count === 0 ? "gainsboro" : "#00afef",
                                cursor: count === 0 ? "auto" : "pointer",
                                color: count === 0 ? "black" : "white",
                              }}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            {count}
                            <button
                              onClick={() => updateRoomCount(room.id, true)}
                              disabled={!canIncrement(room) || shouldGrayOut}
                              style={{
                                marginLeft: "10px",
                                backgroundColor: canIncrement(room) && !shouldGrayOut ? "#00afef" : "gainsboro",
                                cursor: canIncrement(room) && !shouldGrayOut ? "pointer" : "auto",
                                color: canIncrement(room) && !shouldGrayOut ? "white" : "black",
                              }}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="right-section">
            <Summary
              dateRange={localStorage.getItem("dateRange")}
              selectedRooms={selectedRooms.map(r => {
                const room = roomsData.find(room => room.id === r.id);
                return `${r.count} x ${room.title}`;
              })}
            />
            <Link
              to="/package"
              className={hasSelectedCorrectRooms ? `next-button` : `disabled-link`}
            >
              <div
                className="next-button"
                style={hasSelectedCorrectRooms ? {} : { backgroundColor: "gainsboro" }}
              >
                Package Selection <FontAwesomeIcon icon={faArrowRight} />
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