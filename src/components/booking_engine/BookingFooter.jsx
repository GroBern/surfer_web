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

  // scaled values
  const size = 50;
  const circleFontSize = 24;
  const titleFontSize = 13;
  const lineHeight = 4;

  return (
    <div className="fixed bottom-0 z-[11] w-full bg-white text-[#00afef] shadow-[0_-3px_3px_0_rgba(0,0,0,0.3)] rounded-[25px] px-5 py-2.5 border-t border-gray-300">
      <div className="mx-[4%]">
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
