import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from "../../config/api";

const Form = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    inquiryReason: "",
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));

    // Clear error for field on change
    setErrors((prev) => ({ ...prev, [name]: "" }));

    // Check email mismatch in real-time
    if (name === "email" || name === "confirmEmail") {
      setErrors((prev) => ({
        ...prev,
        emailMismatch:
          name === "confirmEmail"
            ? value !== formData.email
            : formData.confirmEmail !== value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.inquiryReason) newErrors.inquiryReason = t("form.validation.required");
    if (!formData.firstName) newErrors.firstName = t("form.validation.required");
    if (!formData.lastName) newErrors.lastName = t("form.validation.required");
    if (!formData.email) newErrors.email = t("form.validation.required");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t("form.validation.invalidEmail");

    if (!formData.confirmEmail) newErrors.confirmEmail = t("form.validation.required");
    else if (formData.confirmEmail !== formData.email)
      newErrors.emailMismatch = t("form.validation.emailMismatch");

    if (!formData.phone) newErrors.phone = t("form.validation.required");
    else if (!/^\+?\d{7,15}$/.test(formData.phone))
      newErrors.phone = t("form.validation.invalidPhone");

    if (!formData.country) newErrors.country = t("form.validation.required");
    if (!formData.message) newErrors.message = t("form.validation.required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${API_BASE_URL}/bookings/send-contact-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, success: t("form.success"), error: null });
        alert("We’ll get back to you shortly!");
        setFormData({
          inquiryReason: "",
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        setStatus({ loading: false, success: null, error: t("form.error") });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: t("form.error") });
    }
  };

  const reasons = t("form.select.options", { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto p-5">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {t("form.title")}
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="w-full">
          <select
            name="inquiryReason"
            value={formData.inquiryReason}
            onChange={handleChange}
            className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 appearance-none ${
              errors.inquiryReason ? "border-red-500" : "border-gray-200"
            }`}
            required
            aria-label={t("form.select.placeholder")}
          >
            <option value="">{t("form.select.placeholder")}</option>
            {reasons.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.inquiryReason && (
            <p className="mt-1 text-xs text-red-600">{errors.inquiryReason}</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-5 space-y-0">
          <div className="flex-1">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("form.placeholders.firstName")}
              className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("form.placeholders.lastName")}
              className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 space-y-0">
          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form.placeholders.email")}
              className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 ${
                errors.email || errors.emailMismatch ? "border-red-500" : "border-gray-200"
              }`}
              required
              aria-invalid={errors.emailMismatch ? "true" : "false"}
              aria-describedby={errors.emailMismatch ? "email-mismatch" : undefined}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              placeholder={t("form.placeholders.confirmEmail")}
              className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 ${
                errors.confirmEmail || errors.emailMismatch ? "border-red-500" : "border-gray-200"
              }`}
              required
              aria-invalid={errors.emailMismatch ? "true" : "false"}
              aria-describedby={errors.emailMismatch ? "email-mismatch" : undefined}
            />
            {errors.confirmEmail && (
              <p className="mt-1 text-xs text-red-600">{errors.confirmEmail}</p>
            )}
            {errors.emailMismatch && (
              <p id="email-mismatch" className="mt-1 text-xs text-red-600">
                {errors.emailMismatch}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 space-y-0">
          <div className="flex-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("form.placeholders.phone")}
              className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 ${
                errors.phone ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder={t("form.placeholders.country")}
              className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 ${
                errors.country ? "border-red-500" : "border-gray-200"
              }`}
              required
            />
            {errors.country && (
              <p className="mt-1 text-xs text-red-600">{errors.country}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form.placeholders.message")}
            className={`w-full p-4 border text-base font-bold bg-white shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md transition-all duration-300 text-neutral-400 placeholder-neutral-400 resize-y min-h-[120px] font-inherit ${
              errors.message ? "border-red-500" : "border-gray-200"
            }`}
            rows="6"
            required
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={status.loading}
            className="bg-blue-600 text-white border-none py-3 px-6 text-base cursor-pointer transition-all duration-300 font-semibold shadow-md hover:bg-blue-700 active:transform active:translate-y-0.5 disabled:opacity-50"
            aria-label={t("form.button")}
          >
            {status.loading ? t("form.sending") : t("form.button")}
          </button>
        </div>
      </form>

      {status.success && (
        <p className="mt-4 text-green-600 text-sm">{status.success}</p>
      )}
      {status.error && (
        <p className="mt-4 text-red-600 text-sm">{status.error}</p>
      )}
    </div>
  );
};

export default Form;
