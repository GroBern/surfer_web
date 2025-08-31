import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Whatsapp from './Whatsapp';
import { useTranslation } from 'react-i18next';

const FooterStats = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-sky-200 py-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 md:divide-x divide-cyan-200">
        
        <div className="flex-1 flex flex-col items-center px-8">
          <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">
            10+
          </span>
          <span className="text-base md:text-lg text-gray-500 font-semibold text-center">
            {t("footer.stats.instructors")}
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center px-8">
          <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">
            10,000+
          </span>
          <span className="text-base md:text-lg font-semibold text-gray-500 text-center">
            {t("footer.stats.sessions")}
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center px-8">
          <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">
            17+
          </span>
          <span className="text-base md:text-lg font-semibold text-gray-500 text-center">
            {t("footer.stats.countries")}
          </span>
        </div>

      </div>
    </div>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a67b3] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start px-1 gap-10 md:gap-0">
        
        {/* Logo + Social */}
        <div className="flex flex-col items-center md:items-start mb-8 mr-10 pr-10 md:mb-0">
          <img src="/logo1.png" alt="The Surfer Logo" className="h-20 w-auto mb-6" />
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Thesurferweligama/"
              target='_blank'
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:bg-cyan-200 transition"
            >
              <Facebook className="h-6 w-6 text-[#0a67b3]" />
            </a>
            <a
              href="https://www.instagram.com/thesurfer_srilanka/"
              target='_blank'
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:bg-cyan-200 transition"
            >
              <Instagram className="h-6 w-6 text-[#0a67b3]" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-25">
          <div className="pl-10 mr-1">
            <h3 className="font-semibold mb-3 text-lg">{t("footer.about.title")}</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {t("footer.about.desc")}
            </p>
          </div>

          <div className="pl-10">
            <h3 className="font-semibold mb-3 text-lg">{t("footer.links.title")}</h3>
            <ul className="space-y-2">
              <li><a href="/blogs" className="hover:underline">{t("footer.links.blog")}</a></li>
              <li><a href="/contact" className="hover:underline">{t("footer.links.contact")}</a></li>
            </ul>
          </div>

          <div className="pl-10">
            <h3 className="font-semibold mb-3 text-lg">{t("footer.support.title")}</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:underline">{t("footer.support.terms")}</a></li>
              <li><a href="/imprint" className="hover:underline">{t("footer.support.imprint")}</a></li>
              <li><a href="/policy" className="hover:underline">{t("footer.support.privacy")}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Whatsapp />
    </footer>
  );
};

export { FooterStats, Footer };
