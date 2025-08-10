import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SurfCardWithSlider = ({ images, topic, body1, body2, link, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); 

      return () => clearInterval(interval);
    }
  }, [images]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const handleCardClick = () => {
    window.location.href = link;
  };

  return (
    <div
      className={`${index === 0 || index === 1 ? 'relative bg-cover bg-center h-[360px] flex items-end justify-center shadow-lg cursor-pointer overflow-hidden' : 'relative bg-cover bg-center h-[420px] flex items-end justify-center shadow-lg cursor-pointer overflow-hidden'}`}
      onClick={handleCardClick}
    >
      <div className="absolute inset-0">
        {images && images.map((image, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/${image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: idx === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </div>

      {images && images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-white p-1 rounded-full transition-all duration-300 z-20"
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
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 text-white p-1 rounded-full transition-all duration-300 z-20"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {images && images.length > 1 && (
        <div className="absolute top-4 right-4 flex space-x-1 z-20">
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
      )}

      <div className="relative bg-transparent text-white p-6 rounded-md text-center w-full max-h-full z-10">
        <h1 className="text-2xl font-bold mb-2 leading-6 drop-shadow-lg">{topic}</h1>
        <p className="text-sm mb-2 leading-4 drop-shadow-lg">{body1}</p>
        <p className="text-sm mb-4 drop-shadow-lg">{body2}</p>
        {index !== 3 && (
          <a 
            href={link} 
            className="text-white border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition drop-shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            BOOK NOW
          </a>
        )}
      </div>
    </div>
  );
};

export default SurfCardWithSlider;
