import React, { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t, i18n } = useTranslation();
  const [mapType, setMapType] = useState('roadmap'); // 'roadmap' | 'satellite'

  const getMapUrl = (type) => {
    if (type === 'satellite') {
      return "https://www.google.com/maps/d/u/0/embed?mid=143OMjTuK-AhYM-qH7Q6oWjUdbR1Ipzo&ehbc=2E312F&noprof=1";
    }
    return "https://www.google.com/maps/d/u/0/embed?mid=1eyLNjtlI_SDho4Ugvmqo0LXh895Se-o&ehbc=2E312F&noprof=1";
  };

  const viewKey = mapType === 'satellite' ? 'satellite' : 'map';
  const locationLabel = t('map.location');
  const viewLabel = t(`map.viewLabel.${viewKey}`);
  const iframeTitle = t('map.iframeTitle', { location: locationLabel, view: viewLabel });

  return (
    <motion.div
      className="max-w-8xl mx-auto pt-10"
      dir={i18n.dir()}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Map Header */}
        <motion.div
          className="bg-gray-50 px-4 py-3 border-b border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex gap-2">
            <button
              onClick={() => setMapType('roadmap')}
              aria-label={t('map.aria.toggleMap')}
              aria-pressed={mapType === 'roadmap'}
              className={`px-3 py-1 text-sm font-medium border border-gray-300 rounded shadow-sm transition-colors uppercase ${
                mapType === 'roadmap'
                  ? 'text-gray-700 bg-white'
                  : 'text-gray-500 bg-gray-50 hover:bg-white hover:text-gray-700'
              }`}
            >
              {t('map.buttons.map')}
            </button>
            <button
              onClick={() => setMapType('satellite')}
              aria-label={t('map.aria.toggleSatellite')}
              aria-pressed={mapType === 'satellite'}
              className={`px-3 py-1 text-sm font-medium border border-gray-300 rounded shadow-sm transition-colors uppercase ${
                mapType === 'satellite'
                  ? 'text-gray-700 bg-white'
                  : 'text-gray-500 bg-gray-50 hover:bg-white hover:text-gray-700'
              }`}
            >
              {t('map.buttons.satellite')}
            </button>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative h-80 md:h-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            key={mapType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <iframe
              src={getMapUrl(mapType)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px]"
              title={iframeTitle}
            />
          </motion.div>

          {/* Map Controls (visual only) */}
          <motion.div
            className="absolute top-4 right-4 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <button
              aria-label={t('map.aria.zoomIn')}
              className="w-8 h-8 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 flex items-center justify-center text-gray-600 font-bold"
              type="button"
            >
              +
            </button>
            <button
              aria-label={t('map.aria.zoomOut')}
              className="w-8 h-8 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 flex items-center justify-center text-gray-600 font-bold"
              type="button"
            >
              −
            </button>
          </motion.div>
        </motion.div>

        {/* Map Footer */}
        <motion.div
          className="bg-gray-50 px-4 py-3 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="text-center">
              <span className="font-medium">{locationLabel}</span>
              <span className="text-xs text-gray-500 ml-2">
                ({viewLabel})
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Map;
