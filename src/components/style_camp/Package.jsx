import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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
            {t('moroccoPackage1.title')}
          </h1>
          <h2 className="text-lg text-neutral-400 text-center font-semibold mb-6">
            {t('moroccoPackage1.subtitle')}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b-3 border-black-300"></th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  {t('moroccoPackage1.columns.yogaSurf')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  {t('moroccoPackage1.columns.fullSurf')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  {t('moroccoPackage1.columns.moderate')}
                </th>
              </tr>
            </thead>
            <tbody>
               <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.surfLessons.label')}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('moroccoPackage1.rows.surfLessons.yogaSurf.line1')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.yogaSurf.line2')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.yogaSurf.line3')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.yogaSurf.line4')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.yogaSurf.line5')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('moroccoPackage1.rows.surfLessons.fullSurf.line1')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.fullSurf.line2')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.fullSurf.line3')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.fullSurf.line4')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.fullSurf.line5')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('moroccoPackage1.rows.surfLessons.moderate.line1')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.moderate.line2')}<br/>
                  {t('moroccoPackage1.rows.surfLessons.moderate.line3')}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.yoga.label')}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('moroccoPackage1.rows.yoga.yogaSurf')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('common4.notIncluded')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  {t('common4.notIncluded')}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.accommodation')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.breakfast')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.lunch')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.dinner')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.bbq')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.surfTheory')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">{t('common4.notIncluded')}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.videoAnalysis')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">{t('common4.notIncluded')}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.wifi')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.water')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.cleaning')}</td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-600 text-xl">✓</span></td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.pickup')}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">{t('common4.included')}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">{t('common4.included')}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">{t('common4.included')}</td>
              </tr>
              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{t('moroccoPackage1.rows.dayTrip')}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  <span className="text-green-600 text-xl">✓ </span>{t('moroccoPackage1.rows.dayTripNote1')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  <span className="text-green-600 text-xl">✓ </span>{t('moroccoPackage1.rows.dayTripNote2')}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  <span className="text-green-600 text-xl">✓ </span>{t('moroccoPackage1.rows.dayTripNote3')}
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
                  {t('moroccoPackage1.columns.yogaSurf')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  {t('moroccoPackage1.columns.fullSurf')}
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  {t('moroccoPackage1.columns.moderate')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('moroccoPackage1.prices.shared.label')}
                  <div className="text-xs text-gray-500">{t('moroccoPackage1.prices.perPersonPerWeek')}</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.shared.yogaSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.shared.fullSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.shared.moderate')}</td>
              </tr>
              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('moroccoPackage1.prices.double.label')}
                  <div className="text-xs text-gray-500">{t('moroccoPackage1.prices.perPersonPerWeek')}</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.double.yogaSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.double.fullSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.double.moderate')}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('moroccoPackage1.prices.doubleTerrace.label')}
                  <div className="text-xs text-gray-500">{t('moroccoPackage1.prices.perPersonPerWeek')}</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.doubleTerrace.yogaSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.doubleTerrace.fullSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.doubleTerrace.moderate')}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {t('moroccoPackage1.prices.doubleSuite.label')}
                  <div className="text-xs text-gray-500">{t('moroccoPackage1.prices.perPersonPerWeek')}</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.doubleSuite.yogaSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.doubleSuite.fullSurf')}</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">{t('moroccoPackage1.prices.doubleSuite.moderate')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default Package
