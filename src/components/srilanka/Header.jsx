import React from 'react';
import Navbar from '../Navbar';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/image.png')" }}
      id="Header"
      aria-label={t('header.aria.section')}
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white">
        <h2 className="font-[montserrat] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2">
          {t('header.title')}
        </h2>
      </div>
    </div>
  );
};

export default Header;
