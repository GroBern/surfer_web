import React, { useState } from "react";
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";
import FAQ from "../components/FAQ";



const Faq = () => {


    return (
        <div>

            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: "url('/faq.jpg')" }} id='Header'>
                <Navbar />
                <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='font-[montserrat] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[120px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
                        Faq
                    </h2>
                </div>
            </div>

            <FAQ />

            <Footer />
        </div>
    );
};

export default Faq;