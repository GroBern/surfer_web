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

const Country = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();

  const packageData = [
    {
      id: "1",
      title: "Sri Lanka",
      images: [
        "/image.png",
      ],
      includes: [
        // "THE SURFER BEACH – Main Surf Country in Weligama, Sri Lanka",
        // "Our flagship surf country is located right next to Weligama’s top surfing beach and within walking distance of multiple surf breaks, perfect for all skill levels.",
        // "Designed and run by surfers for surfers, the country focuses on rapid progress using proven surfing techniques.",
        // "It offers the full surf and yoga experience in a premium setting.",
        // "On-site facilities include a dedicated yoga area, a swimming pool, and a restaurant—everything you need for an unforgettable surf getaway in Sri Lanka.",
      ],
    },
    {
      id: "2",
      title: "Morocco",
      images: [
        "/morocco.jpg",
      ],
      includes: [
        // "TS2 WELIGAMA – Surf Country in a Tranquil Setting",
        // "TS2 Weligama is a serene surf country just 100 meters from the beach, nestled in a lush green area and only 5 minutes from The Surfer Beach Country.",
        // "Guests at TS2 enjoy full access to all main country amenities, including the restaurant, pool, daily surf and yoga lessons, and social events.",
        // "It’s the perfect extension of our surf country family for a memorable Sri Lankan surf and yoga experience.",
      ],
    },
  ];

  useEffect(() => {
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
      const country = packageData.find((pkg) => pkg.id === id);
      const nextIndex = (currentIndex + 1) % country.images.length;
      return { ...prev, [id]: nextIndex };
    });
  };

  const prevImage = (id, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id] ?? 0;
      const country = packageData.find((pkg) => pkg.id === id);
      const prevIndex = (currentIndex - 1 + country.images.length) % country.images.length;
      return { ...prev, [id]: prevIndex };
    });
  };

  return (
    <>
      <BookingNavbar />

      <div className="overflow-x-hidden my-28 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 my-10">
          {packageData.map((country, idx) => (
            <div key={country.id} className="border rounded-xl shadow-md overflow-hidden">
              <div
                className="relative h-72 md:h-96 bg-cover bg-center cursor-pointer flex items-end justify-center"
                style={{
                  backgroundImage: `url(${country.images[currentImageIndex[country.id] ?? 0]})`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`Select ${country.title}`}
                onClick={() => handleCountrySelection(country.title)}
                onKeyDown={(e) => handleCountryKeyDown(e, country.title)}
              >
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    className="bg-white/70 rounded-full p-2 hover:bg-white"
                    onClick={(e) => prevImage(country.id, e)}
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    className="bg-white/70 rounded-full p-2 hover:bg-white"
                    onClick={(e) => nextImage(country.id, e)}
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>

                {/* Counter */}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
                  {(currentImageIndex[country.id] ?? 0) + 1} / {country.images.length}
                </div>

                {/* Title */}
                <h3 className="bg-black/60 text-white text-lg md:text-2xl font-bold px-4 py-2 w-full text-center">
                  {country.title}
                </h3>
              </div>

              {/* Toggle Button */}
              <button
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200"
                onClick={() => toggleExpand(country.id)}
                aria-expanded={expanded === country.id}
                aria-controls={`country-${country.id}-details`}
              >
                Country Details
                {expanded === country.id ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </button>

              {/* Details */}
              {expanded === country.id && (
                <div className="p-4 bg-gray-50" id={`country-${country.id}-details`}>
                  {country.includes.map((item, index) => (
                    <p key={index} className="text-sm text-gray-700 mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        {/* <div className="text-center my-8">
          <h2 className="text-xl md:text-2xl font-extrabold md:font-bold mb-4">
            Beach Country vs. TS2 Country: What's the Difference?
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-sm md:text-base">
            Main difference is the location and the room standard!
            <br />
            Beach country located right next to the beach with swim pool, TS2 country rooms are
            with Basic standard simple private rooms with Fan and hot water ensuite
            bathroom Beach country rooms are Standard private rooms with air conditioning,
            ensuite bathroom and hot water! TS2 country located 05 minutes ride away from
            the beach country, even though you book TS2 Weligama , all your surf lessons,
            Yoga, dinner and all events will be taken place at the beach country! 1000 rupees
            per day will be paid per room and per dormitory as a transport compensation to
            travel between the countrys! You can basically spend all ur day at the beach country
            and just go for sleep at TS2 country!
          </p>
        </div> */}

        {/* Map Section */}
        {/* <div className="my-8 flex justify-center">
          <img
            src="booking_engine/map.jpg"
            alt="country map"
            loading="lazy"
            className="rounded-lg shadow-lg max-h-96 object-contain"
          />
        </div> */}
      </div>

      <BookingFooter />
    </>
  );
};

export default Country;
