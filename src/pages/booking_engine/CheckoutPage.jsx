import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from '../../config/api';

const CheckoutPage = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
    confirmEmail: "",
    notes: "",
    agreed: false,
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/bookings/${bookingId}`
        );
        setBooking(res.data);
        const t = res.data.travellerInfo[0] || {};
        setFormData((prev) => ({
          ...prev,
          firstName: t.firstName || "",
          lastName: t.lastName || "",
          email: t.email || "",
          phone: t.phone || "",
        }));
      } catch (err) {
        console.error("Failed to fetch booking", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setError("Emails do not match.");
      return;
    }

    if (!formData.agreed) {
      setError("You must agree to the terms.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      // Step 1: Get the payment session from your backend
      const response = await axios.post(`${API_BASE_URL}/bookings/generate-payment-session`, {
        amount: (booking.finalPrice * 0.25).toFixed(0),
        currency: "EUR",
        orderId: booking._id,
      });

      const { sessionId, merchantId } = response.data;

      // Step 2: Use the MPGS SDK to show the payment popup
      window.Checkout.configure({
        session: {
          id: sessionId,
        },
        order: {
          amount: (booking.finalPrice * 0.25).toFixed(0),
          currency: "EUR",
          description: `Booking payment for ${booking.travellerInfo[0].firstName}`,
        },
        merchant: merchantId,
        interaction: {
          operation: "PURCHASE",
          merchant: {
            name: "The Surfer Weligama",
            address: {
              line1: "Weligama Beach",
              line2: "Sri Lanka",
            },
          },
          displayControl: {
            billingAddress: "HIDE",
          },
        },
      });

      window.Checkout.showPaymentPage();

    } catch (err) {
      console.error(err);
      setError("Failed to open payment popup.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="status-message">Loading checkout...</div>;
  }

  if (!booking) {
    return <div className="status-message error">Booking not found.</div>;
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Complete Your Payment</h2>
      <div className="checkout-summary">
        <p><strong>Total Amount After Discount:</strong> €{booking.finalPrice}</p>
        <p><strong>Payable now:</strong> €{(booking.finalPrice * 0.25).toFixed(0)}</p>
        <p><strong>Due Amount on Arrival:</strong> €{(booking.finalPrice - (booking.finalPrice * 0.25)).toFixed(0)}</p>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required />
        <input name="email" placeholder="Email *" value={formData.email} onChange={handleChange} type="email" required />
        <input name="confirmEmail" placeholder="Confirm Email *" value={formData.confirmEmail} onChange={handleChange} type="email" required />
        <input name="country" placeholder="Country / Region *" value={formData.country} onChange={handleChange} required />
        <input name="address" placeholder="Street Address *" value={formData.address} onChange={handleChange} required />
        <input name="postalCode" placeholder="Postcode / ZIP *" value={formData.postalCode} onChange={handleChange} required />
        <input name="city" placeholder="City *" value={formData.city} onChange={handleChange} required />
        <input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required />
        <textarea name="notes" placeholder="Order notes (optional)" value={formData.notes} onChange={handleChange}></textarea>

        <div style={{ margin: "10px 0" }}>
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a style={{textDecoration: "none"}} href="https://thesurferweligama.com/privacy-policy/" target="_blank">privacy policy.</a></p>
          <label style={{ display: "flex" }}>
            <input style={{ width: "unset", marginBottom: 0 }} type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} />
            {" "}<span>I have read and agree to the website <a style={{textDecoration: "none"}} href="https://thesurferweligama.com/terms-and-conditions/" target="_blank"> terms and conditions *</a></span> 
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={submitting}>
          {submitting ? "Redirecting..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
