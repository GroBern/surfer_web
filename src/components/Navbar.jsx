import { link } from 'framer-motion/client'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDestinationHovered, setIsDestinationHovered] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('srilanka')
  const [isMobileDestinationOpen, setIsMobileDestinationOpen] = useState(false)

  const countries = [
    {
      id: 'srilanka',
      name: 'Surf Camps Sri Lanka',
      image: 'beach_camp/package_2.jpg',
      link: '/srilanka'
    },
    {
      id: 'morocco',
      name: 'Surf Camps Morocco',
      image: '/blogs/blog12.jpg',
      link: '/morocco'
    }
  ]

  const surfCamps = {
    srilanka: {
      originals: [
        { name: 'The Surfer Beach Camp', link: '/beach-camp' },
        { name: 'The Surfer TS2 Camp', link: '/ts2-camp' },
      ],
      partner: [
        { name: 'Coming Soon: The Wave Surf Camp', link: '#' },
      ],
    },
    morocco: {
      originals: [],
      partner: [
        { name: 'The Surfer SurfStyle', link: '#' },
      ]
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20'
      : 'bg-transparent'
      }`}>
      <div className='container mx-auto flex justify-between items-center py-3 sm:py-4 px-3 sm:px-6 md:px-8 lg:px-16'>
        <a href='/'>
          <img
            src="logo.png"
            alt="The Surfer Logo"
            className={`h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-100'
              }`}
          />
        </a>
        <ul className='hidden md:flex gap-4 lg:gap-7 text-sm lg:text-base relative'>
          <div
            className="relative"
            onClick={() => setIsDestinationHovered(!isDestinationHovered)}
          >
            <p className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${isScrolled
              ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]'
              : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
              }`}>DESTINATION</p>

            {isDestinationHovered && (
              <div
                className="absolute top-full left-0 right-0 h-4 bg-transparent z-40"
                onClick={() => setIsDestinationHovered(!isDestinationHovered)}
              />
            )}

            {isDestinationHovered && (
              <div
                className={`fixed left-0 right-0 shadow-2xl border z-50 transition-all duration-300 w-screen ${isScrolled
                  ? 'bg-white/95 backdrop-blur-xl border-gray-200'
                  : 'bg-white/10 backdrop-blur-xl border-white/20'
                  }`}
                style={{ top: isScrolled ? '80px' : '76px' }}
                onMouseEnter={() => setIsDestinationHovered(true)}
                onMouseLeave={() => setIsDestinationHovered(false)}
              >
                <div className="flex h-96">
                  <div className="w-1/3 p-6 border-r border-gray-200/20">
                    <h3 className={`text-lg font-semibold mb-6 ${isScrolled ? 'text-gray-800' : 'text-white'
                      }`}>COUNTRIES</h3>

                    <div className="space-y-2">
                      {countries.map((country) => (
                        <div
                          key={country.id}
                          className={`group cursor-pointer rounded-xl transition-all duration-300 hover:scale-[1.02] ${selectedCountry === country.id
                            ? isScrolled
                              ? 'bg-cyan-50 border border-cyan-200'
                              : 'bg-white/20 border border-white/30'
                            : isScrolled
                              ? 'hover:bg-gray-50'
                              : 'hover:bg-white/10'
                            }`}
                          onMouseEnter={() => setSelectedCountry(country.id)}
                        >
                          <a href={country.link} className="text-sm font-medium transition-colors hover:text-cyan-500">
                            <div className="flex items-center p-3 gap-3">

                              <img
                                src={country.image}
                                alt={country.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div className="flex-1 flex items-center justify-between">

                                <h4 className={`text-sm font-medium transition-colors ${selectedCountry === country.id
                                  ? isScrolled
                                    ? 'text-cyan-700'
                                    : 'text-cyan-300'
                                  : isScrolled
                                    ? 'text-gray-800 group-hover:text-cyan-600'
                                    : 'text-white group-hover:text-cyan-300'
                                  }`}>
                                  {country.name}
                                </h4>
                                <span className={`text-lg transition-colors ${selectedCountry === country.id
                                  ? isScrolled
                                    ? 'text-cyan-600'
                                    : 'text-cyan-300'
                                  : isScrolled
                                    ? 'text-gray-400 group-hover:text-cyan-600'
                                    : 'text-white/60 group-hover:text-cyan-300'
                                  }`}>
                                  →
                                </span>

                              </div>

                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-2/3 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                      style={{ backgroundImage: "url('/I9.JPG')" }}
                    ></div>

                    <div className="relative z-10 p-6">
                      {surfCamps[selectedCountry]?.originals.length > 0 && (
                        <>
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-black">★</span>
                              </div>
                              <h4 className={`text-sm font-semibold ${isScrolled ? 'text-gray-800' : 'text-white'
                                }`}>THE SURFER ORIGINAL CAMPS</h4>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            {surfCamps[selectedCountry]?.originals.map((camp, index) => (
                              <p key={index} className={`text-sm cursor-pointer transition-colors hover:text-cyan-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'
                                }`}>
                                <a href={camp.link}>
                                  {camp.name}
                                </a>
                              </p>
                            ))}
                          </div>
                        </>
                      )}

                      <div className={`${surfCamps[selectedCountry]?.originals.length > 0 ? 'border-t pt-4' : ''} ${isScrolled ? 'border-gray-200' : 'border-white/20'
                        }`}>
                        <h4 className={`text-sm font-semibold mb-3 ${isScrolled ? 'text-gray-800' : 'text-white'
                          }`}>THE SURFER PARTNERED CAMP</h4>

                        <div className="space-y-2">
                          {surfCamps[selectedCountry]?.partner.map((camp, index) => (
                            <p key={index} className={`text-sm cursor-pointer transition-colors hover:text-cyan-500 ${isScrolled ? 'text-gray-600' : 'text-white/80'
                              }`}>
                              <a href={camp.link}>
                                {camp.name}
                              </a>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="/activities" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${isScrolled
            ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]'
            : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
            }`}>ACTIVITIES</a>
          <a href="/faq" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${isScrolled
            ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]'
            : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
            }`}>FAQ</a>
          <a href="/blogs" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${isScrolled
            ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]'
            : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
            }`}>BLOGS</a>
          <a href="/contact" className={`cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${isScrolled
            ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)]'
            : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)]'
            }`}>CONTACT</a>
        </ul>

        <button
          className={`md:hidden text-2xl transition-all duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'
            } ${isScrolled
              ? 'text-gray-800 hover:text-cyan-600'
              : 'text-white hover:text-cyan-300'
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <a href='https://main.d7z80586kqd0r.amplifyapp.com/' target='_blank'
          className={`hidden md:block px-4 lg:px-8 py-2 text-sm lg:text-base rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${isScrolled
            ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            : 'border-white text-white hover:bg-white hover:text-gray-800'
            }`}>
          BOOK NOW
        </a>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`w-72 mx-auto rounded-3xl mt-0 transform transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl'
          : 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl'
          }`}>
          <div className='px-4 py-6'>
            <ul className='flex flex-col gap-3 text-center'>
              <div className='w-full'>
                <button
                  className={`w-full py-3 px-4 text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 rounded-xl text-sm font-medium flex items-center justify-between ${isScrolled
                    ? 'text-gray-800 hover:text-cyan-600 hover:bg-gray-100'
                    : 'text-white hover:text-cyan-300 hover:bg-white/20'
                    }`}
                  onClick={() => setIsMobileDestinationOpen(!isMobileDestinationOpen)}
                >
                  DESTINATION
                  <span>{isMobileDestinationOpen ? '▲' : '▼'}</span>
                </button>

                {isMobileDestinationOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {countries.map((country) => (
                      <div key={country.id}>
                        <a
                          href={country.link}
                          className={`block px-3 py-2 text-sm rounded-lg transition-all ${isScrolled
                            ? 'text-gray-700 hover:bg-gray-100'
                            : 'text-white hover:bg-white/20'
                            }`}
                        >
                          {country.name}
                        </a>

                        {/* Optional: show surf camps if desired */}
                        {surfCamps[country.id]?.originals.map((camp, idx) => (
                          <a
                            key={idx}
                            href={camp.link}
                            className={`block ml-4 px-3 py-1 text-xs rounded-lg ${isScrolled
                              ? 'text-gray-500 hover:bg-gray-100'
                              : 'text-white/70 hover:bg-white/10'
                              }`}
                          >
                            - {camp.name}
                          </a>
                        ))}

                        {surfCamps[country.id]?.partner.map((camp, idx) => (
                          <a
                            key={idx}
                            href={camp.link}
                            className={`block ml-4 px-3 py-1 text-xs rounded-lg ${isScrolled
                              ? 'text-gray-500 hover:bg-gray-100'
                              : 'text-white/70 hover:bg-white/10'
                              }`}
                          >
                            - {camp.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/activities"
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${isScrolled
                  ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100'
                  : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                ACTIVITIES
              </a>
              <a
                href="/faq"
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${isScrolled
                  ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100'
                  : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/blogs"
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${isScrolled
                  ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100'
                  : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                BLOGS
              </a>
              <a
                href="/contact"
                className={`py-3 px-4 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 rounded-xl text-sm font-medium ${isScrolled
                  ? 'text-gray-800 hover:text-cyan-600 hover:drop-shadow-[0_4px_8px_rgba(8,145,178,0.4)] hover:bg-gray-100'
                  : 'text-white hover:text-cyan-300 hover:drop-shadow-[0_4px_8px_rgba(34,211,238,0.4)] hover:bg-white/20'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
              <a href='https://main.d7z80586kqd0r.amplifyapp.com/' target='_blank'
                className={`mt-2 mx-auto px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm font-semibold ${isScrolled
                  ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
                  : 'border-white/50 text-white hover:bg-white hover:text-gray-800'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </a>
            </ul>
          </div>
        </div>
      </div>

      {!isMenuOpen && !isScrolled && !isDestinationHovered && (
        <div className='container mx-auto px-3 sm:px-6 md:px-8 lg:px-16'>
          <div className='w-full h-0.5 bg-white/80'></div>
        </div>
      )}
    </div>
  )
}

export default Navbar