import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: '01) Worth to try a surf camp?',
    answer: `Looking for an epic adventure? Look no further than Surf Camp Sri Lanka! This experience is totally worth it. Not only will you get to improve your surfing skills with video analysis and expert coaching, but you’ll also meet tons of like-minded travelers. Plus, you won’t have to worry about a thing – the camp takes care of everything from food to surfing, yoga to safety. So, if you’re traveling solo or just looking for a new challenge, Surfcamp is the perfect choice. Don’t miss out on this amazing opportunity to catch the best waves, surf conditions and make new friends!`
  },
  {
    question: '02) Does Sri Lanka has good surfing?',
    answer: 'Are you a surfer looking for a new adventure? Well, let me tell you, Sri Lanka is the place to be! With its beautiful beaches and consistent waves, Sri Lanka is a surfer’s paradise. Whether you’re a beginner or a pro, there are plenty of spots to catch some waves. From the famous Southwest coast Weligama to East coast Arugambay, you’ll find a variety of breaks to suit your style. So grab your board and head to Sri Lanka for an unforgettable surfing experience in Sri Lanka.'
  },
  {
    question: '03) Do you need a wet suit to surf in Sri Lanka?',
    answer: 'If you’re planning a trip to Sri Lanka, you might be wondering if you need to pack a wet suit. Well, we’ve got some good news for you – you can leave it at home! The water temperature in Sri Lanka is warm, so you won’t need to worry about getting chilly while you catch some waves. Plus, who wants to deal with the hassle of putting on and taking off a wet suit anyway? So pack your board shorts and sunscreen, and get ready for some epic surf sessions in the warm waters of Sri Lanka.'
  },
  {
    question: '04)Are Sri Lanka surfing spots crowded?',
    answer: 'Looking for a chill surf vacation without the crowds? Look no further than Sri Lanka! Our surf camp in Weligama is run by a local who knows all the best spots. And the best part? We’ll take you to the hidden gems that not many people know about. No need to worry about fighting for waves or feeling like you’re in a surf competition. Just relax, catch some waves, and enjoy the beautiful scenery. Book with us and experience the uncrowded surfing spots of Sri Lanka.'
  },
  {
    question: `05)Are you wondering if you're too old to learn to surf?`,
    answer: 'Let me tell you, age is just a number! Whether you’re 26 or 66, you can still catch some waves and have a blast. Don’t let anyone tell you otherwise. And if you’re looking for the perfect board to get started, we’ve got you covered. Our beginner-friendly surfboards are designed to help you learn quickly and easily. So, what are you waiting for?It’s never too late to learn something new. Book a surf trip with us in one of our surf camp Sri Lanka. We are also a yoga retreat and we offer daily breakfast all inclusive.'
  },
  {
    question: '06) Which months are best to surfing in Sri Lanka south west coast?',
    answer: 'If you’re a surfing enthusiast, you’ll definitely want to check out Sri Lanka’s south west coast. And if you’re wondering when the best time to go is, we’ve got you covered. The ideal months for surfing in this area are from October to the end of April. That’s right, you’ve got a solid six months to catch some waves and soak up the sun. So grab your board and get ready for an unforgettable experience. With warm waters and consistent swells, you won’t want to miss out on this surfing paradise.'
  },
  {
    question: '07)Is Sri Lanka best for beginner surfers?',
    answer: 'If you’re a beginner looking for the perfect place to catch some waves, look no further than surfing in Sri Lanka. Trust us, it’s 100% the best spot for newbies compared to anywhere else in the world. And The surf beach in Weligama is the ultimate place to learn to surf. With a 2-3 km long sandy coastline and gentle waves that won’t knock you off your board, you’ll be shredding in no time. Plus, there are no dangerous currents or reefs to worry about. So grab your board and head to Weligama for the ultimate surfing experience!'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 * i,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="py-12 px-2 sm:px-0 flex flex-col items-center min-h-screen bg-[#fafafa]">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-neutral-400 text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        FAQ
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col gap-5 mb-15">
        {faqData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`bg-white shadow-lg border border-neutral-100 transition-all duration-300 ${
              openIndex === idx ? 'ring-2 ring-neutral-200' : ''
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={idx}
            viewport={{ once: true, amount: 0.4 }}
          >
            <button
              className={`w-full flex justify-between items-center px-6 py-5 focus:outline-none transition-all duration-200 ${
                openIndex === idx ? 'rounded-t-xl bg-neutral-50/40' : 'hover:bg-neutral-50'
              }`}
              onClick={() => handleToggle(idx)}
            >
              <span className="text-lg md:text-lg font-bold text-left text-neutral-700">
                {item.question}
              </span>
              <span className="text-3xl font-bold text-neutral-700">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>
            {openIndex === idx && item.answer && (
              <div className="px-6 pb-6 text-base xl:text-[.875rem] text-neutral-700 animate-fadein">
                {item.answer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0 leading-relaxed">{line}</p>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
