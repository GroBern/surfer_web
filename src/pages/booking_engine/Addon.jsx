import React, { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  Button,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Summary from "../../components/booking_engine/Summary";
import BookingNavbar from "../../components/booking_engine/BookingNavbar";
import BookingFooter from "../../components/booking_engine/BookingFooter";

const Addon = () => {
  const [dateRange] = useState(() => {
    try { return JSON.parse(localStorage.getItem("dateRange")) || null; }
    catch { return null; }
  });

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [totalSelectedPackages, setTotalSelectedPackages] = useState(0);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(() => {
    try { return JSON.parse(localStorage.getItem("totalPrice")) || 0; }
    catch { return 0; }
  });
  const [selectedAddons, setSelectedAddons] = useState(() => {
    try { return JSON.parse(localStorage.getItem("addons")) || []; }
    catch { return []; }
  });
  const [travellerInfo, setTravellerInfo] = useState(() => {
    try { return JSON.parse(localStorage.getItem("travellerInfo")) || [{}]; }
    catch { return [{}]; }
  });

  // ---- load selections
  useEffect(() => {
    const rooms = localStorage.getItem("selectedRooms");
    if (rooms) setSelectedRooms(JSON.parse(rooms));

    const pkgs = localStorage.getItem("selectedPackages");
    if (pkgs) {
      const parsed = JSON.parse(pkgs);
      setSelectedPackages(parsed);
      const total = parsed.reduce((sum, line) => {
        const count = parseInt(line.split(" x ")[0], 10) || 0;
        return sum + count;
      }, 0);
      setTotalSelectedPackages(total);
    }
  }, []);

  // ---- persist
  useEffect(() => {
    localStorage.setItem("addons", JSON.stringify(selectedAddons));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("travellerInfo", JSON.stringify(travellerInfo));
  }, [selectedAddons, totalPrice, travellerInfo]);

  // ---- helpers (string <-> dayjs)
  const toYMD = (d) => (d ? dayjs(d).format("YYYY-MM-DD") : "");
  const fromYMD = (str) => (str ? dayjs(str, "YYYY-MM-DD") : null);
  const toHM = (d) => (d ? dayjs(d).format("HH:mm") : "");
  const fromHM = (str) => (str ? dayjs(str, "HH:mm") : null);

  // current values as dayjs
  const arrivalDate = useMemo(
    () => fromYMD(travellerInfo[0]?.arrivalFlightDate),
    [travellerInfo]
  );
  const departureDate = useMemo(
    () => fromYMD(travellerInfo[0]?.departureFlightDate),
    [travellerInfo]
  );
  const arrivalTime = useMemo(
    () => fromHM(travellerInfo[0]?.arrivalFlightTime),
    [travellerInfo]
  );
  const departureTime = useMemo(
    () => fromHM(travellerInfo[0]?.departureFlightTime),
    [travellerInfo]
  );

  // mobile behavior: MUI pickers switch to mobile below 640px
  const isMobile = useMediaQuery("(max-width:640px)");

  // ---- handlers
  const handleFlightInfoChange = (name, value) => {
    setTravellerInfo((prev) => {
      const next = Array.isArray(prev) ? [...prev] : [];
      if (next.length === 0) next.push({});
      next[0] = { ...next[0], [name]: value };
      return next;
    });
  };

  const isAddonActive = (title) => selectedAddons.some((a) => a.title === title);

  const handleArrivalFee = () => {
    const active = isAddonActive("Airport Pick-up");
    const price = totalSelectedPackages >= 4 ? 100 : 75;
    if (active) {
      setSelectedAddons((prev) => prev.filter((a) => a.title !== "Airport Pick-up"));
      setTotalPrice((p) => p - price);
    } else {
      setSelectedAddons((prev) => [...prev, { title: "Airport Pick-up", amount: 1, price }]);
      setTotalPrice((p) => p + price);
    }
  };

  const handleDepartureFee = () => {
    const active = isAddonActive("Airport Drop");
    const price = totalSelectedPackages >= 4 ? 100 : 65;
    if (active) {
      setSelectedAddons((prev) => prev.filter((a) => a.title !== "Airport Drop"));
      setTotalPrice((p) => p - price);
    } else {
      setSelectedAddons((prev) => [...prev, { title: "Airport Drop", amount: 1, price }]);
      setTotalPrice((p) => p + price);
    }
  };

  // ---- validation
  const isArrivalInfoValid = () => {
    if (!isAddonActive("Airport Pick-up")) return true;
    const info = travellerInfo[0] || {};
    return info.arrivalFlightNumber && info.arrivalFlightDate && info.arrivalFlightTime;
  };
  const isDepartureInfoValid = () => {
    if (!isAddonActive("Airport Drop")) return true;
    const info = travellerInfo[0] || {};
    return info.departureFlightNumber && info.departureFlightDate && info.departureFlightTime;
  };
  const isFormValid = isArrivalInfoValid() && isDepartureInfoValid();

  return (
    <>
      <BookingNavbar />

      {/* Minor polish for pickers + container */}
      <style>{`
        .mui-card { border: 1px solid #e5e7eb; border-radius: 14px; background: #fff; box-shadow: 0 6px 18px rgba(2,6,23,.06); }
        .mui-head { display:flex; gap:.75rem; align-items:center; justify-content:space-between; padding:1rem; }
        .mui-body { padding:0 1rem 1rem; color:#374151; font-size:.925rem; }
        @media (max-width:640px){ .mui-grid{grid-template-columns:1fr!important} }
      `}</style>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <div className="px-5 md:px-[6%] py-[10%] mb-[5%]">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
            Select Airport Details
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Add airport transfers and provide your flight details for smooth pickup/drop.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {/* LEFT column */}
            <div className="lg:col-span-2 space-y-6">
              {/* PICK-UP */}
              <div className="mui-card">
                <div className="mui-head">
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Airport Pick-up{" "}
                      <span className="font-normal text-gray-600">
                        {totalSelectedPackages <= 3 ? "(up to 3 people)" : "(4+ people)"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700">
                      EUR {totalSelectedPackages >= 4 ? 100 : 75}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Boolean(travellerInfo[0]?.hasSurfboard)}
                          onChange={(e) =>
                            handleFlightInfoChange("hasSurfboard", e.target.checked)
                          }
                          size="small"
                        />
                      }
                      label="Will you bring a surfboard?"
                    />
                    <Button
                      variant={isAddonActive("Airport Pick-up") ? "contained" : "outlined"}
                      onClick={handleArrivalFee}
                      color="info"
                      size="small"
                    >
                      {isAddonActive("Airport Pick-up") ? "Remove" : "Add"}
                    </Button>
                  </div>
                </div>

                <div className="mui-body">
                  Transfer from Bandaranaike International Airport to the Surf Camp.
                  Price for up to 3 pax: €75. Price for 4 pax or more: €100.
                </div>

                {isAddonActive("Airport Pick-up") && (
                  <div className="px-4 pb-5">
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Arrival Information
                      </h4>

                      <div className="grid mui-grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Arrival Flight Number
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. QR 654"
                            value={travellerInfo[0]?.arrivalFlightNumber || ""}
                            onChange={(e) => handleFlightInfoChange("arrivalFlightNumber", e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Arrival Flight Date
                          </label>
                          <DatePicker
                            value={arrivalDate}
                            onChange={(d) => handleFlightInfoChange("arrivalFlightDate", toYMD(d))}
                            minDate={dayjs()}
                            desktopModeMediaQuery="(min-width:640px)"
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                size: "small",
                                placeholder: "Pick a date",
                              },
                            }}
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Arrival Flight Time
                          </label>
                          <TimePicker
                            value={arrivalTime}
                            onChange={(d) => handleFlightInfoChange("arrivalFlightTime", toHM(d))}
                            minutesStep={15}
                            desktopModeMediaQuery="(min-width:640px)"
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                size: "small",
                                placeholder: isMobile ? "HH:MM" : "Select time",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DROP */}
              <div className="mui-card">
                <div className="mui-head">
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Airport Drop{" "}
                      <span className="font-normal text-gray-600">
                        {totalSelectedPackages <= 3 ? "(up to 3 people)" : "(4+ people)"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700">
                      EUR {totalSelectedPackages >= 4 ? 100 : 65}
                    </div>
                  </div>
                  <Button
                    variant={isAddonActive("Airport Drop") ? "contained" : "outlined"}
                    onClick={handleDepartureFee}
                    color="info"
                    size="small"
                  >
                    {isAddonActive("Airport Drop") ? "Remove" : "Add"}
                  </Button>
                </div>

                <div className="mui-body">
                  Transfer from the Surf Camp to Bandaranaike International Airport.
                  Price for up to 3 pax: €65. Price for 4 pax or more: €100.
                </div>

                {isAddonActive("Airport Drop") && (
                  <div className="px-4 pb-5">
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">
                        Departure Information
                      </h4>

                      <div className="grid mui-grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Departure Flight Number
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. QR 655"
                            value={travellerInfo[0]?.departureFlightNumber || ""}
                            onChange={(e) => handleFlightInfoChange("departureFlightNumber", e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Departure Flight Date
                          </label>
                          <DatePicker
                            value={departureDate}
                            onChange={(d) => handleFlightInfoChange("departureFlightDate", toYMD(d))}
                            minDate={arrivalDate || dayjs()}
                            desktopModeMediaQuery="(min-width:640px)"
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                size: "small",
                                placeholder: "Pick a date",
                              },
                            }}
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Departure Flight Time
                          </label>
                          <TimePicker
                            value={departureTime}
                            onChange={(d) => handleFlightInfoChange("departureFlightTime", toHM(d))}
                            minutesStep={15}
                            desktopModeMediaQuery="(min-width:640px)"
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                size: "small",
                                placeholder: isMobile ? "HH:MM" : "Select time",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT column */}
            <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
                <Summary
                  dateRange={dateRange}
                  selectedPackages={selectedPackages}
                  selectedRooms={selectedRooms}
                  totalPrice={totalPrice}
                  addons={selectedAddons}
                />
              </div>

              <Link
                to={isFormValid ? "/information" : "#"}
                onClick={(e) => {
                  if (!isFormValid) {
                    e.preventDefault();
                    alert("Please fill in all required arrival and/or departure flight information.");
                  }
                }}
                className="block"
                aria-disabled={!isFormValid}
              >
                <div
                  className={[
                    "grid h-12 sm:h-14 w-full place-items-center rounded-lg text-base font-semibold transition",
                    isFormValid
                      ? "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700"
                      : "cursor-not-allowed bg-gray-300 text-gray-600"
                  ].join(" ")}
                >
                  Traveller Details <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                </div>
              </Link>
            </aside>
          </div>
        </div>
      </LocalizationProvider>

      <BookingFooter />
    </>
  );
};

export default Addon;