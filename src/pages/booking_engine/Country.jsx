// src/pages/booking_engine/Country.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();

  // Two countries only for now
  const packageData = [
    { id: "1", title: "Sri Lanka", images: ["/image.png"], includes: [] },
    { id: "2", title: "Morocco", images: ["/morocco.jpg"], includes: [] },
  ];

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) setSelectedCountry(storedCountry);

    // Clear booking bits when entering Country
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
      "selectedCamp",
    ].forEach((k) => localStorage.removeItem(k));

    // Init image index map
    const initial = {};
    packageData.forEach((pkg) => (initial[pkg.id] = 0));
    setCurrentImageIndex(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountrySelection = (title) => {
    localStorage.setItem("selectedCountry", title);
    setSelectedCountry(title);
    navigate("/camp");
  };

  const handleCountryKeyDown = (e, title) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCountrySelection(title);
    }
  };

  const nextImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] ?? 0;
      const item = packageData.find((p) => p.id === id);
      const nextIndex = (currentIndex + 1) % item.images.length;
      return { ...prev, [id]: nextIndex };
    });
  };

  const prevImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] ?? 0;
      const item = packageData.find((p) => p.id === id);
      const prevIndex = (currentIndex - 1 + item.images.length) % item.images.length;
      return { ...prev, [id]: prevIndex };
    });
  };

  // Reuse your Camp layout classes for identical placement/alignment
  const renderCountryCard = (country) => (
    <div key={country.id} className="camp-wrapper">
      <div
        className="camp"
        role="button"
        tabIndex={0}
        aria-label={`Select ${country.title}`}
        style={{
          backgroundImage: `url(${country.images[currentImageIndex[country.id] ?? 0]})`,
          borderRadius: "18px", // match camp card shape
        }}
        onClick={() => handleCountrySelection(country.title)}
        onKeyDown={(e) => handleCountryKeyDown(e, country.title)}
      >
        {/* Carousel controls (match positioning inside card) */}
        <div className="carousel-controls" aria-hidden="true">
          <button
            className="carousel-btn prev"
            onClick={(e) => prevImage(country.id, e)}
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="carousel-btn next"
            onClick={(e) => nextImage(country.id, e)}
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Counter (same spot as camp) */}
        <div className="image-counter" aria-live="polite">
          {(currentImageIndex[country.id] ?? 0) + 1} / {country.images.length}
        </div>

        {/* Title (same styling as camp cards) */}
        <h3 className="camp-title">{country.title}</h3>
      </div>
      {/* No details toggle needed here since includes is empty */}
    </div>
  );

  return (
    <>
      <BookingNavbar />

      {/* Headline placed exactly like Camp's headline */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ marginTop: "110px" }}
      >
        <h1
          className="text-2xl font-semibold tracking-tight text-gray-900"
          style={{ marginBottom: "6px" }}
        >
          Choose Your Destination
        </h1>
        <p className="text-sm text-gray-600" style={{ marginBottom: "18px" }}>
          Pick a country to see our camps and start your booking.
        </p>
      </div>

      {/* Identical placement container used by Camp.jsx */}
      <div className="home-container" style={{ paddingTop: 0 }}>
        <div className="camp-section">
          {packageData.map((country) => renderCountryCard(country))}
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default Country;
