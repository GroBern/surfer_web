import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Activities = () => {
  const { t, i18n } = useTranslation();

  // Map images to the translation keys you already have
  const items = [
    { pic: "act1.jpg", titleKey: "activities.surfHoliday.title" },
    { pic: "friends.jpg", titleKey: "activities.meetPeople.title" },
    { pic: "act3.jpg", titleKey: "activities.friendsForLife.title" },
    { pic: "boat.jpg", titleKey: "activities.boatParty.title" },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50" dir={i18n.dir()}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-neutral-400 mb-8 tracking-wider uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {t("activities.header")}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, index) => (
            <ActivityCard
              key={index}
              pic={it.pic}
              title={t(it.titleKey)}
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
      style={{ backgroundImage: `url(/${pic})` }}
      role="img"
      aria-label={title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <a href="/activities" className="block w-full h-full">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white p-4 text-center w-full">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-6.5">
            {title}
          </h3>
        </div>
        <span className="sr-only">{title}</span>
      </a>
    </motion.div>
  );
};

export default Activities;
