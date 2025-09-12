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

  // 20% scale (same idea as footer shrink)
  const SCALE = 0.8;

  return (
    <div className="navbar">
      <div className="navbar-container">
        <button
          className="navbar-back-button"
          disabled={isSubmitted}
          style={{
            // shrink only size-related bits; keep colors/hover from CSS
            fontSize: `${2 * SCALE}rem`,               // 2rem → 1.6rem
            padding: `${8 * SCALE}px ${18 * SCALE}px`,  // 8x18 → 6x14.4
            backgroundColor: isSubmitted ? "#ccc" : "",
            cursor: isSubmitted ? "not-allowed" : "pointer",
          }}
          onClick={() => navigate(-1)}
          aria-label="Go back"
          title="Back"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <a href="/camp" aria-label="Go to Camp">
          <img
            src="/logo.png"
            alt="The Surfer Sri Lanka"
            className="navbar-logo"
            style={{
              width: `${167 * SCALE}px`,  // 167 → ~134
              height: `${80 * SCALE}px`,  // 80  → 64
              objectFit: "cover",
            }}
          />
        </a>

        <div
          className="navbar-icon"
          style={{
            fontSize: `${2 * SCALE}rem`,               // 2rem → 1.6rem
            padding: `${15 * SCALE}px ${22 * SCALE}px` // 15x22 → 12x17.6
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
