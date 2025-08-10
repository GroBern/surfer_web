import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const RoomImageSlider = ({ images, altText, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Manual navigation only - no auto-slide
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  // If only one image, render as static image
  if (!images || images.length <= 1) {
    return (
      <img
        src={images?.[0] || "/ts2_camp/room_1.jpg"}
        alt={altText}
        className={className}
      />
    );
  }

  return (
    <div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
      {/* Images */}
      {images.map((image, idx) => (
        <Motion.img
          key={idx}
          src={image}
          alt={`${altText} - Image ${idx + 1}`}
          className={`absolute inset-0 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: idx === currentImageIndex ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition-all duration-300 z-20"
        aria-label="Previous image"
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
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition-all duration-300 z-20"
        aria-label="Next image"
      >
        <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
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
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomImageSlider;
