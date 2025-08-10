import React from 'react'
import { motion } from 'framer-motion';
import { desc } from 'framer-motion/client';

const ReviewsCard = (props) => {
    return (
        <motion.div 
            className='w-full md:w-1/3 bg-white border-2 border-gray-300 pt-8 md:border-none p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
            }}
        >
            <motion.div 
                className='flex flex-col justify-left items-left mt-2 gap-3'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.img 
                    className='rounded-full w-1/4 shadow-lg border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300' 
                    src={props.img} 
                    alt="img"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.h1 
                    className='font-semibold ml-1 xl:text-[25px] bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {props.name}
                </motion.h1>
                <motion.p 
                    className='text-gray-500 ml-1 xl:text-[.875rem] font-semibold mt-[-0.5rem]'
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {props.date}
                </motion.p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <p className='text-gray-600 xl:text-[.875rem] ml-1 leading-relaxed hover:text-gray-800 transition-colors duration-300'>
                   {props.description}
                </p>
            </motion.div>                     
        </motion.div>
    )
}

const Reviews = () => {
    const reviewsData = [
        { id: 1, img: "/review.png", name: "Koen Slinger", date: "2025-04-16", description: "We had a blast. Great atmosphere, friendly and helpfull staff, great accomodation where everything is set-up for a stay without any hassle..." },
        { id: 2, img: "/review.png", name: "Brittany Jaide", date: "2025-03-21", description: "Loved my stay here! Great service and friendly staff. The surfing instructors were super knowledgable and caring and loved the variety of night..." },
        { id: 3, img: "/review.png", name: "Sanya Shah", date: "2024-02-03", description: "Truly amazing!!!! I surfed for the first time in Weligama. The instructors here are incredible! Especially Emily, Nadiv, Maya, and Matty. They helped me..." },
        { id: 4, img: "/review.png", name: "Rachel Rife", date: "2024-01-19", description: "We loved our stay! The staff and instructors were so kind and we got much better at surfing during the week. The price matches the quality of food/rooms and the... " }
    ];

    return (
        <div className='py-8 flex flex-col items-center justify-center md:px-25 px-5'>
            <motion.h1 
                className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-400 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                Google Reviews
            </motion.h1>
            {/* Testimonials */}
            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                {reviewsData.map((review) => (
                    <ReviewsCard 
                        key={review.id}
                        img={review.img}
                        name={review.name}
                        date={review.date}
                        description={review.description}
                    />
                ))}
            </div>


            {/* Awards and review badges section - single row on large screens, stacked on mobile */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 mt-18 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-2">
                {/* TripAdvisor badges row */}
                <div className="flex flex-col items-center justify-center pb-3 lg:pb-0 px-4 py-1">
                    <div className="flex flex-row gap-2 items-end justify-center whitespace-nowrap">
                        {/* Card style for each badge */}
                        <div className="bg-white border-white-300 shadow-md flex flex-col items-center justify-center  hover:border-white-500 transition-all duration-300">
                            <img src="/2018.png" alt="2018 TripAdvisor" className="w-38 h-38 object-contain hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="bg-white border-white-300 shadow-md flex flex-col items-center justify-center hover:border-white-500 transition-all duration-300">
                            <img src="/2021.png" alt="2021 TripAdvisor" className="w-38 h-38 object-contain hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="bg-white border-white-300 shadow-md flex flex-col items-center justify-center hover:border-white-500 transition-all duration-300">
                            <img src="/2022.png" alt="2022 TripAdvisor" className="w-38 h-38 object-contain hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="bg-white border-white-300 shadow-md flex flex-col items-center justify-center hover:border-white-500 transition-all duration-300">
                            <img src="/2023.png" alt="2023 TripAdvisor" className="w-38 h-38 object-contain hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="bg-white border-white-300 shadow-md flex flex-col items-center justify-center hover:border-white-500 transition-all duration-300">
                            <img src="/2024.png" alt="2024 TripAdvisor" className="w-38 h-38 object-contain hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                    <h2 className="font-bold text-base xs:text-lg sm:text-xl md:text-2xl mt-3 mb-2 text-center text-neutral-400 leading-tight max-w-xs sm:max-w-md md:max-w-lg">5-TIME TRAVELER’S CHOICE AWARD</h2>
                </div>
                
                {/* Google and TripAdvisor review badges */}
                <div className="flex flex-col gap-8 items-center justify-center max-w-xs min-w-[220px] mb-3 lg:mb-0">
                    <div className="w-full bg-white-100 border-white-800 p-3 shadow-md flex items-center gap-3 rounded-lg hover:border-white-500 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img src="/google.png" alt="Google" className="w-10 h-10 drop-shadow-md transition-transform duration-300" />
                        <span className="font-bold text-lg text-neutral-400">Google Review 1000+</span>
                    </div>
                    <div className="w-full bg-white-100 border-white-800 p-3 shadow-md flex items-center gap-3 rounded-lg hover:border-white-500 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img src="/tripadvisor.png" alt="TripAdvisor" className="w-10 h-10 drop-shadow-md transition-transform duration-300" />
                        <span className="font-bold text-lg text-neutral-400">TripAdvisor No 1</span>
                    </div>
                </div>
            </div>


            {/* Award subtext */}
            <div className="mt-4 text-center">
                <p className="font-semibold text-base text-neutral-400 md:text-xl">Proudly recognized by TripAdvisor for 5 consecutive years for outstanding service and guest satisfaction.</p>
            </div>
        </div>
    );
}

export default Reviews;