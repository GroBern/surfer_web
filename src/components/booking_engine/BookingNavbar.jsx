import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const BookingNavbar = () => {

  const navigate = useNavigate();
   const [isSubmitted, setIsSubmitted] = useState(() => {
      const stored = localStorage.getItem("isSubmitted");
      return stored ? JSON.parse(stored) : false;
    });

  return (
    <div className="navbar">
      <div className="navbar-container">
        <button className="navbar-back-button"
        disabled={isSubmitted}
              style={{
                backgroundColor: isSubmitted ? "#ccc" : "",
                cursor: isSubmitted ? "not-allowed" : "pointer",
              }}
         onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faAngleLeft} /> </button>
        <a href="/camp">
        <img src="/logo.png" alt="The Surfer Sri Lanka" className="navbar-logo" />
        </a>
        <div className="navbar-icon" >
           <FontAwesomeIcon icon={faEuroSign} />
        </div>
      </div>
    </div>
  );
};

export default BookingNavbar;
