import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RoomImageSlider = ({ images, altText, className }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const baseAlt = altText || t("roomImageSlider.defaultAlt");

  const goToImage = (index) => setCurrentImageIndex(index);
  const goToPrevious = () =>
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goToNext = () =>
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length <= 1) {
    return (
      <img
        src={images?.[0] || "/beach_camp/room_1.jpg"}
        alt={baseAlt}
        className={className}
      />
    );
  }

  return (
    <div
      className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={baseAlt}
    >
      {images.map((image, idx) => (
        <Motion.img
          key={idx}
          src={image}
          alt={t("roomImageSlider.altIndexed", { base: baseAlt, n: idx + 1 })}
          className={`absolute inset-0 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          aria-hidden={idx === currentImageIndex ? "false" : "true"}
        />
      ))}

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400 bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition-all duration-300 z-20 cursor-pointer"
        aria-label={t("roomImageSlider.aria.prev")}
      >
        <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400 bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition-all duration-300 z-20 cursor-pointer"
        aria-label={t("roomImageSlider.aria.next")}
      >
        <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute top-2 right-2 flex space-x-1 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              goToImage(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentImageIndex
                ? "bg-white scale-110"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={t("roomImageSlider.aria.goto", { n: idx + 1 })}
            aria-current={idx === currentImageIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomImageSlider;
