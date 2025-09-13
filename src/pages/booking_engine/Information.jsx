import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import axios from "axios";
import { API_BASE_URL } from '../../config/api';
import BookingNavbar from '../../components/booking_engine/BookingNavbar';
import BookingFooter from '../../components/booking_engine/BookingFooter';

const Information = () => {
  const [selectedCamp, setSelectedCamp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState(() => {
    const storedDateRange = localStorage.getItem("dateRange");
    return storedDateRange ? JSON.parse(storedDateRange) : null;
  });
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(() => {
    const storedPrice = localStorage.getItem("totalPrice");
    return storedPrice ? JSON.parse(storedPrice) : 0;
  });
  const [selectedAddons, setSelectedAddons] = useState(() => {
    const storedAddons = localStorage.getItem("addons");
    return storedAddons ? JSON.parse(storedAddons) : [];
  });
  const [travellerInfo, setTravellerInfo] = useState(false);
  const [personCount, setPersonCount] = useState(0);
  const [formData, setFormData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(() => {
    const stored = localStorage.getItem("isSubmitted");
    return stored ? JSON.parse(stored) : false;
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    const storedCamp = localStorage.getItem("selectedCamp");
    if (storedCamp) setSelectedCamp(storedCamp);

    const storedPackages = localStorage.getItem("selectedPackages");
    if (storedPackages) {
      const packageArray = JSON.parse(storedPackages);
      setSelectedPackages(packageArray);

      const totalPersons = packageArray.reduce((sum, pkg) => {
        const count = parseInt(pkg.split(" x ")[0]);
        return sum + count;
      }, 0);
      setPersonCount(totalPersons);
    }

    const storedRooms = localStorage.getItem("selectedRooms");
    if (storedRooms) {
      setSelectedRooms(JSON.parse(storedRooms));
    }

    const storedTravellers = localStorage.getItem("travellerInfo");
    if (storedTravellers) {
      setFormData(JSON.parse(storedTravellers));
      setTravellerInfo(true);
    }
  }, []);

  const countries = [
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
  ];

  const codes = [
    { code: "+1" },
    { code: "+1-242" },
    { code: "+1-246" },
    { code: "+1-268" },
    { code: "+1-284" },
    { code: "+1-340" },
    { code: "+1-345" },
    { code: "+1-441" },
    { code: "+1-473" },
    { code: "+1-649" },
    { code: "+1-664" },
    { code: "+1-670" },
    { code: "+1-671" },
    { code: "+1-684" },
    { code: "+1-721" },
    { code: "+1-758" },
    { code: "+1-767" },
    { code: "+1-784" },
    { code: "+1-809" },
    { code: "+1-868" },
    { code: "+1-869" },
    { code: "+1-876" },
    { code: "+20" },
    { code: "+211" },
    { code: "+212" },
    { code: "+213" },
    { code: "+216" },
    { code: "+218" },
    { code: "+220" },
    { code: "+221" },
    { code: "+222" },
    { code: "+223" },
    { code: "+224" },
    { code: "+225" },
    { code: "+226" },
    { code: "+227" },
    { code: "+228" },
    { code: "+229" },
    { code: "+230" },
    { code: "+231" },
    { code: "+232" },
    { code: "+233" },
    { code: "+234" },
    { code: "+235" },
    { code: "+236" },
    { code: "+237" },
    { code: "+238" },
    { code: "+239" },
    { code: "+240" },
    { code: "+241" },
    { code: "+242" },
    { code: "+243" },
    { code: "+244" },
    { code: "+245" },
    { code: "+246" },
    { code: "+248" },
    { code: "+249" },
    { code: "+250" },
    { code: "+251" },
    { code: "+252" },
    { code: "+253" },
    { code: "+254" },
    { code: "+255" },
    { code: "+256" },
    { code: "+257" },
    { code: "+258" },
    { code: "+260" },
    { code: "+261" },
    { code: "+262" },
    { code: "+263" },
    { code: "+264" },
    { code: "+265" },
    { code: "+266" },
    { code: "+267" },
    { code: "+268" },
    { code: "+269" },
    { code: "+27" },
    { code: "+290" },
    { code: "+291" },
    { code: "+297" },
    { code: "+298" },
    { code: "+299" },
    { code: "+30" },
    { code: "+31" },
    { code: "+32" },
    { code: "+33" },
    { code: "+34" },
    { code: "+350" },
    { code: "+351" },
    { code: "+352" },
    { code: "+353" },
    { code: "+354" },
    { code: "+355" },
    { code: "+356" },
    { code: "+357" },
    { code: "+358" },
    { code: "+359" },
    { code: "+36" },
    { code: "+370" },
    { code: "+371" },
    { code: "+372" },
    { code: "+373" },
    { code: "+374" },
    { code: "+375" },
    { code: "+376" },
    { code: "+377" },
    { code: "+378" },
    { code: "+379" },
    { code: "+380" },
    { code: "+381" },
    { code: "+382" },
    { code: "+383" },
    { code: "+385" },
    { code: "+386" },
    { code: "+387" },
    { code: "+389" },
    { code: "+39" },
    { code: "+40" },
    { code: "+41" },
    { code: "+420" },
    { code: "+421" },
    { code: "+423" },
    { code: "+43" },
    { code: "+44" },
    { code: "+45" },
    { code: "+46" },
    { code: "+47" },
    { code: "+48" },
    { code: "+49" },
    { code: "+500" },
    { code: "+501" },
    { code: "+502" },
    { code: "+503" },
    { code: "+504" },
    { code: "+505" },
    { code: "+506" },
    { code: "+507" },
    { code: "+508" },
    { code: "+509" },
    { code: "+51" },
    { code: "+52" },
    { code: "+53" },
    { code: "+54" },
    { code: "+55" },
    { code: "+56" },
    { code: "+57" },
    { code: "+58" },
    { code: "+590" },
    { code: "+591" },
    { code: "+592" },
    { code: "+593" },
    { code: "+594" },
    { code: "+595" },
    { code: "+596" },
    { code: "+597" },
    { code: "+598" },
    { code: "+599" },
    { code: "+60" },
    { code: "+61" },
    { code: "+62" },
    { code: "+63" },
    { code: "+64" },
    { code: "+65" },
    { code: "+66" },
    { code: "+670" },
    { code: "+672" },
    { code: "+673" },
    { code: "+674" },
    { code: "+675" },
    { code: "+676" },
    { code: "+677" },
    { code: "+678" },
    { code: "+679" },
    { code: "+680" },
    { code: "+681" },
    { code: "+682" },
    { code: "+683" },
    { code: "+685" },
    { code: "+686" },
    { code: "+687" },
    { code: "+688" },
    { code: "+689" },
    { code: "+690" },
    { code: "+691" },
    { code: "+692" },
    { code: "+7" },
    { code: "+81" },
    { code: "+82" },
    { code: "+84" },
    { code: "+850" },
    { code: "+852" },
    { code: "+853" },
    { code: "+855" },
    { code: "+856" },
    { code: "+86" },
    { code: "+880" },
    { code: "+886" },
    { code: "+90" },
    { code: "+91" },
    { code: "+92" },
    { code: "+93" },
    { code: "+94" },
    { code: "+95" },
    { code: "+960" },
    { code: "+961" },
    { code: "+962" },
    { code: "+963" },
    { code: "+964" },
    { code: "+965" },
    { code: "+966" },
    { code: "+967" },
    { code: "+968" },
    { code: "+970" },
    { code: "+971" },
    { code: "+972" },
    { code: "+973" },
    { code: "+974" },
    { code: "+975" },
    { code: "+976" },
    { code: "+977" },
    { code: "+98" },
    { code: "+992" },
    { code: "+993" },
    { code: "+994" },
    { code: "+995" },
    { code: "+996" },
    { code: "+998" }
  ]

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
          departureFlightTime: "",
        }))
      );
    }
  }, [personCount, formData.length]); // Ensure it runs only when necessary

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], [name]: value };
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Prepare the data for API request
    const bookingData = {
      selectedCamp: selectedCamp,
      dateRange,
      selectedPackages,
      selectedRooms,
      addons: selectedAddons,
      totalPrice,
      travellerInfo: formData,
    };

    try {
      // const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);

      if (true) {
        // await axios.post(`${API_BASE_URL}/bookings/send-confirmation`, {
        //   selectedCamp,
        //   dateRange,
        //   selectedPackages,
        //   selectedRooms,
        //   addons: selectedAddons,
        //   totalPrice,
        //   travellerInfo: formData,
        // });

        localStorage.setItem("travellerInfo", JSON.stringify(formData));
        setTravellerInfo(true);
        localStorage.setItem("isSubmitted", true);

        setAlertMessage("Thank you for your booking request. We will contact you via email within 24 hours.");
        setShowAlert(true);
        setShouldReload(true);
      } else {
        setAlertMessage("Failed to save booking. Please try again.");
        setShouldReload(false);
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Error saving booking.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BookingNavbar />
       <div className="px-5 md:px-[10%] py-[10%] mb-[10%]">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section: Traveller Form */}
          <div className="w-full md:w-2/3 border border-black rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl font-semibold mb-6">Contact Person Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formData.length > 0 && formData.map((traveller, index) => (
                <div key={index}>
                  {index === 0 && (
                    <>
                      {/* Name Inputs */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="First name"
                          name="firstName"
                          value={traveller.firstName}
                          onChange={(e) => handleChange(index, e)}
                          required
                          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md text-base"
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          name="lastName"
                          value={traveller.lastName}
                          onChange={(e) => handleChange(index, e)}
                          required
                          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md text-base"
                        />
                      </div>

                      {/* Email Inputs */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          value={traveller.email}
                          onChange={(e) => handleChange(index, e)}
                          required
                          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md text-base"
                        />
                        <input
                          type="email"
                          placeholder="Confirm E-mail"
                          name="confirmedEmail"
                          value={traveller.confirmedEmail}
                          onChange={(e) => handleChange(index, e)}
                          required
                          onPaste={(e) => e.preventDefault()}
                          onDrop={(e) => e.preventDefault()}
                          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-md text-base"
                        />
                      </div>
                      {traveller.confirmedEmail && traveller.email !== traveller.confirmedEmail && (
                        <p className="text-red-500 text-sm mb-2">Emails do not match!</p>
                      )}

                      {/* Country & Phone */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <select
                          name="country"
                          value={traveller.country}
                          onChange={(e) =>
                            handleChange(index, { target: { name: "country", value: e.target.value } })
                          }
                          required
                          className="flex-[6] p-2 border border-gray-300 rounded-md bg-white"
                        >
                          <option value="">Country</option>
                          {countries.map((country) => (
                            <option key={country.name} value={country.name}>{country.name}</option>
                          ))}
                        </select>

                        <select
                          name="countryCode"
                          value={traveller.countryCode}
                          onChange={(e) =>
                            handleChange(index, { target: { name: "countryCode", value: e.target.value } })
                          }
                          required
                          className="flex-1 p-2 border border-gray-300 rounded-md bg-white"
                        >
                          <option value="">Code</option>
                          {codes.map((code) => (
                            <option key={code.code} value={code.code}>{code.code}</option>
                          ))}
                        </select>

                        <input
                          type="tel"
                          placeholder="Mobile Phone"
                          name="phone"
                          value={traveller.phone}
                          onChange={(e) => handleChange(index, e)}
                          required
                          className="flex-[3] p-2 border border-gray-300 rounded-md text-base"
                        />
                      </div>

                      {/* Package & Room */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Surf Package"
                          name="package"
                          value={traveller.package}
                          readOnly
                          className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                        <input
                          type="text"
                          placeholder="Room"
                          name="room"
                          value={traveller.room}
                          readOnly
                          className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                      </div>

                      {/* Arrival & Departure Info */}
                      {selectedAddons.map((addon) => (
                        addon.title === "Airport Pick-up" && (
                          <div key="arrival">
                            <h4 className="text-lg font-semibold mb-2">Arrival Information</h4>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <input
                                type="text"
                                placeholder="Arrival Flight Number"
                                name="arrivalFlightNumber"
                                value={traveller.arrivalFlightNumber}
                                onChange={(e) => handleChange(index, e)}
                                disabled
                                className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                              />
                              <input
                                type="date"
                                name="arrivalFlightDate"
                                value={traveller.arrivalFlightDate}
                                onChange={(e) => handleChange(index, e)}
                                readOnly
                                min={new Date().toISOString().split("T")[0]}
                                className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                              />
                              <input
                                type="time"
                                name="arrivalFlightTime"
                                value={traveller.arrivalFlightTime}
                                onChange={(e) => handleChange(index, e)}
                                readOnly
                                className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                              />
                            </div>
                          </div>
                        )
                      ))}

                      {selectedAddons.map((addon) => (
                        addon.title === "Airport Drop" && (
                          <div key="departure">
                            <h4 className="text-lg font-semibold mb-2">Departure Information</h4>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <input
                                type="text"
                                placeholder="Departure Flight Number"
                                name="departureFlightNumber"
                                value={traveller.departureFlightNumber}
                                onChange={(e) => handleChange(index, e)}
                                disabled
                                className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                              />
                              <input
                                type="date"
                                name="departureFlightDate"
                                value={traveller.departureFlightDate}
                                onChange={(e) => handleChange(index, e)}
                                readOnly
                                min={new Date().toISOString().split('T')[0]}
                                className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                              />
                              <input
                                type="time"
                                name="departureFlightTime"
                                value={traveller.departureFlightTime}
                                onChange={(e) => handleChange(index, e)}
                                readOnly
                                className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                              />
                            </div>
                          </div>
                        )
                      ))}

                      <hr className="my-4 border-gray-300" />
                    </>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className={`px-5 py-2 rounded-md text-white flex items-center gap-2
                  ${isSubmitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}
                  ${isLoading ? 'cursor-wait' : ''}`}
              >
                {isLoading ? 'Submitting...' : isSubmitted ? 'Booking Request Submitted' : 'Submit Booking Request'}
                <FontAwesomeIcon icon={faSave} />
              </button>

              {showAlert && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-1000">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="mb-4">{alertMessage}</p>
                    <button
                      onClick={() => {
                        setShowAlert(false);
                        if (shouldReload) window.location.reload();
                      }}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                      OK
                    </button>
                  </div>
                </div>
              )}

            </form>

            <p className="mt-5 text-blue-700">Once your booking request is submitted, we will verify availability and send</p>
            <p className="text-blue-700">you a payment link within 24 hours to confirm your reservation.</p>
          </div>

          {/* Right Section: Summary */}
          <div className="w-full md:w-1/3">
            <Summary
              dateRange={dateRange}
              selectedPackages={selectedPackages}
              selectedRooms={selectedRooms}
              totalPrice={totalPrice}
              addons={selectedAddons}
            />
          </div>
        </div>
      </div>
      <BookingFooter />
    </>
  );
};

export default Information;
