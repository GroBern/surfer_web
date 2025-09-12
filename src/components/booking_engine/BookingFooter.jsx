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

  // 20% smaller than previous: 55→44, 30→24, 12→10, 5→4
  const size = 44;
  const circleFontSize = 24;
  const titleFontSize = 10;
  const lineHeight = 4;

  return (
    <div className="footer">
      <div
        className="footer-container"
        style={{ color: "#00afef", borderTopWidth: "2px" }}
      >
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
          activeStep={path}
          activeColor="#00afef"
          completeColor="#00afef"
          defaultColor="#d3d3d3"
          activeTitleColor="#00afef"
          size={size}
          circleFontSize={circleFontSize}
          titleFontSize={titleFontSize}
          barStyle="solid"
          lineHeight={lineHeight}
        />
      </div>
    </div>
  );
};

export default BookingFooter;
