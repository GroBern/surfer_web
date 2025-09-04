import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useTranslation } from "react-i18next";
import Difference from "../components/Difference";
import { motion as Motion } from 'framer-motion';
import Rate_Difference from "../components/Rate_Difference";

const PackageSection = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Package Features Table */}
      <motion.div
        className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="px-6 py-6">
          <motion.h1 className="text-center text-3xl text-neutral-400 font-bold mb-4">
            {t("beachPackages.title")}
          </motion.h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th></th>
                <th className="text-center">{t("beachPackages.packages.surfAndYoga")}</th>
                <th className="text-center">{t("beachPackages.packages.fullSurf")}</th>
                <th className="text-center">{t("beachPackages.packages.moderateSurf")}</th>
              </tr>
            </thead>
            <tbody>
              {t("beachPackages.features", { returnObjects: true }).map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-300 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}
                >
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{row.surfAndYoga}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{row.fullSurf}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{row.moderateSurf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Accommodation Table */}
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b-3 border-black-300">
                <th></th>
                <th className="text-center">{t("beachPackages.packages.surfAndYoga")}</th>
                <th className="text-center">{t("beachPackages.packages.fullSurf")}</th>
                <th className="text-center">{t("beachPackages.packages.moderateSurf")}</th>
              </tr>
            </thead>
            <tbody>
              {t("beachPackages.accommodation", { returnObjects: true }).map((row, idx) => (
                <tr key={idx} className={`border-b border-gray-300 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {row.name}
                    {row.note && <div className="text-xs text-gray-500">{row.note}</div>}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{row.surfAndYoga}</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{row.fullSurf}</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{row.moderateSurf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

const Package = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Package Features Table */}
      <motion.div
        className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="px-6 py-6">
          <h1 className="text-center text-3xl text-neutral-400 font-bold mb-4">
            {t("ts2Packages.title")}
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th></th>
                <th className="text-center">{t("ts2Packages.packages.surfAndYoga")}</th>
                <th className="text-center">{t("ts2Packages.packages.fullSurf")}</th>
                <th className="text-center">{t("ts2Packages.packages.moderateSurf")}</th>
              </tr>
            </thead>
            <tbody>
              {t("ts2Packages.features", { returnObjects: true }).map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-300 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}
                >
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{row.surfAndYoga}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{row.fullSurf}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{row.moderateSurf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Accommodation Table */}
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b-3 border-black-300">
                <th></th>
                <th className="text-center">{t("ts2Packages.packages.surfAndYoga")}</th>
                <th className="text-center">{t("ts2Packages.packages.fullSurf")}</th>
                <th className="text-center">{t("ts2Packages.packages.moderateSurf")}</th>
              </tr>
            </thead>
            <tbody>
              {t("ts2Packages.accommodation", { returnObjects: true }).map((row, idx) => (
                <tr key={idx} className={`border-b border-gray-300 ${idx % 2 === 1 ? "bg-gray-50" : ""}`}>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {row.name}
                    {row.note && <div className="text-xs text-gray-500">{row.note}</div>}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{row.surfAndYoga}</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{row.fullSurf}</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{row.moderateSurf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

const SurfLessonPackages = () => {
  useEffect(() => {
    document.title = "Rates - The Surfer";
  }, []);

  return (
    <div>
      <div className='h-150 mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
        style={{ backgroundImage: "url('/rates.jpg')" }} id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
          <h2 className='font-[montserrat] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
            Packages & Rates
          </h2>
        </div>
      </div>

      <PackageSection />

      <Package />

    <div className="mt-15"> {/* mt-5 = 20px (5 × 4px) */}
      <Rate_Difference />
    </div>



      <Motion.div
              className='flex flex-col items-center justify-center mt-16 mb-16 px-4 py-12 bg-gradient-to-b from-blue-50 to-white'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Motion.div
                className='max-w-6xl w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src="ts2_camp/map.jpg"
                  alt="TS2 Camp Location Map"
                  className='w-full h-auto object-cover'
                />
              </Motion.div>
            </Motion.div>

      <Footer />
    </div>
  );
};

export default SurfLessonPackages;