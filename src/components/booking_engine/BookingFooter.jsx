import React from "react";
import Stepper from "react-stepper-horizontal";
import { useLocation } from "react-router-dom";

const BookingFooter = () => {

  const location = useLocation();

  let path;
  switch (location.pathname) {
    case "/":
      path = 0;
      break;
    case "/date":
    case "/date/":
      path = 1;
      break;
    case "/room":
    case "/room/":
      path = 2;
      break;
    case "/package":
    case "/package/":
      path = 3;
      break;
    case "/selection":
    case "/selection/":
      path = 4;
      break;
    case "/air-port":
    case "/air-port/":
      path = 5;
      break;
    case "/information":
    case "/information/":
      path = 6;
      break;
    default:
      path = 0;
  }

  return (
    <div className="footer">
      <div className="footer-container" style={{color: '#00afef', borderTopWidth: '2px'}}>
      <Stepper
        steps={[
          { title: "Camp" },
          { title: "Date" },
          { title: "Room" },
          { title: "Package" },
          { title: "Selection" },
          { title: "Airport" },
          { title: "Information" },
        ]}
        activeStep={path} // Set the active step dynamically based on progress
        activeColor="#00afef" // Color for the active step
        completeColor="#00afef" // Color for completed steps
        defaultColor="#d3d3d3" // Color for upcoming steps
        activeTitleColor="#00afef" // Title color for the active step
        size={55} // Size of the step circles
        circleFontSize={30} // Font size of the step numbers
        titleFontSize={12} // Font size of the titles
        barStyle="solid" // Solid bar between steps
        lineHeight={5} // Height of the line between steps
      />
      </div>
    </div>
  );
};

export default BookingFooter;
