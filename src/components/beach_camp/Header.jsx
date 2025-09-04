import React from 'react'
import Navbar from '../Navbar'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();

  const title = t('headers.beach.title');
  const subtitle = t('headers.beach.subtitle');
  const bgImage = t('headers.beach.bgImage'); // allows per-locale hero

  return (
    <div
      id="Header"
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url('${bgImage}')` }}
      aria-label={title}
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white">
        <h2 className="font-[montserrat] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2">
          {title}
        </h2>
        <p className="text-lg sm:text-xl font-normal md:text-2xl lg:text-3xl mt-4">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Header
