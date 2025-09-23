import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const Camp = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCamp, setSelectedCamp] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
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
        "On-site facilities include a dedicated yoga area, a swimming pool, and a restaurant—everything you need for an unforgettable surf getaway in Sri Lanka.",
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
        "It’s the perfect extension of our surf camp family for a memorable Sri Lankan surf and yoga experience.",
      ],
    },
    {
      id: "3",
      title: "The Surfer SurfStyle Camp",
      images: [
        "/morocco/moro-1.jpg",
        "/morocco/moro-2.jpg",
        "/morocco/moro-3.jpg",
      ],
      includes: [
        "THE SURFER SURFSTYLE – Surf Camp in Taghazout, Morocco",
        "Our SurfStyle camp is located in the heart of Taghazout, Morocco’s premier surf destination, known for its consistent waves and vibrant surf culture.",
        "The camp offers a unique blend of traditional Moroccan hospitality and modern amenities, providing guests with an authentic yet comfortable experience.",
        "With direct access to some of the best surf spots in the area, including Anchor Point and Killer Point, surfers of all levels can enjoy world-class waves.",
        "On-site facilities include a rooftop terrace with ocean views, a communal lounge area, and a restaurant serving delicious local cuisine.",
      ],
    },
  ];

  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) setSelectedCamp(storedCamp);

    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) setSelectedCountry(storedCountry);

    [
      "selectedEndDate",
      "selectedStartDate",
      "dateRange",
      "peakCharge",
      "addons",
      "amounts",
      "peopleCount",
      "selectedPackages",
      "selectedRooms",
      "totalPrice",
      "travellerInfo",
      "isSubmitted",
    ].forEach((k) => localStorage.removeItem(k));

    const initial = {};
    packageData.forEach((pkg) => (initial[pkg.id] = 0));
    setCurrentImageIndex(initial);
  }, []);

  const toggleExpand = (id) => setExpanded(expanded === id ? null : id);

  const handleCampSelection = (title) => {
    localStorage.setItem("selectedCamp", title);
    setSelectedCamp(title);
    navigate("/date");
  };

  const handleCampKeyDown = (e, title) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCampSelection(title);
    }
  };

  const nextImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] ?? 0;
      const camp = packageData.find((pkg) => pkg.id === id);
      const nextIndex = (currentIndex + 1) % camp.images.length;
      return { ...prev, [id]: nextIndex };
    });
  };

  const prevImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] ?? 0;
      const camp = packageData.find((pkg) => pkg.id === id);
      const prevIndex = (currentIndex - 1 + camp.images.length) % camp.images.length;
      return { ...prev, [id]: prevIndex };
    });
  };

  const renderCamp = (pkg) => (
    <div key={pkg.id} className="camp-wrapper">
      <div
        className="camp"
        role="button"
        tabIndex={0}
        aria-label={`Select ${pkg.title}`}
        style={{
          backgroundImage: `url(${pkg.images[currentImageIndex[pkg.id] ?? 0]})`,
        }}
        onClick={() => handleCampSelection(pkg.title)}
        onKeyDown={(e) => handleCampKeyDown(e, pkg.title)}
      >
        <div className="carousel-controls" aria-hidden="true">
          <button className="carousel-btn prev" onClick={(e) => prevImage(pkg.id, e)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-btn next" onClick={(e) => nextImage(pkg.id, e)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="image-counter">
          {(currentImageIndex[pkg.id] ?? 0) + 1} / {pkg.images.length}
        </div>

        <h3 className="camp-title">{pkg.title}</h3>
      </div>

      <button className="toggle-btn" onClick={() => toggleExpand(pkg.id)}>
        Camp Details {expanded === pkg.id ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
      </button>

      {expanded === pkg.id && (
        <div className="camp-details">
          {pkg.includes.map((item, index) => (
            <div key={index} className="detail">
              <span className="detail-text">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <BookingNavbar />

      <div className="home-container">
        <div className="camp-section">
          {selectedCountry === "Morocco"
            ? renderCamp(packageData[2])
            : (
              <>
                {renderCamp(packageData[0])}
                {renderCamp(packageData[1])}
              </>
            )}
        </div>

        {selectedCountry !== "Morocco" && (
          <>
            <div style={{ textAlign: "center", margin: "24px 0" }}>
              <h2>Beach Camp vs. TS2 Camp: What's the Difference?</h2>
              <p>
                Main difference is the location and the room standard!
                <br />
                Beach camp located right next to the beach with swim pool, TS2 camp rooms are with Basic standard simple private rooms with Fan and hot water ensuite bathroom Beach camp rooms are Standard private rooms with air conditioning, ensuite bathroom and hot water! TS2 camp located 05 minutes ride away from the beach camp, even though you book TS2 Weligama , all your surf lessons, Yoga, dinner and all events will be taken place at the beach camp! 1000 rupees per day will be paid per room and per dormitory as a transport compensation to travel between the camps! You can basically spend all ur day at the beach camp and just go for sleep at TS2 camp!
              </p>
            </div>

            <div className="map-image">
              <img src="booking_engine/map.jpg" alt="camp map" loading="lazy" />
            </div>
          </>
        )}
      </div>

      <BookingFooter />
    </>
  );
};

export default Camp;
