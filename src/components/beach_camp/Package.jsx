import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Package = () => {
  const { t } = useTranslation();

  // Headings
  const bookTitle = t('packagesPage.bookTitle');
  const included = t('packagesPage.included');

  // Read Beach Camp tables from JSON
  const title = t('beachPackages.title');
  const packages = t('beachPackages.packages', { returnObjects: true });         // { surfAndYoga, fullSurf, moderateSurf }
  const features = t('beachPackages.features', { returnObjects: true });         // [{ name, surfAndYoga, fullSurf, moderateSurf }, ...]
  const accommodation = t('beachPackages.accommodation', { returnObjects: true });// [{ name, note, surfAndYoga, fullSurf, moderateSurf }, ...]

  const cols = [
    { key: 'surfAndYoga', label: packages.surfAndYoga },
    { key: 'fullSurf', label: packages.fullSurf },
    { key: 'moderateSurf', label: packages.moderateSurf }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Features table */}
      <motion.div
        className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="px-6 py-6">
          <h1 className="text-center text-3xl text-neutral-400 font-bold mb-1">
            {bookTitle}
          </h1>
          <h2 className="text-lg text-neutral-400 text-center font-semibold">
            {included}
          </h2>
          {/* Optional: show localized table title */}
          <p className="text-center text-sm text-neutral-400 mt-2">{title}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900"></th>
                {cols.map(c => (
                  <th key={c.key} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className={(i % 2 === 1 ? 'bg-gray-50 ' : '') + 'border-b border-gray-300'}>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.name}</td>
                  {cols.map(c => (
                    <td key={c.key} className="px-6 py-4 text-center text-sm text-gray-900">
                      {row[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Accommodation / prices table */}
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
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900"></th>
                {cols.map(c => (
                  <th key={c.key} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {accommodation.map((row, i) => (
                <tr key={i} className={(i % 2 === 1 ? 'bg-gray-50 ' : '') + 'border-b border-gray-300'}>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {row.name}
                    {row.note && <div className="text-xs text-gray-500">{row.note}</div>}
                  </td>
                  {cols.map(c => (
                    <td key={c.key} className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                      {row[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default Package
