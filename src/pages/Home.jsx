import React from "react";
import { motion } from "framer-motion"; 
import Header from "../components/Header";
import SurfingJourney from "../components/SurfingJourney";
import SurfCampCard from "../components/SurfCard";
import SurfCardWithSlider from "../components/SurfCardWithSlider";
import ChooseSurfCamp from "../components/ChooseSurf";
import ImageCard from "../components/ImageCard";
import SurfurWay from "../components/SurfurWay";
import SurfPackageCard from "../components/Packages";
import Difference from "../components/Difference";
import Activities from "../components/Activities";
import MasonryGrid from "../components/Follow";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Blogs from "../components/Blogs";
import { Footer } from "../components/Footer";
import { FooterStats } from "../components/Footer";
import { link } from "framer-motion/client";
import Navbar from "../components/Navbar";


const Home = () => {
  const cards = {
    card1: {
      images: [
        "beach_camp/11.jpg",
        "beach_camp/bathroom01.jpg", 
        "beach_camp/bathroom02.jpg",
        "beach_camp/BATHROOM.jpg"
      ],
      topic: "The Surfer Beach Surf Camp",
      body1:
        "Join us at the ultimate destination for surf enthusiasts. Experience the thrill of riding the waves and enjoy the serene beauty of the ocean.",
      link: "/beach-camp",
    },

    card2: {
      images: [
        "ts2_camp/surfdays_1.jpg",
        "ts2_camp/surfdays_2.jpg",
        "ts2_camp/surfdays_3.jpg",
        "ts2_camp/surfdays_4.jpg"
      ],
      topic: "TS2 Surf Camp",
      body1:
        "Feel the magic of surfing as the sun sets over the horizon. Our guided sunset sessions are a perfect way to end your beach day.",
      link: "/ts2-camp",
    },

    card4: {
      pic: "surfstyle.jpg",
      topic: "The Surfer Surf Style - Morocco",
      body1:
        "Take your skills to the next level with our advanced surf training camp. Designed for serious surfers seeking to improve technique and form.",
      link: "/style-camp",
    },
  };

  return (
    <div>

      <div className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex items-center mb-4">
        <Navbar />

        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/Surf.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="container relative z-10 text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white">
          <h2 className="font-[montserrat] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold mt-16 sm:mt-8 md:mt-4 max-w-full sm:max-w-3xl mx-auto">
            The Surfer <br /> Surf Camps
          </h2>
        </div>
      </div>


      <SurfingJourney />

      <div className="max-w-7xl mx-auto py-10">
        <div className="max-w-xl mx-auto mb-16">
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              image="image.png"
              title="Sri Lanka"
              link="/srilanka"
              index={0}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            className="transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SurfCardWithSlider
              images={cards.card1.images}
              topic={cards.card1.topic}
              body1={cards.card1.body1}
              body2={cards.card1.body2}
              link={cards.card1.link}
              index={0}
            />
          </motion.div>
          <motion.div
            className="transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SurfCardWithSlider
              images={cards.card2.images}
              topic={cards.card2.topic}
              body1={cards.card2.body1}
              body2={cards.card2.body2}
              link={cards.card2.link}
              index={1}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 items-center mt-8">
          <div className="lg:col-span-3">
            <Difference />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <div className="max-w-xl mx-auto mb-16">
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              image="morocco.jpg"
              title="Morocco"
              link="/morocco"
              index={1}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          <motion.div
            className="transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SurfCampCard
              pic={cards.card4.pic}
              topic={cards.card4.topic}
              body1={cards.card4.body1}
              body2={cards.card4.body2}
              link={cards.card4.link}
              index={3}
            />
          </motion.div>
        </div>

      
        <div className="flex justify-center w-full mt-4 sm:mt-6 mb-3 sm:mb-4">
          <motion.div
            className="transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <a
              className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium border border-black rounded-full text-black hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
              href="/style-camp"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ChooseSurfCamp />
      </motion.div>

      {/* <SurfurWay /> */}

      <Activities />

      <MasonryGrid />

      <Reviews />

      <FAQ />

      <Blogs />

      <FooterStats />

      <Footer />
    </div>
  );
};

export default Home;