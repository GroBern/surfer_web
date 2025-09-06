import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false); // desktop: click-to-open
  const [selectedCountry, setSelectedCountry] = useState('srilanka');
  const [isMobileDestinationOpen, setIsMobileDestinationOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const destBtnRef = useRef(null);
  const destPanelRef = useRef(null);

  const { t, i18n } = useTranslation();

  const countries = [
    {
      id: 'srilanka',
      name: t('navbar.countries.srilanka', 'Surf Camps Sri Lanka'),
      image: '/image.png',
      link: '/srilanka',
    },
    {
      id: 'morocco',
      name: t('navbar.countries.morocco', 'Surf Camps Morocco'),
      image: '/morocco.jpg',
      link: '/morocco',
    },
  ];

  // Sri Lanka partners now empty (Wave Surf Camp removed)
  const surfCamps = {
    srilanka: {
      originals: [
        { name: t('navbar.camps.beachCamp', 'The Surfer Beach Camp'), link: '/beach-camp' },
        { name: t('navbar.camps.ts2Camp', 'The Surfer TS2 Camp'), link: '/ts2-camp' },
      ],
      partner: [],
    },
    morocco: {
      originals: [],
      partner: [{ name: t('navbar.camps.styleCamp', 'The Surfer SurfStyle'), link: '/style-camp' }],
    },
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For desktop dropdown offset
  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, [isScrolled]);

  // Close desktop DESTINATION on outside click / Esc
  useEffect(() => {
    if (!isDestinationOpen) return;
    const handleClickOutside = (e) => {
      const btn = destBtnRef.current;
      const panel = destPanelRef.current;
      if (!btn || !panel) return;
      if (btn.contains(e.target) || panel.contains(e.target)) return;
      setIsDestinationOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsDestinationOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isDestinationOpen]);

  // Always start new route at top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  // Animated Hamburger
  const HamburgerButton = () => (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      className={`
        md:hidden relative h-10 w-10 rounded-xl flex items-center justify-center
        transition-colors duration-200
        ${isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 active:scale-95
      `}
    >
      <span
        className={`
          absolute block h-[2px] w-6 rounded-full
          ${isScrolled ? 'bg-gray-800' : 'bg-white'}
          transition-transform duration-300 ease-out
          ${isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2 rotate-0'}
        `}
      />
      <span
        className={`
          absolute block h-[2px] w-6 rounded-full
          ${isScrolled ? 'bg-gray-800' : 'bg-white'}
          transition-opacity duration-200 ease-out
          ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <span
        className={`
          absolute block h-[2px] w-6 rounded-full
          ${isScrolled ? 'bg-gray-800' : 'bg-white'}
          transition-transform duration-300 ease-out
          ${isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2 rotate-0'}
        `}
      />
    </button>
  );

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-4 px-3 sm:px-6 md:px-8 lg:px-16">
        {/* Logo */}
        <NavLink to="/">
          <img src="logo.png" alt="The Surfer Logo" className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300" />
        </NavLink>

        {/* Center nav (desktop) */}
        <ul className="hidden md:flex gap-4 lg:gap-7 text-sm lg:text-base relative">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isActive
                  ? 'text-cyan-500 font-bold underline underline-offset-4'
                  : isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`
            }
          >
            {t('navbar.home', 'HOME')}
          </NavLink>

          {/* DESTINATION (desktop click-to-open) */}
          <button
            ref={destBtnRef}
            type="button"
            onClick={() => setIsDestinationOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={isDestinationOpen}
            className={`cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
              isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
            }`}
          >
            {t('navbar.destination', 'DESTINATION')}
          </button>

          <NavLink
            to="/activities"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isActive ? 'text-cyan-500 font-bold underline underline-offset-4' : isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`
            }
          >
            {t('navbar.activities', 'ACTIVITIES')}
          </NavLink>
          <NavLink
            to="/rates"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isActive ? 'text-cyan-500 font-bold underline underline-offset-4' : isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`
            }
          >
            {t('navbar.rates', 'RATES')}
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isActive ? 'text-cyan-500 font-bold underline underline-offset-4' : isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`
            }
          >
            {t('navbar.faq', 'FAQ')}
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isActive ? 'text-cyan-500 font-bold underline underline-offset-4' : isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`
            }
          >
            {t('navbar.blogs', 'BLOGS')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                isActive ? 'text-cyan-500 font-bold underline underline-offset-4' : isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
              }`
            }
          >
            {t('navbar.contact', 'CONTACT')}
          </NavLink>
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* Desktop: language + book now (unchanged) */}
          <div className="hidden md:flex items-center gap-3">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className={`w-28 h-9 px-2 bg-transparent appearance-none outline-none border-0 rounded-none cursor-pointer transition-colors
                ${isScrolled ? 'text-gray-800 hover:text-cyan-600' : 'text-white hover:text-cyan-300'}
                [&>option]:text-black [&>option]:bg-white`}
              aria-label="Select language"
            >
              <option value="en">English en</option>
              <option value="de">Deutsch de</option>
            </select>

            <a
              href="https://main.d7z80586kqd0r.amplifyapp.com/"
              target="_blank"
              rel="noreferrer"
              className={`px-4 lg:px-8 py-2 text-sm lg:text-base rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                isScrolled ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-gray-800'
              }`}
            >
              {t('navbar.bookNow', 'BOOK NOW')}
            </a>
          </div>

          {/* Mobile: Book Now moved to top bar (visible only on mobile) */}
          <a
            href="https://main.d7z80586kqd0r.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
            className={`md:hidden px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 ${
              isScrolled ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                         : 'border-white text-white hover:bg-white hover:text-gray-800'
            }`}
          >
            {t('navbar.bookNow', 'BOOK NOW')}
          </a>

          {/* Mobile Hamburger */}
          <HamburgerButton />
        </div>
      </div>

      {/* ===== DESKTOP DESTINATION PANEL (fixed full-width) ===== */}
      {isDestinationOpen && (
        <div
          ref={destPanelRef}
          className={`hidden md:block fixed left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-xl border-t border-gray-200' : 'bg-white/10 backdrop-blur-xl border-t border-white/20'
          }`}
          style={{ top: `${navHeight}px` }}
        >
          <div className="h-1 w-full pointer-events-none" />
          <div className="flex h-96 shadow-2xl">
            {/* Countries */}
            <div className="w-1/3 p-6 border-r border-gray-200/20">
              <h3 className={`text-lg font-semibold mb-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {t('navbar.countriesTitle', 'COUNTRIES')}
              </h3>
              <div className="space-y-2">
                {countries.map((country) => (
                  <div
                    key={country.id}
                    className={`group cursor-pointer rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      selectedCountry === country.id
                        ? isScrolled ? 'bg-cyan-50 border border-cyan-200' : 'bg-white/20 border border-white/30'
                        : isScrolled ? 'hover:bg-gray-50 border border-transparent' : 'hover:bg-white/10 border border-transparent'
                    }`}
                    onMouseEnter={() => setSelectedCountry(country.id)}
                  >
                    <NavLink
                      to={country.link}
                      className="text-sm font-medium transition-colors hover:text-cyan-500 block"
                      onClick={() => setIsDestinationOpen(false)}
                    >
                      <div className="flex items-center p-3 gap-3">
                        <img src={country.image} alt={country.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1 flex items-center justify-between">
                          <h4
                            className={`text-sm font-medium transition-colors ${
                              selectedCountry === country.id
                                ? isScrolled ? 'text-cyan-700' : 'text-cyan-300'
                                : isScrolled ? 'text-gray-800 group-hover:text-cyan-600' : 'text-white group-hover:text-cyan-300'
                            }`}
                          >
                            {country.name}
                          </h4>
                          <span
                            className={`text-lg transition-colors ${
                              selectedCountry === country.id
                                ? isScrolled ? 'text-cyan-600' : 'text-cyan-300'
                                : isScrolled ? 'text-gray-400 group-hover:text-cyan-600' : 'text-white/60 group-hover:text-cyan-300'
                            }`}
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            {/* Camps */}
            <div className="w-2/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/I9.JPG')" }} />
              <div className="relative z-10 p-6">
                {surfCamps[selectedCountry]?.originals.length > 0 && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-black">★</span>
                        </div>
                        <h4 className={`text-sm font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                          {t('navbar.originalsTitle', 'THE SURFER ORIGINAL CAMPS')}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {surfCamps[selectedCountry]?.originals.map((camp, index) => (
                        <NavLink
                          key={index}
                          to={camp.link}
                          className={`block text-sm transition-colors hover:text-cyan-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                          onClick={() => setIsDestinationOpen(false)}
                        >
                          {camp.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                )}

                <div className={`${surfCamps[selectedCountry]?.originals.length > 0 ? 'border-t pt-4' : ''} ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}>
                  <h4 className={`text-sm font-semibold mb-3 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                    {t('navbar.partnersTitle', 'THE SURFER PARTNERED CAMP')}
                  </h4>

                  <div className="space-y-2">
                    {surfCamps[selectedCountry]?.partner.map((camp, index) => (
                      <NavLink
                        key={index}
                        to={camp.link}
                        className={`block text-sm transition-colors hover:text-cyan-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                        onClick={() => setIsDestinationOpen(false)}
                      >
                        {camp.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== MOBILE MENU ===== */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`w-72 mx-auto rounded-3xl mt-0 transform transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl'
                     : 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl'
        }`}>
          <div className="px-4 py-8 max-h-[75vh] overflow-y-auto">
            <ul className="flex flex-col gap-4 text-center">
              <NavLink
                to="/"
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100'
                             : 'text-white hover:text-cyan-300 hover:bg-white/20'
                } ${location.pathname === '/' ? ' text-cyan-500 font-bold underline underline-offset-4' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.home', 'HOME')}
              </NavLink>

              {/* Destination (mobile accordion) */}
              <div className="w-full">
                <button
                  className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100'
                               : 'text-white hover:text-cyan-300 hover:bg-white/20'
                  }`}
                  onClick={() => setIsMobileDestinationOpen((v) => !v)}
                >
                  {t('navbar.destination', 'DESTINATION')}
                </button>

                {isMobileDestinationOpen && (
                  <div className="ml-4 mt-2 space-y-3 text-left">
                    {countries.map((country) => (
                      <div key={country.id}>
                        <NavLink
                          to={country.link}
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                            } hover:text-blue-500 ${isActive ? 'text-cyan-600' : ''}`
                          }
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {country.name}
                        </NavLink>

                        {/* Original Camps */}
                        {surfCamps[country.id]?.originals.length > 0 && (
                          <div className="ml-4 mt-1 space-y-1">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                <span className="text-[8px] font-bold text-black">★</span>
                              </div>
                              <span className={`text-[11px] font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                                {t('navbar.originalsTitle', 'THE SURFER ORIGINAL CAMPS')}
                              </span>
                            </div>
                            {surfCamps[country.id]?.originals.map((camp, idx) => (
                              <NavLink
                                key={idx}
                                to={camp.link}
                                className={({ isActive }) =>
                                  `block ml-4 pl-3 py-[3px] text-xs rounded-lg transition-all duration-200 ${
                                    isScrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'
                                  } hover:text-blue-500 ${isActive ? 'text-cyan-600 font-semibold' : ''}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {camp.name}
                              </NavLink>
                            ))}
                          </div>
                        )}

                        {/* Partner Camps (if any) */}
                        {surfCamps[country.id]?.partner.length > 0 && (
                          <div className="ml-4 mt-3 space-y-1">
                            <div className="flex items-center gap-1">
                              <span className={`text-[11px] font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                                {t('navbar.partnersTitle', 'THE SURFER PARTNERED CAMP')}
                              </span>
                            </div>
                            {surfCamps[country.id]?.partner.map((camp, idx) => (
                              <NavLink
                                key={idx}
                                to={camp.link}
                                className={({ isActive }) =>
                                  `block ml-4 pl-3 py-[3px] text-xs rounded-lg transition-all duration-200 ${
                                    isScrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'
                                  } hover:text-blue-500 ${isActive ? 'text-cyan-600 font-semibold' : ''}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {camp.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other mobile links */}
              <NavLink
                to="/activities"
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100' : 'text-white hover:text-cyan-300 hover:bg-white/20'
                } ${location.pathname === '/activities' ? ' text-cyan-500 font-bold underline underline-offset-4' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.activities', 'ACTIVITIES')}
              </NavLink>

              <NavLink
                to="/rates"
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100' : 'text-white hover:text-cyan-300 hover:bg-white/20'
                } ${location.pathname === '/rates' ? ' text-cyan-500 font-bold underline underline-offset-4' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.rates', 'RATES')}
              </NavLink>

              <NavLink
                to="/faq"
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100' : 'text-white hover:text-cyan-300 hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.faq', 'FAQ')}
              </NavLink>

              <NavLink
                to="/blogs"
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100' : 'text-white hover:text-cyan-300 hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.blogs', 'BLOGS')}
              </NavLink>

              <NavLink
                to="/contact"
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100' : 'text-white hover:text-cyan-300 hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.contact', 'CONTACT')}
              </NavLink>

              {/* Translation (mobile) */}
              <div className="mt-2">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={i18n.language}
                  style={{ colorScheme: 'light' }}
                  className={`w-full px-3 py-2 rounded-lg text-sm cursor-pointer bg-white text-gray-900 border ${
                    isScrolled ? 'border-gray-300' : 'border-white/60'
                  } [&>option]:text-black [&>option]:bg-white`}
                  aria-label="Select language"
                >
                  <option value="en">English en</option>
                  <option value="de">Deutsch de</option>
                </select>
              </div>

              {/* Book Now removed from inside the mobile menu */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom hairline when transparent */}
      {!isMenuOpen && !isScrolled && (
        <div className="container mx-auto px-3 sm:px-6 md:px-8 lg:px-16">
          <div className="w-full h-0.5 bg-white/80" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
