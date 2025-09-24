// src/pages/booking_engine/Package.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowRight,
  faCircleCheck,
  faCircleInfo,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const Package = () => {
  // ---- state
  const [dateRange] = useState(() => {
    const raw = localStorage.getItem("dateRange");
    try {
      return raw ? JSON.parse(raw) : "";
    } catch {
      return raw || "";
    }
  });

  const [selectedRooms] = useState(() => {
    const stored = localStorage.getItem("selectedRooms");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [peopleCount] = useState(() => {
    const storedCount = localStorage.getItem("peopleCount");
    return storedCount ? parseInt(storedCount) : 0;
  });

  const [includeIndex, setIncludeIndex] = useState(null);
  const [amounts, setAmounts] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState([]);

  // ---- static data
  const packageData = [
    {
      id: "1",
      title: "Moderate Surf Lesson Package",
      info:
        "Beginners, Level 01 / Level 02 / Intermediate OR MODERATE SURF GUIDING — Advanced Surfers",
      includes: [
        "07 nights accommodation",
        "06 surf lessons or guiding sessions",
        "Surf Theory",
        "Everyday Breakfast",
        "Dinner - Everyday except Sunday",
        "02 complimentary yoga sessions",
        "Free transport to different surf spots",
        "Free use of surf boards during surf sessions",
        "Small group surf teaching (max 6 per group)",
        "Daily social fun activities",
      ],
    },
    {
      id: "2",
      title: "Full Surf Lesson Package",
      info:
        "Beginners, Level 01 / Level 02 / Intermediate OR FULL SURF GUIDING PACKAGE — Advanced Surfers",
      includes: [
        "07 nights accommodation",
        "11 surf lessons or guiding sessions",
        "Surf Theory",
        "Everyday Breakfast",
        "Dinner - Everyday except Sunday",
        "02 complimentary yoga sessions",
        "Free transport to different surf spots",
        "Free use of surf boards during surf sessions",
        "Small group surf teaching (max 6 per group)",
        "Daily social fun activities",
      ],
    },
    {
      id: "3",
      title: "Surf & Yoga Package",
      info: "Surf lessons OR surf guiding with daily yoga",
      includes: [
        "07 nights accommodation",
        "Morning or evening everyday yoga",
        "06 surf lessons or guiding sessions",
        "Surf Theory",
        "Everyday Breakfast",
        "Dinner - Everyday except Sunday",
        "Free transport to different surf spots",
        "Free use of surf boards during surf sessions",
        "Small group surf teaching (max 6 per group)",
        "Daily social fun activities",
      ],
    },
  ];

  // ---- effects
  useEffect(() => {
    const stored = localStorage.getItem("amounts");
    const init = stored ? JSON.parse(stored) : new Array(packageData.length).fill(0);
    setAmounts(init);

    const derived = init
      .map((amt, i) => (amt > 0 ? `${amt} x ${packageData[i].title}` : null))
      .filter(Boolean);
    setSelectedPackages(derived);

    localStorage.removeItem("travellerInfo");
    localStorage.removeItem("totalPrice");
  }, []);

  useEffect(() => {
    const derived = amounts
      .map((amt, i) => (amt > 0 ? `${amt} x ${packageData[i].title}` : null))
      .filter(Boolean);
    setSelectedPackages(derived);
    localStorage.setItem("amounts", JSON.stringify(amounts));
    localStorage.setItem("selectedPackages", JSON.stringify(derived));
  }, [amounts]);

  // ---- helpers
  const toggleInclude = (index) =>
    setIncludeIndex((cur) => (cur === index ? null : index));

  const totalSelected = () => amounts.reduce((s, n) => s + n, 0);
  const canInc = () => totalSelected() < peopleCount;

  const updateAmount = (index, inc) => {
    setAmounts((prev) => {
      const next = [...prev];
      if (inc) {
        if (!canInc()) return prev;
        next[index] = (next[index] || 0) + 1;
      } else {
        if ((next[index] || 0) <= 0) return prev;
        next[index] = next[index] - 1;
      }
      return next;
    });
  };

  const selectionValid = peopleCount > 0 && totalSelected() === peopleCount;
  const remaining = Math.max(0, peopleCount - totalSelected());

  return (
    <>
      <BookingNavbar />

      {/* Scoped, page-only CSS for a visible, beautiful CTA on mobile */}
      <style>{`
        .package-page .cta-button {
          display: grid;
          place-items: center;
          height: 56px;
          border-radius: 9999px;
          font-weight: 700;
          letter-spacing: .2px;
          color: #fff;
          background: linear-gradient(90deg, #00afef, #0a67a9);
          box-shadow:
            0 12px 24px rgba(2, 132, 199, 0.28),
            0 4px 10px rgba(2, 132, 199, 0.20);
          transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
        }
        .package-page .cta-button:hover {
          transform: translateY(-1px);
          box-shadow:
            0 14px 28px rgba(2, 132, 199, 0.34),
            0 6px 12px rgba(2, 132, 199, 0.22);
          filter: saturate(1.05);
        }
        .package-page .cta-button.is-disabled {
          background: #e5e7eb !important;
          color: #6b7280 !important;
          box-shadow: none !important;
          cursor: not-allowed !important;
        }
        @media (max-width: 640px) {
          .package-page { padding-bottom: calc(var(--footer-h, 90px) + 88px); }
          .package-page .cta-sticky {
            position: sticky;
            bottom: calc(12px + env(safe-area-inset-bottom));
            z-index: 10;
            padding: 6px 0;
            background: linear-gradient(to top, rgba(255,255,255,0.96), rgba(255,255,255,0.84));
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }
        }
      `}</style>

      <div className="package-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
            Select Your Package
          </h3>

          <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <p className="text-sm text-gray-700">Surf Package</p>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Number of People:</span>
              <span className="inline-flex h-8 min-w-[44px] items-center justify-center rounded-lg border-2 border-sky-500 px-2 text-sm font-semibold">
                {peopleCount}
              </span>
            </div>
          </div>

          {peopleCount > 0 && (
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {selectionValid
                ? "Great! Selections match the number of people."
                : `Select ${remaining} more package${remaining === 1 ? "" : "s"} to match your group.`}
            </p>
          )}
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: packages */}
          <div className="lg:col-span-2">
            <div className="grid gap-5">
              {packageData.map((pkg, idx) => {
                const count = amounts[idx] || 0;
                const decDisabled = count <= 0;
                const incDisabled = !canInc();

                return (
                  <div
                    key={pkg.id}
                    className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                        {pkg.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => toggleInclude(idx)}
                          className="inline-flex items-center gap-2 rounded-lg border border-sky-500 px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50"
                          aria-expanded={includeIndex === idx}
                          aria-controls={`include-${pkg.id}`}
                          type="button"
                        >
                          What&apos;s Included
                          {includeIndex === idx ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                          ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                          )}
                        </button>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateAmount(idx, false)}
                            disabled={decDisabled}
                            className={[
                              "grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition",
                              decDisabled
                                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                                : "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
                            ].join(" ")}
                            aria-label={`Remove ${pkg.title}`}
                            type="button"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>

                          <span className="min-w-[1.25rem] text-base font-semibold text-gray-900 text-center">
                            {count}
                          </span>

                          <button
                            onClick={() => updateAmount(idx, true)}
                            disabled={incDisabled}
                            className={[
                              "grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition",
                              incDisabled
                                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                                : "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
                            ].join(" ")}
                            aria-label={`Add ${pkg.title}`}
                            type="button"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {includeIndex === idx && (
                      <div
                        id={`include-${pkg.id}`}
                        className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-4"
                      >
                        <p className="mb-2 text-sm font-medium text-gray-800">
                          Included per week
                        </p>
                        {pkg.info && (
                          <p className="mb-3 text-sm text-gray-700">
                            <FontAwesomeIcon className="mr-2 text-sky-600" icon={faCircleInfo} />
                            {pkg.info}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="text-sm text-gray-700 flex">
                              <FontAwesomeIcon
                                className="mr-2 mt-0.5 shrink-0 text-emerald-600"
                                icon={faCircleCheck}
                              />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: summary + CTA */}
          <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
              <Summary
                dateRange={dateRange}
                selectedRooms={selectedRooms}
                selectedPackages={selectedPackages}
              />
            </div>

            {/* Mobile-visible sticky CTA wrapper (doesn't affect desktop) */}
            <div className="cta-sticky">
              {selectionValid ? (
                <Link to="/selection" className="block">
                  <div className="cta-button">
                    Selection Matching <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                  </div>
                </Link>
              ) : (
                <div
                  className="block"
                  role="button"
                  aria-disabled="true"
                  tabIndex={-1}
                  title="Select packages to match the number of people"
                >
                  <div className="cta-button is-disabled">
                    Selection Matching <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <BookingFooter />
    </>
  );
};

export default Package;
