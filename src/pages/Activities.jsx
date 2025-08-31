import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";
import { useTranslation } from 'react-i18next';

const Activities = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("activities.pageTitle");
    }, [t]);

    return (
        <div>
            {/* Header Section */}
            <div
                className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: "url('/activities.jpg')" }}
                id='Header'
            >
                <Navbar />
                <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='font-[montserrat] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[100px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
                        {t("activities.header")}
                    </h2>
                </div>
            </div>

            {/* Boat Party Section */}
            <div className="max-w-7xl mx-auto px-4 py-15 text-center mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-600 mb-4">
                    {t("activities.boatParty.title")}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-15 max-w-3xl mx-auto">
                    {t("activities.boatParty.desc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img src="/activities/acti-1.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                    <img src="/activities/acti-2.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                    <img src="/activities/acti-3.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                </div>
            </div>

            {/* Boat Party Video */}
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <div className="w-full h-72 md:h-96 overflow-hidden shadow-md">
                    <video
                        src="/videos/boat-party.mp4"
                        controls
                        className="w-full h-full object-cover"
                        aria-label={t("activities.videoSection.boatPartyVideo")}
                    />
                </div>
            </div>

            {/* Booking CTA */}
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-600 mb-6">
                    {t("activities.booking.title")}
                </h2>
                <button
                    onClick={() =>
                        window.location.replace(
                            "https://main.d7z80586kqd0r.amplifyapp.com/"
                        )
                    }
                    className="bg-[#0a67b3] hover:bg-[#095a99] text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
                >
                    {t("activities.booking.button")}
                </button>
            </div>

            {/* Meet People Section */}
            <div className="max-w-7xl mx-auto px-4 py-15 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-600 mb-4">
                    {t("activities.meetPeople.title")}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-15 max-w-3xl mx-auto">
                    {t("activities.meetPeople.desc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img src="/activities/friends1.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                    <img src="/activities/acti-5.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                    <img src="/activities/people2.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                </div>
            </div>

            {/* Surf Holiday Section */}
            <div className="max-w-7xl mx-auto px-4 py-15 text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-neutral-600 mb-4">
                    {t("activities.surfHoliday.title")}
                </h1>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                    {t("activities.surfHoliday.desc")}
                </p>
            </div>

            {/* Image Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-12">
                <div className="w-full h-100 overflow-hidden shadow-md">
                    <img src="/activities/main1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-100 overflow-hidden shadow-md">
                    <img src="/activities/main3.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Banner Image */}
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <div className="w-full h-72 md:h-96 overflow-hidden shadow-md">
                    <img src="/activities/main2.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Friends for Life Section */}
            <div className="max-w-7xl mx-auto px-4 py-15 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-600 mb-4">
                    {t("activities.friendsForLife.title")}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-15 max-w-3xl mx-auto">
                    {t("activities.friendsForLife.desc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <img src="/activities/info_4.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                    <img src="/activities/info_5.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                    <img src="/activities/info_6.jpg" alt="" className="w-full h-80 object-cover shadow-md" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Activities;
