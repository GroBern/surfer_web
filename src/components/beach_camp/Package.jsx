import React from 'react'
import { motion } from 'framer-motion'

const Package = () => {
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
            BOOK YOUR SURF EXPERIENCE
          </h1>
          <h2 className="text-lg text-neutral-400 text-center font-semibold mb-6">
            FOLLOWING INCLUDED IN OUR SURF PACKAGES
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b-3 border-black-300"></th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  Surf And Yoga Package
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  Full Surf Package Package
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  Moderate Surf Package
                </th>
              </tr>
            </thead>
            <tbody>
               <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Surf Lessons</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  06 Surf Lessons or Guiding / Week
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  11 Surf Lessons
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  06 Surf Lessons or Guiding
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Yoga</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  Sunrise or Sunset Everyday
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  02 Sessions / Week
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  02 Sessions / Week
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">07 nights accommodation</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Breakfast Everyday</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dinner - Everyday except Sunday</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Surf Theory Classes</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Video Analysis</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Daily Social Activities</td>
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
                  Surf And Yoga Package
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  Full Surf Package Package
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  Moderate Surf Package
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Mixed Dormitory Bed
                  <div className="text-xs text-gray-500">Max ( 05 people )</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
              </tr>
              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Private Single Room
                  <div className="text-xs text-gray-500">Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Private Double / Twin Room
                  <div className="text-xs text-gray-500">Per Person / Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Private Triple Room
                  <div className="text-xs text-gray-500">Per Person / Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Rates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default Package
