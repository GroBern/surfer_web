import React from "react";
import { motion } from "framer-motion";

const Activities = () => {
  const activities = [
    { pic: "act1.jpg", title: "Have An Unforgettable Surf Holiday" },
    { pic: "friends.jpg", title: "Meet New People From All Around The World" },
    { pic: "act3.jpg", title: "Make New Friends For Life" },
    { pic: "boat.jpg", title: "Boat Party" },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-neutral-400 mb-8 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            ACTIVITIES
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              pic={activity.pic}
              title={activity.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ pic, title }) => {
  return (
    <motion.div
      className="relative bg-cover bg-center h-[400px] flex items-end justify-center shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      style={{
        backgroundImage: `url(/${pic})`,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <a href="/activities">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white p-4 text-center w-full">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-6.5">{title}</h3>
        </div>
      </a>
    </motion.div>
  );
};

export default Activities;
