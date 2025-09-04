import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Package = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="px-6 py-6">
          <h1 className="text-center text-3xl text-neutral-400 font-bold mb-4">
            {t('packageTable.title')}
          </h1>
          <h2 className="text-lg text-neutral-400 text-center font-semibold mb-6">
            {t('packageTable.subtitle')}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b-3 border-black-300"></th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  {t('packageTable.headers.surfAndYoga')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  {t('packageTable.headers.fullSurf')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  {t('packageTable.headers.moderateSurf')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.surfLessons.name')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('packageTable.rows.surfLessons.surfAndYoga')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('packageTable.rows.surfLessons.fullSurf')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('packageTable.rows.surfLessons.moderateSurf')}
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.yoga.name')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('packageTable.rows.yoga.surfAndYoga')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('packageTable.rows.yoga.fullSurf')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('packageTable.rows.yoga.moderateSurf')}
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.nights.name')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>

              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.breakfast.name')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.dinner.name')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>

              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.surfTheory.name')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.videoAnalysis.name')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>

              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.rows.dailySocial.name')}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-green-600 text-xl">✓</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b"></th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  {t('packageTable.headers.surfAndYoga')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  {t('packageTable.headers.fullSurf')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  {t('packageTable.headers.moderateSurf')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.accommodation.dorm.name')}
                  <div className="text-xs text-gray-500">
                    {t('packageTable.accommodation.dorm.note')}
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">350 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">390 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">290 €</td>
              </tr>

              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.accommodation.single.name')}
                  <div className="text-xs text-gray-500">
                    {t('packageTable.accommodation.single.note')}
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">450 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">490 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">390 €</td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.accommodation.doubleTwin.name')}
                  <div className="text-xs text-gray-500">
                    {t('packageTable.accommodation.doubleTwin.note')}
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">350 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">390 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">290 €</td>
              </tr>

              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('packageTable.accommodation.triple.name')}
                  <div className="text-xs text-gray-500">
                    {t('packageTable.accommodation.triple.note')}
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">350 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">390 €</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">290 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Package;
