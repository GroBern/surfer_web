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
  ];

  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) setSelectedCamp(storedCamp);

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

  return (
    <>
      <BookingNavbar />

      <div className="overflow-x-hidden px-5 py-[10%] mx-[10%] mb-[10%]">
        {/* Camp Section */}
        <div className="flex flex-wrap justify-around mt-12 gap-5">
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className="grid text-left mb-2.5 w-[500px] justify-items-center h-fit"
            >
              <div
                className="relative w-[450px] h-[350px] text-white shadow-[0_0_20px_7px_rgba(0,0,0,0.11)] cursor-pointer p-5 rounded-[60px] transition duration-300 overflow-hidden bg-cover bg-center"
                role="button"
                tabIndex={0}
                aria-label={`Select ${pkg.title}`}
                style={{
                  backgroundImage: `url(${
                    pkg.images[currentImageIndex[pkg.id] ?? 0]
                  })`,
                }}
                onClick={() => handleCampSelection(pkg.title)}
                onKeyDown={(e) => handleCampKeyDown(e, pkg.title)}
              >
                {/* Carousel Controls */}
                <div
                  className="absolute w-[90%] h-full top-0 left-0 flex justify-between items-center px-5"
                  aria-hidden="true"
                >
                  <button
                    className="bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition"
                    onClick={(e) => prevImage(pkg.id, e)}
                    aria-label="Previous image"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    className="bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition"
                    onClick={(e) => nextImage(pkg.id, e)}
                    aria-label="Next image"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-5 right-5 bg-black/50 text-white px-2.5 py-1 rounded-2xl text-xs z-10">
                  {(currentImageIndex[pkg.id] ?? 0) + 1} / {pkg.images.length}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1.5 text-center relative z-10 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.8)]">
                  {pkg.title}
                </h3>
              </div>

              {/* Toggle Button */}
              <button
                className="block mx-auto mb-10 px-4 py-1.5 text-sm text-white bg-[#00afef] hover:bg-[#0a67a9] rounded-b-[15px] transition"
                onClick={() => toggleExpand(pkg.id)}
                aria-expanded={expanded === pkg.id}
                aria-controls={`camp-${pkg.id}-details`}
              >
                Camp Details{" "}
                {expanded === pkg.id ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </button>

              {/* Expanded Details */}
              {expanded === pkg.id && (
                <div
                  id={`camp-${pkg.id}-details`}
                  className="mt-2.5 gap-2.5 justify-center p-2.5 rounded-lg bg-white/20 backdrop-blur-md shadow-md mb-10"
                >
                  {pkg.includes.map((item, index) => (
                    <div key={index} className="flex gap-3.5 items-center">
                      <span className="flex flex-3 items-center rounded-lg mb-3 bg-white/20 backdrop-blur-sm p-2">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="text-center my-6">
          <h2 className="mb-3 text-[clamp(20px,3vw,28px)] font-extrabold leading-tight md:font-extrabold sm:font-black">
            Beach Camp vs. TS2 Camp: What's the Difference?
          </h2>
          <p>
            Main difference is the location and the room standard!
            <br />
            Beach camp located right next to the beach with swim pool, TS2 camp
            rooms are with Basic standard simple private rooms with Fan and hot
            water ensuite bathroom Beach camp rooms are Standard private rooms
            with air conditioning, ensuite bathroom and hot water! TS2 camp
            located 05 minutes ride away from the beach camp, even though you
            book TS2 Weligama , all your surf lessons, Yoga, dinner and all
            events will be taken place at the beach camp! 1000 rupees per day
            will be paid per room and per dormitory as a transport compensation
            to travel between the camps! You can basically spend all ur day at
            the beach camp and just go for sleep at TS2 camp!
          </p>
        </div>

        {/* Map Image */}
        <div className="flex justify-center rounded-[60px] overflow-hidden">
          <img
            src="booking_engine/map.jpg"
            alt="camp map"
            loading="lazy"
            className="w-full h-full object-cover rounded-[60px]"
          />
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default Camp;
