import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ActivityCard = ({ src, title, href = "/activities", index }) => (
  <motion.a
    href={href}
    aria-label={title}
    className="relative block h-[400px] overflow-hidden rounded-none shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.15 + index * 0.05, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    {/* Real <img> for a11y/SEO instead of background-image */}
    <img
      src={`/${src}`}
      alt={title}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex h-full items-end justify-center p-4 text-center text-white">
      <h3 className="w-full text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
        {title}
      </h3>
    </div>
  </motion.a>
);

const Activities = () => {
  const { t } = useTranslation();

  // Text from i18n
  const heading = t("activities1.heading");
  const titles = t("activities1.titles", { returnObjects: true }) || [];
  const aria = t("activities1.aria", { returnObjects: true });

  // Images kept in code; text is translated
  const pics = ["act1.jpg", "activities/acti-5.jpg", "act3.jpg", "boat.jpg"];

  const cards = pics.map((pic, i) => ({
    pic,
    title: titles[i] || "",
  }));

  return (
    <div
      className="py-16 px-4"
      role="region"
      aria-label={aria?.section || heading}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-neutral-400 mb-8 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {heading}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <ActivityCard key={idx} src={c.pic} title={c.title} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
