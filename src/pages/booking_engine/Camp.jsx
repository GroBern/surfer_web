import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import BookingNavbar from '../../components/booking_engine/BookingNavbar';
import BookingFooter from '../../components/booking_engine/BookingFooter';

const Camp = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCamp, setSelectedCamp] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();

  const packageData = [
    {
      id: "1",
      title: "The Surfer Beach Camp",
      images: [
        "booking_engine/beach1.jpg",
        "booking_engine/beach2.jpg",
        "booking_engine/beach3.jpg",
      ],
      includes: [
        "THE SURFER BEACH – Main Surf Camp in Weligama, Sri Lanka",
        "Our flagship surf camp is located right next to Weligama’s top surfing beach and within walking distance of multiple surf breaks, perfect for all skill levels.",
        "Designed and run by surfers for surfers, the camp focuses on rapid progress using proven surfing techniques.",
        "It offers the full surf and yoga experience in a premium setting.",
        "On-site facilities include a dedicated yoga area, a swimming pool, and a restaurant—everything you need for an unforgettable surf getaway in Sri Lanka."
      ],
    },
    {
      id: "2",
      title: "TS2 Surf Camp",
      images: [
        "booking_engine/ts2-1.jpg",
        "booking_engine/ts2-2.jpg",
        "booking_engine/ts2-3.jpg",
      ],
      includes: [
        "TS2 WELIGAMA – Surf Camp in a Tranquil Setting",
        "TS2 Weligama is a serene surf camp just 100 meters from the beach, nestled in a lush green area and only 5 minutes from The Surfer Beach Camp.",
        "Guests at TS2 enjoy full access to all main camp amenities, including the restaurant, pool, daily surf and yoga lessons, and social events.",
        "It’s the perfect extension of our surf camp family for a memorable Sri Lankan surf and yoga experience.",
      ],
    },
  ];

  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) {
      setSelectedCamp(storedCamp);
    }
    localStorage.removeItem("selectedEndDate");
    localStorage.removeItem("selectedStartDate");
    localStorage.removeItem("dateRange");
    localStorage.removeItem("peakCharge");
    localStorage.removeItem("addons");
    localStorage.removeItem("amounts");
    localStorage.removeItem("peopleCount");
    localStorage.removeItem("selectedPackages");
    localStorage.removeItem("selectedRooms");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("travellerInfo");
    localStorage.removeItem("isSubmitted");

    // Initialize current image indexes
    const initialIndexes = {};
    packageData.forEach((pkg) => {
      initialIndexes[pkg.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, []);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleCampSelection = (title) => {
    localStorage.setItem("selectedCamp", title);
    setSelectedCamp(title);
    navigate("/date");
  };

  const nextImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] || 0;
      const camp = packageData.find((pkg) => pkg.id === id);
      const nextIndex = (currentIndex + 1) % camp.images.length;
      return { ...prev, [id]: nextIndex };
    });
  };

  const prevImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] || 0;
      const camp = packageData.find((pkg) => pkg.id === id);
      const prevIndex = (currentIndex - 1 + camp.images.length) % camp.images.length;
      return { ...prev, [id]: prevIndex };
    });
  };

  return (
    <>
      <BookingNavbar />
      <div className="home-container">
        <div className="camp-section">

          {/* Beach Camp */}
          <div className="camp-wrapper beach-camp">
            <div
              className="camp"
              style={{ backgroundImage: `url(${packageData[0].images[currentImageIndex["1"] || 0]})` }}
              onClick={() => handleCampSelection(packageData[0].title)}
            >
              <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={(e) => prevImage("1", e)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="carousel-btn next" onClick={(e) => nextImage("1", e)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="image-counter">
                {(currentImageIndex["1"] || 0) + 1} / {packageData[0].images.length}
              </div>
              <h3 className="camp-title">{packageData[0].title}</h3>
            </div>

            <button className="toggle-btn" onClick={() => toggleExpand("1")}>
              Camp Details {expanded === "1" ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>

            {expanded === "1" && (
              <div className="camp-details">
                {packageData[0].includes.map((item, index) => (
                  <div className="detail" key={index}>
                    <span className="detail-text">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TS2 Camp */}
          <div className="camp-wrapper ts2-camp">
            <div
              className="camp"
              style={{ backgroundImage: `url(${packageData[1].images[currentImageIndex["2"] || 0]})` }}
              onClick={() => handleCampSelection(packageData[1].title)}
            >
              <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={(e) => prevImage("2", e)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="carousel-btn next" onClick={(e) => nextImage("2", e)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="image-counter">
                {(currentImageIndex["2"] || 0) + 1} / {packageData[1].images.length}
              </div>
              <h3 className="camp-title">{packageData[1].title}</h3>
            </div>

            <button className="toggle-btn" onClick={() => toggleExpand("2")}>
              Camp Details {expanded === "2" ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>

            {expanded === "2" && (
              <div className="camp-details">
                {packageData[1].includes.map((item, index) => (
                  <div className="detail" key={index}>
                    <span className="detail-text">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <h2>Beach Camp vs. TS2 Camp: What's the Difference?</h2>
          <p>
            Main difference is the location and the room standard!<br />
            Beach camp located right next to the beach with swim pool, TS2 camp rooms
            are with Basic standard simple private rooms with Fan and hot water ensuite
            bathroom Beach camp rooms are Standard private rooms with air conditioning,
            ensuite bathroom and hot water! TS2 camp located 05 minutes ride away from
            the beach camp, even though you book TS2 Weligama , all your surf lessons,
            Yoga, dinner and all events will be taken place at the beach camp! 1000 rupees
            per day will be paid per room and per dormitory as a transport compensation to
            travel between the camps! You can basically spend all ur day at the beach
            camp and just go for sleep at TS2 camp!
          </p>
        </div>
        <div className="map-image">
          <img src="booking_engine/map.jpg" alt="camp map" />
        </div>
      </div>
      <BookingFooter />
    </>
  );
};

export default Camp;