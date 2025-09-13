import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BookingNavbar = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(() => {
    const stored = localStorage.getItem("isSubmitted");
    return stored ? JSON.parse(stored) : false;
  });

  const SCALE = 0.8;

  return (
    <div className="fixed left-[4%] w-[90%] z-[11] bg-white border-b border-gray-300 shadow-[0_0_20px_7px_rgba(0,0,0,0.11)] rounded-[40px] px-5 py-2.5">
      <div className="flex items-center justify-between mx-[10%]">
        {/* Back button */}
        <button
          className={`rounded-full border-none text-white transition-colors ${
            isSubmitted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#00afef] hover:bg-[#0a67a9] cursor-pointer"
          }`}
          style={{
            fontSize: `${2 * SCALE}rem`,
            padding: `${8 * SCALE}px ${18 * SCALE}px`,
          }}
          onClick={() => navigate(-1)}
          aria-label="Go back"
          title="Back"
          disabled={isSubmitted}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {/* Logo */}
        <a href="/camp" aria-label="Go to Camp">
          <img
            src="/logo.png"
            alt="The Surfer Sri Lanka"
            className="object-cover"
            style={{
              width: `${167 * SCALE}px`,
              height: `${80 * SCALE}px`,
            }}
          />
        </a>

        {/* Currency icon */}
        <div
          className="rounded-full bg-[#00afef] text-white cursor-pointer transition-colors hover:bg-[#0a67a9]"
          style={{
            fontSize: `${2 * SCALE}rem`,
            padding: `${15 * SCALE}px ${22 * SCALE}px`,
          }}
          title="Currency"
        >
          <FontAwesomeIcon icon={faEuroSign} />
        </div>
      </div>
    </div>
  );
};

export default BookingNavbar;
