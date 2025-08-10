import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
    return (
        <div>
            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: "url('/terms.jpg')" }} id='Header'>
                <Navbar />
                <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='font-[montserrat] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[100px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
                        Terms and Conditions
                    </h2>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">

                <motion.div
                    className="space-y-6 text-neutral-400"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-400 mb-8 md:mb-10">
                            <span className="font-semibold">01)</span> Reservation
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            The Surfer would request a 25% minimum non refundable pre payment to reserve your
                            reservation,The Surfer would request 25% to 100% pre payment before your check in
                            for the certain time of periods in high season.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-400 mb-8 md:mb-10">
                            <span className="font-semibold">02)</span> Making Online payment Via Web site
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            The client must book via web site email, official phone or official whatsapp or authorized
                            surf travel company and must have a booking confirmation email after the pre payment.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-400 mb-8 md:mb-10">
                            <span className="font-semibold">03)</span> Cancellation
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            21 days before check in date 25% of pre payment is refundable. <br /> Reservation mades
                            for the dates on high season and certain times of period would not eligible for
                            any kind of refund, you hereby agree to The Surfer camp to charge the credit card
                            100% full reservation cost for such reservation on no show or cancellation.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-400 mb-8 md:mb-10">
                            <span className="font-semibold">04)</span> Basic Requirement
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            The client who expecting to participate to the surf camp must be able to swim.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-400 mb-8 md:mb-10">
                            <span className="font-semibold">05)</span> Medical Condition
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            The Customer hereby declares that the Customer does not suffer from any medical condition
                            which may prevent the Customer undertaking the surf camp, including but not limited to
                            acrophobia, epilepsy, dizziness, limb or back injury, angina or other heart condition,
                            severe or uncontrolled asthma, visual impairment, depression or recovering from
                            recent surgery. <br /> Customer agree that The Surfer Surfcamp not reliable for any
                            injuries, accidents can occur during customer training period neither a refund
                            because they re unable to complete their training course due to any occurred
                            medical conditions or accidents during their stay.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-400 mb-8 md:mb-10">
                            <span className="font-semibold">06)</span> Customer Property
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            Each Customer is solely responsible and liable for safekeeping of all the property
                            of the Customer. The Surf Surfcamp has no responsibility for any loss or damage of
                            any property of any Customer.
                        </p>
                    </motion.div>

                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Terms;
