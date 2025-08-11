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
                  Yoga & Surf in Tamraght
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  Surf Coaching (Full Surf)
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b-3 border-black-300">
                  Surf Guiding (Moderate)
                </th>
              </tr>
            </thead>
            <tbody>
               <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Surf Lessons</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  6 days surf <br/> 1 lesson/day (1hour yoga + surf session) 
                  <br/> Equipment included (Neoprene wetsuit & board) <br/> Qualified local instructors
                  <br/> Daily transport to surf spots adapted to your level
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                   6 days surf <br/> 2 surf sessions/day 
                  <br/> Equipment included (Neoprene wetsuit & board) <br/> Qualified local instructors
                  <br/> Daily transport to surf spots adapted to your level
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                   6 days guiding <br/> Professional and competent surf guides 
                  <br/> Daily transport to surf spots adapted to your level
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Yoga</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  Sunrise or sunset yoga every day (1 hour/session)
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  Not included
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  Not included
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Accommodation</td>
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
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">BBQ Night - 1 per week outside</td>
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
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  Not included
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
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  Not included
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Free Wi-Fi</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Drinking Water</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Daily Cleaning of Rooms</td>
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
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">Day Trip</td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  <span className="text-green-600 text-xl">✓ </span> (1 day Imsouane Morocco magic bay trip) 
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  <span className="text-green-600 text-xl">✓ </span> (1 day Imsouane magic bay trip)  
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-900">
                  <span className="text-green-600 text-xl">✓ </span> (1 day Imsouane magic bay trip) 
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
                  Yoga & Surf in Tamraght 
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  Surf Coaching (Full Surf)
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                  Surf Guiding (Moderate)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Shared Room
                  <div className="text-xs text-gray-500">Per Person / Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">99 € daily / 598 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">83 € daily / 510 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">80 € daily / 480 € weekly</td>
              </tr>
              <tr className="border-b bg-gray-50 border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Double Room
                  <div className="text-xs text-gray-500">Per Person / Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">100 € daily / 600 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">85 € daily / 510 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">83 € daily / 490 € weekly</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Double with Terrace
                  <div className="text-xs text-gray-500">Per Person / Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">103 € daily / 618 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">87 € daily / 522 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">87 € daily / 522 € weekly</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  Double Suite
                  <div className="text-xs text-gray-500">Per Person / Per Week</div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">106 € daily / 636 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">90 € daily / 540 € weekly</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">90 € daily / 540 € weekly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default Package
