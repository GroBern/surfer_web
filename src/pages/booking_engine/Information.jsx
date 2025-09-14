import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

import Summary from "../../components/booking_engine/Summary";
import { API_BASE_URL } from "../../config/api";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const Information = () => {
  const [selectedCamp, setSelectedCamp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [dateRange] = useState(() => {
    try {
      const storedDateRange = localStorage.getItem("dateRange");
      return storedDateRange ? JSON.parse(storedDateRange) : null;
    } catch {
      return null;
    }
  });

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(() => {
    try {
      const storedPrice = localStorage.getItem("totalPrice");
      return storedPrice ? JSON.parse(storedPrice) : 0;
    } catch {
      return 0;
    }
  });
  const [selectedAddons, setSelectedAddons] = useState(() => {
    try {
      const storedAddons = localStorage.getItem("addons");
      return storedAddons ? JSON.parse(storedAddons) : [];
    } catch {
      return [];
    }
  });

  const [travellerInfoExists, setTravellerInfoExists] = useState(false);
  const [personCount, setPersonCount] = useState(0);
  const [formData, setFormData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(() => {
    try {
      const stored = localStorage.getItem("isSubmitted");
      return stored ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [shouldReload, setShouldReload] = useState(false);

  // ---------------- data sources (country + codes) ----------------
  const countries = useMemo(
    () => [
      { name: "Afghanistan", code: "+93" },
      { name: "Albania", code: "+355" },
      { name: "Algeria", code: "+213" },
      { name: "Andorra", code: "+376" },
      { name: "Angola", code: "+244" },
      { name: "Antigua and Barbuda", code: "+1-268" },
      { name: "Argentina", code: "+54" },
      { name: "Armenia", code: "+374" },
      { name: "Australia", code: "+61" },
      { name: "Austria", code: "+43" },
      { name: "Azerbaijan", code: "+994" },
      { name: "Bahamas", code: "+1-242" },
      { name: "Bahrain", code: "+973" },
      { name: "Bangladesh", code: "+880" },
      { name: "Barbados", code: "+1-246" },
      { name: "Belarus", code: "+375" },
      { name: "Belgium", code: "+32" },
      { name: "Belize", code: "+501" },
      { name: "Benin", code: "+229" },
      { name: "Bhutan", code: "+975" },
      { name: "Bolivia", code: "+591" },
      { name: "Bosnia and Herzegovina", code: "+387" },
      { name: "Botswana", code: "+267" },
      { name: "Brazil", code: "+55" },
      { name: "Brunei", code: "+673" },
      { name: "Bulgaria", code: "+359" },
      { name: "Burkina Faso", code: "+226" },
      { name: "Burundi", code: "+257" },
      { name: "Cambodia", code: "+855" },
      { name: "Cameroon", code: "+237" },
      { name: "Canada", code: "+1" },
      { name: "Cape Verde", code: "+238" },
      { name: "Central African Republic", code: "+236" },
      { name: "Chad", code: "+235" },
      { name: "Chile", code: "+56" },
      { name: "China", code: "+86" },
      { name: "Colombia", code: "+57" },
      { name: "Comoros", code: "+269" },
      { name: "Congo (Brazzaville)", code: "+242" },
      { name: "Congo (Kinshasa)", code: "+243" },
      { name: "Costa Rica", code: "+506" },
      { name: "Croatia", code: "+385" },
      { name: "Cuba", code: "+53" },
      { name: "Cyprus", code: "+357" },
      { name: "Czech Republic", code: "+420" },
      { name: "Denmark", code: "+45" },
      { name: "Djibouti", code: "+253" },
      { name: "Dominica", code: "+1-767" },
      { name: "Dominican Republic", code: "+1-809" },
      { name: "Ecuador", code: "+593" },
      { name: "Egypt", code: "+20" },
      { name: "El Salvador", code: "+503" },
      { name: "Equatorial Guinea", code: "+240" },
      { name: "Eritrea", code: "+291" },
      { name: "Estonia", code: "+372" },
      { name: "Eswatini", code: "+268" },
      { name: "Ethiopia", code: "+251" },
      { name: "Fiji", code: "+679" },
      { name: "Finland", code: "+358" },
      { name: "France", code: "+33" },
      { name: "Gabon", code: "+241" },
      { name: "Gambia", code: "+220" },
      { name: "Georgia", code: "+995" },
      { name: "Germany", code: "+49" },
      { name: "Ghana", code: "+233" },
      { name: "Greece", code: "+30" },
      { name: "Grenada", code: "+1-473" },
      { name: "Guatemala", code: "+502" },
      { name: "Guinea", code: "+224" },
      { name: "Guinea-Bissau", code: "+245" },
      { name: "Guyana", code: "+592" },
      { name: "Haiti", code: "+509" },
      { name: "Honduras", code: "+504" },
      { name: "Hungary", code: "+36" },
      { name: "Iceland", code: "+354" },
      { name: "India", code: "+91" },
      { name: "Indonesia", code: "+62" },
      { name: "Iran", code: "+98" },
      { name: "Iraq", code: "+964" },
      { name: "Ireland", code: "+353" },
      { name: "Israel", code: "+972" },
      { name: "Italy", code: "+39" },
      { name: "Ivory Coast", code: "+225" },
      { name: "Jamaica", code: "+1-876" },
      { name: "Japan", code: "+81" },
      { name: "Jordan", code: "+962" },
      { name: "Kazakhstan", code: "+7" },
      { name: "Kenya", code: "+254" },
      { name: "Kiribati", code: "+686" },
      { name: "Kuwait", code: "+965" },
      { name: "Kyrgyzstan", code: "+996" },
      { name: "Laos", code: "+856" },
      { name: "Latvia", code: "+371" },
      { name: "Lebanon", code: "+961" },
      { name: "Lesotho", code: "+266" },
      { name: "Liberia", code: "+231" },
      { name: "Libya", code: "+218" },
      { name: "Liechtenstein", code: "+423" },
      { name: "Lithuania", code: "+370" },
      { name: "Luxembourg", code: "+352" },
      { name: "Madagascar", code: "+261" },
      { name: "Malawi", code: "+265" },
      { name: "Malaysia", code: "+60" },
      { name: "Maldives", code: "+960" },
      { name: "Mali", code: "+223" },
      { name: "Malta", code: "+356" },
      { name: "Marshall Islands", code: "+692" },
      { name: "Mauritania", code: "+222" },
      { name: "Mauritius", code: "+230" },
      { name: "Mexico", code: "+52" },
      { name: "Micronesia", code: "+691" },
      { name: "Moldova", code: "+373" },
      { name: "Monaco", code: "+377" },
      { name: "Mongolia", code: "+976" },
      { name: "Montenegro", code: "+382" },
      { name: "Morocco", code: "+212" },
      { name: "Mozambique", code: "+258" },
      { name: "Myanmar", code: "+95" },
      { name: "Namibia", code: "+264" },
      { name: "Nauru", code: "+674" },
      { name: "Nepal", code: "+977" },
      { name: "Netherlands", code: "+31" },
      { name: "New Zealand", code: "+64" },
      { name: "Nicaragua", code: "+505" },
      { name: "Niger", code: "+227" },
      { name: "Nigeria", code: "+234" },
      { name: "North Korea", code: "+850" },
      { name: "North Macedonia", code: "+389" },
      { name: "Norway", code: "+47" },
      { name: "Oman", code: "+968" },
      { name: "Pakistan", code: "+92" },
      { name: "Palau", code: "+680" },
      { name: "Panama", code: "+507" },
      { name: "Papua New Guinea", code: "+675" },
      { name: "Paraguay", code: "+595" },
      { name: "Peru", code: "+51" },
      { name: "Philippines", code: "+63" },
      { name: "Poland", code: "+48" },
      { name: "Portugal", code: "+351" },
      { name: "Qatar", code: "+974" },
      { name: "Romania", code: "+40" },
      { name: "Russia", code: "+7" },
      { name: "Rwanda", code: "+250" },
      { name: "Saint Kitts and Nevis", code: "+1-869" },
      { name: "Saint Lucia", code: "+1-758" },
      { name: "Saint Vincent and the Grenadines", code: "+1-784" },
      { name: "Samoa", code: "+685" },
      { name: "San Marino", code: "+378" },
      { name: "Sao Tome and Principe", code: "+239" },
      { name: "Saudi Arabia", code: "+966" },
      { name: "Senegal", code: "+221" },
      { name: "Serbia", code: "+381" },
      { name: "Seychelles", code: "+248" },
      { name: "Sierra Leone", code: "+232" },
      { name: "Singapore", code: "+65" },
      { name: "Slovakia", code: "+421" },
      { name: "Slovenia", code: "+386" },
      { name: "Solomon Islands", code: "+677" },
      { name: "Somalia", code: "+252" },
      { name: "South Africa", code: "+27" },
      { name: "South Korea", code: "+82" },
      { name: "South Sudan", code: "+211" },
      { name: "Spain", code: "+34" },
      { name: "Sri Lanka", code: "+94" },
      { name: "Sudan", code: "+249" },
      { name: "Suriname", code: "+597" },
      { name: "Sweden", code: "+46" },
      { name: "Switzerland", code: "+41" },
      { name: "Syria", code: "+963" },
      { name: "Taiwan", code: "+886" },
      { name: "Tajikistan", code: "+992" },
      { name: "Tanzania", code: "+255" },
      { name: "Thailand", code: "+66" },
      { name: "Togo", code: "+228" },
      { name: "Tonga", code: "+676" },
      { name: "Trinidad and Tobago", code: "+1-868" },
      { name: "Tunisia", code: "+216" },
      { name: "Turkey", code: "+90" },
      { name: "Turkmenistan", code: "+993" },
      { name: "Tuvalu", code: "+688" },
      { name: "Uganda", code: "+256" },
      { name: "Ukraine", code: "+380" },
      { name: "United Arab Emirates", code: "+971" },
      { name: "United Kingdom", code: "+44" },
      { name: "United States", code: "+1" },
      { name: "Uruguay", code: "+598" },
      { name: "Uzbekistan", code: "+998" },
      { name: "Vanuatu", code: "+678" },
      { name: "Vatican City", code: "+379" },
      { name: "Venezuela", code: "+58" },
      { name: "Vietnam", code: "+84" },
      { name: "Yemen", code: "+967" },
      { name: "Zambia", code: "+260" },
      { name: "Zimbabwe", code: "+263" }
    ],
    []
  );

  const codes = useMemo(
    () => [
      { code: "+1" }, { code: "+1-242" }, { code: "+1-246" }, { code: "+1-268" }, { code: "+1-284" },
      { code: "+1-340" }, { code: "+1-345" }, { code: "+1-441" }, { code: "+1-473" }, { code: "+1-649" },
      { code: "+1-664" }, { code: "+1-670" }, { code: "+1-671" }, { code: "+1-684" }, { code: "+1-721" },
      { code: "+1-758" }, { code: "+1-767" }, { code: "+1-784" }, { code: "+1-809" }, { code: "+1-868" },
      { code: "+1-869" }, { code: "+1-876" }, { code: "+20" }, { code: "+211" }, { code: "+212" }, { code: "+213" },
      { code: "+216" }, { code: "+218" }, { code: "+220" }, { code: "+221" }, { code: "+222" }, { code: "+223" },
      { code: "+224" }, { code: "+225" }, { code: "+226" }, { code: "+227" }, { code: "+228" }, { code: "+229" },
      { code: "+230" }, { code: "+231" }, { code: "+232" }, { code: "+233" }, { code: "+234" }, { code: "+235" },
      { code: "+236" }, { code: "+237" }, { code: "+238" }, { code: "+239" }, { code: "+240" }, { code: "+241" },
      { code: "+242" }, { code: "+243" }, { code: "+244" }, { code: "+245" }, { code: "+246" }, { code: "+248" },
      { code: "+249" }, { code: "+250" }, { code: "+251" }, { code: "+252" }, { code: "+253" }, { code: "+254" },
      { code: "+255" }, { code: "+256" }, { code: "+257" }, { code: "+258" }, { code: "+260" }, { code: "+261" },
      { code: "+262" }, { code: "+263" }, { code: "+264" }, { code: "+265" }, { code: "+266" }, { code: "+267" },
      { code: "+268" }, { code: "+269" }, { code: "+27" }, { code: "+290" }, { code: "+291" }, { code: "+297" },
      { code: "+298" }, { code: "+299" }, { code: "+30" }, { code: "+31" }, { code: "+32" }, { code: "+33" },
      { code: "+34" }, { code: "+350" }, { code: "+351" }, { code: "+352" }, { code: "+353" }, { code: "+354" },
      { code: "+355" }, { code: "+356" }, { code: "+357" }, { code: "+358" }, { code: "+359" }, { code: "+36" },
      { code: "+370" }, { code: "+371" }, { code: "+372" }, { code: "+373" }, { code: "+374" }, { code: "+375" },
      { code: "+376" }, { code: "+377" }, { code: "+378" }, { code: "+379" }, { code: "+380" }, { code: "+381" },
      { code: "+382" }, { code: "+383" }, { code: "+385" }, { code: "+386" }, { code: "+387" }, { code: "+389" },
      { code: "+39" }, { code: "+40" }, { code: "+41" }, { code: "+420" }, { code: "+421" }, { code: "+423" },
      { code: "+43" }, { code: "+44" }, { code: "+45" }, { code: "+46" }, { code: "+47" }, { code: "+48" },
      { code: "+49" }, { code: "+500" }, { code: "+501" }, { code: "+502" }, { code: "+503" }, { code: "+504" },
      { code: "+505" }, { code: "+506" }, { code: "+507" }, { code: "+508" }, { code: "+509" }, { code: "+51" },
      { code: "+52" }, { code: "+53" }, { code: "+54" }, { code: "+55" }, { code: "+56" }, { code: "+57" },
      { code: "+58" }, { code: "+590" }, { code: "+591" }, { code: "+592" }, { code: "+593" }, { code: "+594" },
      { code: "+595" }, { code: "+596" }, { code: "+597" }, { code: "+598" }, { code: "+599" }, { code: "+60" },
      { code: "+61" }, { code: "+62" }, { code: "+63" }, { code: "+64" }, { code: "+65" }, { code: "+66" },
      { code: "+670" }, { code: "+672" }, { code: "+673" }, { code: "+674" }, { code: "+675" }, { code: "+676" },
      { code: "+677" }, { code: "+678" }, { code: "+679" }, { code: "+680" }, { code: "+681" }, { code: "+682" },
      { code: "+683" }, { code: "+685" }, { code: "+686" }, { code: "+687" }, { code: "+688" }, { code: "+689" },
      { code: "+690" }, { code: "+691" }, { code: "+692" }, { code: "+7" }, { code: "+81" }, { code: "+82" },
      { code: "+84" }, { code: "+850" }, { code: "+852" }, { code: "+853" }, { code: "+855" }, { code: "+856" },
      { code: "+86" }, { code: "+880" }, { code: "+886" }, { code: "+90" }, { code: "+91" }, { code: "+92" },
      { code: "+93" }, { code: "+94" }, { code: "+95" }, { code: "+960" }, { code: "+961" }, { code: "+962" },
      { code: "+963" }, { code: "+964" }, { code: "+965" }, { code: "+966" }, { code: "+967" }, { code: "+968" },
      { code: "+970" }, { code: "+971" }, { code: "+972" }, { code: "+973" }, { code: "+974" }, { code: "+975" },
      { code: "+976" }, { code: "+977" }, { code: "+98" }, { code: "+992" }, { code: "+993" }, { code: "+994" },
      { code: "+995" }, { code: "+996" }, { code: "+998" }
    ],
    []
  );

  // ---------------- lifecycle ----------------
  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) setSelectedCamp(storedCamp);

    const storedPackages = localStorage.getItem("selectedPackages");
    if (storedPackages) {
      const packageArray = JSON.parse(storedPackages);
      setSelectedPackages(packageArray);

      const totalPersons = packageArray.reduce((sum, pkg) => {
        const count = parseInt(pkg.split(" x ")[0], 10);
        return sum + (Number.isFinite(count) ? count : 0);
      }, 0);
      setPersonCount(totalPersons);
    }

    const storedRooms = localStorage.getItem("selectedRooms");
    if (storedRooms) setSelectedRooms(JSON.parse(storedRooms));

    const storedTravellers = localStorage.getItem("travellerInfo");
    if (storedTravellers) {
      try {
        const parsed = JSON.parse(storedTravellers);
        setFormData(Array.isArray(parsed) ? parsed : []);
        setTravellerInfoExists(true);
      } catch {
        setFormData([]);
      }
    }
  }, []);

  // Initialize form by personCount (only once / when empty)
  useEffect(() => {
    if (personCount > 0 && formData.length === 0) {
      setFormData(
        Array.from({ length: personCount }, () => ({
          firstName: "",
          lastName: "",
          email: "",
          confirmedEmail: "",
          country: "",
          countryCode: "",
          phone: "",
          package: "",
          room: "",
          arrivalFlightNumber: "",
          arrivalFlightDate: "",
          arrivalFlightTime: "",
          departureFlightNumber: "",
          departureFlightDate: "",
          departureFlightTime: ""
        }))
      );
    }
  }, [personCount, formData.length]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [name]: value };
      return next;
    });
  };

  // derive email mismatch for contact person (index 0)
  const emailMismatch =
    formData.length > 0 &&
    formData[0].confirmedEmail &&
    formData[0].email !== formData[0].confirmedEmail;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailMismatch) return;

    setIsLoading(true);
    const bookingData = {
      selectedCamp,
      dateRange,
      selectedPackages,
      selectedRooms,
      addons: selectedAddons,
      totalPrice,
      travellerInfo: formData
    };

    try {
      // const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);

      if (response.status === 201) {
        await axios.post(`${API_BASE_URL}/bookings/send-confirmation`, bookingData);

        localStorage.setItem("travellerInfo", JSON.stringify(formData));
        setTravellerInfoExists(true);
        localStorage.setItem("isSubmitted", JSON.stringify(true));

        setAlertMessage(
          "Thank you for your booking request. We will contact you via email within 24 hours."
        );
        setShowAlert(true);
        setShouldReload(true);
      } else {
        setAlertMessage("Failed to save booking. Please try again.");
        setShouldReload(false);
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      setAlertMessage("Error saving booking. Please try again.");
      setShouldReload(false);
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-fill country code when user selects a country (optional nice touch)
  const handleCountryChange = (index, value) => {
    const found = countries.find((c) => c.name === value);
    setFormData((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        country: value,
        countryCode: found?.code || next[index].countryCode
      };
      return next;
    });
  };

  return (
    <>
      <BookingNavbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Contact Person Information
              </h2>

              <form className="mt-5 space-y-6" onSubmit={handleSubmit}>
                {formData.length > 0 &&
                  formData.map((traveller, index) => (
                    <div key={index} className="border-t border-gray-100 pt-5 first:border-0 first:pt-0">
                      {index === 0 && (
                        <>
                          {/* Name */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                First name
                              </label>
                              <input
                                type="text"
                                name="firstName"
                                value={traveller.firstName}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="First name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Last name
                              </label>
                              <input
                                type="text"
                                name="lastName"
                                value={traveller.lastName}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="Last name"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                E-mail
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={traveller.email}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="name@example.com"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Confirm E-mail
                              </label>
                              <input
                                type="email"
                                name="confirmedEmail"
                                value={traveller.confirmedEmail}
                                onChange={(e) => handleChange(index, e)}
                                required
                                onPaste={(e) => e.preventDefault()}
                                onDrop={(e) => e.preventDefault()}
                                placeholder="Re-enter e-mail"
                                className={[
                                  "w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2",
                                  emailMismatch
                                    ? "border-red-400 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-sky-500"
                                ].join(" ")}
                              />
                              {emailMismatch && (
                                <p className="mt-1 text-xs text-red-600">
                                  Emails do not match.
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Country & Phone */}
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                            <div className="sm:col-span-6">
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Country
                              </label>
                              <select
                                name="country"
                                value={traveller.country}
                                onChange={(e) => handleCountryChange(index, e.target.value)}
                                required
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              >
                                <option value="">Select country</option>
                                {countries.map((c) => (
                                  <option key={c.name} value={c.name}>
                                    {c.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="sm:col-span-3">
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Code
                              </label>
                              <select
                                name="countryCode"
                                value={traveller.countryCode}
                                onChange={(e) => handleChange(index, e)}
                                required
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              >
                                <option value="">Code</option>
                                {codes.map((cc) => (
                                  <option key={cc.code} value={cc.code}>
                                    {cc.code}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="sm:col-span-3">
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Mobile Phone
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={traveller.phone}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. 712345678"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              />
                            </div>
                          </div>

                          {/* Package & Room (read-only) */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Surf Package
                              </label>
                              <input
                                type="text"
                                name="package"
                                value={traveller.package}
                                readOnly
                                placeholder="Auto-filled"
                                className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium text-gray-700">
                                Room
                              </label>
                              <input
                                type="text"
                                name="room"
                                value={traveller.room}
                                readOnly
                                placeholder="Auto-filled"
                                className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                              />
                            </div>
                          </div>

                          {/* Arrival (if addon selected) */}
                          {selectedAddons.some((a) => a.title === "Airport Pick-up") && (
                            <>
                              <h4 className="mt-4 text-sm font-semibold text-gray-900">
                                Arrival Information
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-700">
                                    Arrival Flight Number
                                  </label>
                                  <input
                                    type="text"
                                    name="arrivalFlightNumber"
                                    value={traveller.arrivalFlightNumber}
                                    onChange={(e) => handleChange(index, e)}
                                    disabled
                                    placeholder="e.g. QR 654"
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                                  />
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-700">
                                    Arrival Flight Date
                                  </label>
                                  <input
                                    type="date"
                                    name="arrivalFlightDate"
                                    value={traveller.arrivalFlightDate}
                                    onChange={(e) => handleChange(index, e)}
                                    readOnly
                                    min={new Date().toISOString().split("T")[0]}
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                                  />
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-700">
                                    Arrival Flight Time
                                  </label>
                                  <input
                                    type="time"
                                    name="arrivalFlightTime"
                                    value={traveller.arrivalFlightTime}
                                    onChange={(e) => handleChange(index, e)}
                                    readOnly
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {/* Departure (if addon selected) */}
                          {selectedAddons.some((a) => a.title === "Airport Drop") && (
                            <>
                              <h4 className="mt-4 text-sm font-semibold text-gray-900">
                                Departure Information
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-700">
                                    Departure Flight Number
                                  </label>
                                  <input
                                    type="text"
                                    name="departureFlightNumber"
                                    value={traveller.departureFlightNumber}
                                    onChange={(e) => handleChange(index, e)}
                                    disabled
                                    placeholder="e.g. QR 655"
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                                  />
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-700">
                                    Departure Flight Date
                                  </label>
                                  <input
                                    type="date"
                                    name="departureFlightDate"
                                    value={traveller.departureFlightDate}
                                    onChange={(e) => handleChange(index, e)}
                                    readOnly
                                    min={new Date().toISOString().split("T")[0]}
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                                  />
                                </div>
                                <div>
                                  <label className="mb-1 block text-xs font-medium text-gray-700">
                                    Departure Flight Time
                                  </label>
                                  <input
                                    type="time"
                                    name="departureFlightTime"
                                    value={traveller.departureFlightTime}
                                    onChange={(e) => handleChange(index, e)}
                                    readOnly
                                    className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm shadow-inner"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  ))}

                <button
                  type="submit"
                  disabled={isSubmitted || isLoading || emailMismatch}
                  className={[
                    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition",
                    isSubmitted || isLoading || emailMismatch
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-800"
                  ].join(" ")}
                >
                  {isLoading ? (
                    <>
                      Submitting...
                      <span className="ml-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      Booking Request Submitted
                      <FontAwesomeIcon icon={faSave} className="ml-2" />
                    </>
                  ) : (
                    <>
                      Submit Booking Request
                      <FontAwesomeIcon icon={faSave} className="ml-2" />

      
                    </>
                  )}
                </button>

                <div className="text-sm text-sky-700">
                  <p className="mt-2">
                    Once your booking request is submitted, we will verify availability and send
                  </p>
                  <p>you a payment link within 24 hours to confirm your reservation.</p>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Summary */}
          <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28 h-fit">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
              <Summary
                dateRange={dateRange}
                selectedPackages={selectedPackages}
                selectedRooms={selectedRooms}
                totalPrice={totalPrice}
                addons={selectedAddons}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <p className="text-sm text-gray-800">{alertMessage}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setShowAlert(false);
                  if (shouldReload) window.location.reload();
                }}
                className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
              >
                OK
              </button>
            </div>
              
          </div>
        </div>
      )}

      <BookingFooter />
    </>
  );
};

export default Information;
