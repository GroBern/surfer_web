import React from 'react';
import { Facebook, Instagram,  } from 'lucide-react';
import Whatsapp from './Whatsapp';

const FooterStats = () => (
  <div className="bg-sky-200 py-10 w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 md:divide-x divide-cyan-200">
      <div className="flex-1 flex flex-col items-center px-8">
        <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">10+</span>
        <span className="text-base md:text-lg text-gray-500 font-semibold text-center">Surf Instructors Trained<br/>Developing local talent across borders.</span>
      </div>
      <div className="flex-1 flex flex-col items-center px-8">
        <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">10,000+</span>
        <span className="text-base md:text-lg font-semibold text-gray-500 text-center">Surf Sessions Delivered<br/>From beginners to wave chasers.</span>
      </div>
      <div className="flex-1 flex flex-col items-center px-8">
        <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">17+</span>
        <span className="text-base md:text-lg font-semibold text-gray-500 text-center">Countries Represented by Our Guests<br/>Join an international surf tribe.</span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#0a67b3] text-white pt-12 pb-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start px-1 gap-10 md:gap-0">
      <div className="flex flex-col items-center md:items-start mb-8 mr-10 pr-10 md:mb-0">
        <img src="/logo1.png" alt="The Surfer Logo" className="h-20 w-auto mb-6" />
        <div className="flex gap-4">
          <a href="#" className="bg-white rounded-full p-2 hover:bg-cyan-200 transition"><Facebook className="h-6 w-6 text-[#0a67b3]" /></a>
          <a href="#" className="bg-white rounded-full p-2 hover:bg-cyan-200 transition"><Instagram className="h-6 w-6 text-[#0a67b3]" /></a>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-25">
        <div className="pl-10 mr-1 ">
          <h3 className="font-semibold mb-3 text-lg">About us</h3>
          <p className="text-sm text-white/90 leading-relaxed">The Surfer Surf Camps in Sri Lanka Fully Owned By Local Surfer Who born and grow up in Weligama, Sri Lanka. Located Heart of Surfing Area in Weligama, not just that there are nine to ten surf spots where you can reach within five to ten minutes Tuk Tuk ride.</p>
        </div>
        <div className="pl-16 ml-16 mr-6 pr-6">
          <h3 className="font-semibold mb-3 text-lg">The Surfer</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>
        <div className="pl-10">
          <h3 className="font-semibold mb-3 text-lg">Support</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:underline">Terms of Conditions</a></li>
            <li><a href="/imprint" className="hover:underline">Imprint</a></li>
            <li><a href="/policy" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <Whatsapp/>
  </footer>
);

export { FooterStats, Footer };
