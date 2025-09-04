import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import SurfingJourney from "../components/SurfingJourney";
import SurfingJourneyIcons from "../components/SurfingJourneyIcons";
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
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  // Localized <title>
  useEffect(() => {
    document.title = t("home.pageTitle");
  }, [i18n.resolvedLanguage, t]);

  // Cards from JSON (we expect [card1, card2, cardMorocco])
  const cards = t("home.cards", { returnObjects: true });

  // Small guards if someone removes items accidentally
  const card1 = cards?.[0];
  const card2 = cards?.[1];
  const cardMorocco = cards?.[2];

  return (
    <div>
      {/* HERO with background video */}
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
          <h2
            className="font-[montserrat] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold mt-16 sm:mt-8 md:mt-4 max-w-full sm:max-w-3xl mx-auto"
            style={{ whiteSpace: "pre-line" }} // render \n in JSON
          >
            {t("home.hero.heading")}
          </h2>
        </div>
      </div>

      <SurfingJourney />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SurfingJourneyIcons />
      </motion.div>

      {/* SRI LANKA SECTION */}
      <div className="max-w-7xl mx-auto py-10">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              image="image.png"
              title={t("home.sections.sriLankaCardTitle")}
              link="/srilanka"
              index={0}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {card1 && (
            <motion.div
              className="transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SurfCardWithSlider
                images={card1.images}
                topic={card1.topic}
                body1={card1.body1}
                link={card1.link}
                index={0}
              />
            </motion.div>
          )}

          {card2 && (
            <motion.div
              className="transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SurfCardWithSlider
                images={card2.images}
                topic={card2.topic}
                body1={card2.body1}
                link={card2.link}
                index={1}
              />
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 items-center mt-8">
          <div className="lg:col-span-3">
            <Difference />
          </div>
        </div>
      </div>

      {/* MOROCCO SECTION */}
      <div className="max-w-7xl mx-auto py-10">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 gap-8">
            <ImageCard
              image="morocco.jpg"
              title={t("home.sections.moroccoCardTitle")}
              link="/morocco"
              index={0}
            />
          </div>
        </div>

        <div className="flex flex-col sm:grid grid-cols-2 gap-6 mb-10 place-items-center">
          {cardMorocco && (
            <motion.div
              className="transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SurfCardWithSlider
                images={cardMorocco.images}
                topic={cardMorocco.topic}
                body1={cardMorocco.body1}
                link={cardMorocco.link}
                index={3}
              />
            </motion.div>
          )}

          <p className="text-gray-700">
            {t("home.sections.styleCampNote")}
          </p>
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
              {t("home.cta.bookNow")}
              {/* Or reuse: t("activities.booking.button") */}
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
