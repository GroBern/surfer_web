import React from "react";
import { BadgeCheck, Video, Waves, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Reusable Card
const PillarCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
    </div>
    <h3 className="text-gray-800 font-semibold text-sm mb-3 leading-tight">
      {title}
    </h3>
  </div>
);

export default function SurfingJourneyIcons() {
  const pillars = [
    { icon: BadgeCheck, title: "ISA Certified Surf Instructor" },
    { icon: Video, title: "Video Analysis" },
    { icon: Waves, title: "Surf Break Right in Front of the Camp" },
    { icon: TrendingUp, title: "For Beginners to Advanced Level" },
  ];

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="transform-gpu"
            >
              <PillarCard icon={pillar.icon} title={pillar.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
