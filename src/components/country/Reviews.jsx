import React from 'react'
import { motion } from 'framer-motion';

const ReviewsCard = (props) => {
    return (
        <motion.div
            className='w-full md:w-1/3 bg-gray-100 border-2 border-gray-300 pt-8 md:border-none p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105'
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
                <p className='text-black-600 xl:text-[16px] ml-1 leading-relaxed hover:text-gray-800 transition-colors duration-300'>
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
                className='text-3xl md:text-4xl lg:text-5xl mb-8 font-bold text-neutral-400 text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >
                Reviews
            </motion.h1>
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



        </div>
    );
}

export default Reviews;