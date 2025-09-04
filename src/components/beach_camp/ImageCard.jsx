import React from 'react'
import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ImageCard = () => {
  const { t } = useTranslation();
  const images = t('imageCard.images', { returnObjects: true });

  return (
    <Motion.div 
      className="flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-12 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full w-8xl items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Motion.div 
          className="relative overflow-hidden shadow-md"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <img 
            src="/beach_camp/image_1.jpg" 
            alt={images[0].alt}
            className="w-full h-48 md:h-60 object-cover"
          />
        </Motion.div>

        <Motion.div 
          className="relative overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <img 
            src="/beach_camp/I3.jpg" 
            alt={images[1].alt}
            className="w-full h-48 md:h-60 object-cover"
          />
        </Motion.div>

        <Motion.div 
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div 
            className="relative overflow-hidden shadow-md"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img 
              src="/beach_camp/surfcard4.jpg" 
              alt={images[2].alt}
              className="w-full h-48 md:h-60 object-cover"
            />
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </Motion.div>
  )
}

export default ImageCard
