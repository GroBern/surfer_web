import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import SurfCampCard from "../../components/SurfCard";
import Difference from "./Difference";

const ImageCard = () => {
  const cards = {
      card1: {
        pic: "surfcard1.jpg",
        topic: "The Surfer Beach Surf Camp",
        body1:
          "Join us at the ultimate destination for surf enthusiasts. Experience the thrill of riding the waves and enjoy the serene beauty of the ocean.",
        link: "/beach-camp",
      },
  
      card2: {
        pic: "surfcard2.jpg",
        topic: "TS2 Surf Camp",
        body1:
          "Feel the magic of surfing as the sun sets over the horizon. Our guided sunset sessions are a perfect way to end your beach day.",
        link: "/ts2-camp",
      },
  
      card3: {
        pic: "surfcard3.jpg",
        topic: "Coming Soon: The Wave Surf Camp",
        body1:
          "Our other Sri Lankan surf camp is coming online soon. Stay tuned!",
        link: "/wave-camp",
      },
    };

    const cardList = Object.values(cards);

  return (
      <div className="max-w-7xl mx-auto py-10">
        {/* All four cards in the same row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardList.map((card, index) => (
            <motion.div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SurfCampCard
                pic={card.pic}
                topic={card.topic}
                body1={card.body1}
                body2={card.body2}
                link={card.link}
                index={index}
              />
            </motion.div>
          ))}
        </div>
        {/* Difference paragraph below first two cards, aligned with them */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Difference />
          </div>
        </div>
      </div>
  );
};

export default ImageCard;
