// src/pages/booking_engine/Camp.jsx
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
      images: ["/morocco/moro-1.jpg", "/morocco/moro-2.jpg", "/morocco/moro-3.jpg"],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          borderRadius: "18px",
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
        Camp Details{" "}
        {expanded === pkg.id ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
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

      {/* Header (same placement pattern as Country page; left-aligned) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ marginTop: "110px" }}>
        <h1
          className="text-2xl font-semibold tracking-tight text-gray-900"
          style={{ marginBottom: "6px" }}
        >
          Choose Your Camp
        </h1>
        <p className="text-sm text-gray-600" style={{ marginBottom: "18px" }}>
          Pick a camp based on location and vibe. You can compare the two Sri Lanka options below.
        </p>
      </div>

      <div className="home-container" style={{ paddingTop: 0 }}>
        <div className="camp-section">
          {selectedCountry === "Morocco" ? (
            renderCamp(packageData[2])
          ) : (
            <>
              {renderCamp(packageData[0])}
              {renderCamp(packageData[1])}
            </>
          )}
        </div>

        {selectedCountry !== "Morocco" && (
          <>
            {/* Centered comparison section */}
            <section
              aria-labelledby="camp-compare-title"
              className="mx-auto max-w-5xl text-center"
              style={{ marginTop: "8px", marginBottom: "24px" }}
            >
              <h2
                id="camp-compare-title"
                className="text-xl sm:text-2xl font-bold text-gray-900"
                style={{ marginBottom: "8px" }}
              >
                Beach Camp vs. TS2 Camp: What's the Difference?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Here’s a clear, side-by-side breakdown to help you pick the right place.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                {/* Beach Camp */}
                <article className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 w-full max-w-md text-left">
                  <header className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Beach Camp (Weligama)</h3>
                    <p className="text-sm text-gray-600">
                      Closest to the beach with more comfort and amenities.
                    </p>
                  </header>
                  <ul className="mt-3 space-y-2 text-sm text-gray-800 list-disc ml-5">
                    <li>
                      <strong>Location:</strong> Right next to Weligama beach.
                    </li>
                    <li>
                      <strong>Rooms:</strong> Standard private rooms with{" "}
                      <em>air-conditioning</em>, <em>ensuite bathroom</em>, and <em>hot water</em>.
                    </li>
                    <li>
                      <strong>Facilities:</strong> Swimming pool, restaurant, and a dedicated yoga
                      area.
                    </li>
                    <li>
                      <strong>Lessons & events:</strong> All surf lessons, yoga, dinners, and events
                      happen here.
                    </li>
                    <li>
                      <strong>Best for:</strong> Guests who want to stay where everything happens.
                    </li>
                  </ul>
                </article>

                {/* TS2 Camp */}
                <article className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 w-full max-w-md text-left">
                  <header className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">TS2 Camp (Weligama)</h3>
                    <p className="text-sm text-gray-600">Great value in a quiet, green setting.</p>
                  </header>
                  <ul className="mt-3 space-y-2 text-sm text-gray-800 list-disc ml-5">
                    <li>
                      <strong>Location:</strong> About <em>5 Minutes Ride</em> from Beach Camp.
                    </li>
                    <li>
                      <strong>Rooms:</strong> Basic private rooms with <em>fan</em> and{" "}
                      <em>hot-water ensuite</em>.
                    </li>
                    <li>
                      <strong>Facilities:</strong> You’ll use Beach Camp amenities during the day.
                    </li>
                    <li>
                      <strong>Lessons & events:</strong> All sessions run at Beach Camp (you’ll join
                      there).
                    </li>
                    <li>
                      <strong>Transport compensation:</strong>{" "}
                      <em>LKR 1,000 per room/dorm per day</em> to travel between camps.
                    </li>
                    <li>
                      <strong>Best for:</strong> Budget-friendly stays — sleep at TS2, hang out at
                      Beach Camp.
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            {/* Map (unchanged) */}
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
