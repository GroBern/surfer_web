import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from '../../config/api';

const PaymentRequest = () => {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/bookings/${bookingId}`
        );
        setBooking(res.data);
      } catch (err) {
        console.error("Booking not found", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (bookingId) {
      fetchBooking();
    } else {
      setLoading(false);
      setNotFound(true);
    }
  }, [bookingId]);

  const handleSubmitPayment = () => {
    // Redirect to checkout page
    navigate(`/checkout/${booking._id}`);
  };

  if (loading) {
    return <div className="status-message">Loading booking details...</div>;
  }

  if (notFound) {
    return <div className="status-message error">Booking not found.</div>;
  }

  const {
    travellerInfo,
    selectedCamp,
    dateRange,
    selectedPackages,
    selectedRooms,
    addons,
    finalPrice,
  } = booking;

  const traveller = travellerInfo[0] || {};

  return (
    <div className="payment-request-container">
      <h2>Booking Summary</h2>

      <div className="summary-box">
        <p><strong>Name:</strong> {traveller.firstName} {traveller.lastName}</p>
        <p><strong>Email:</strong> {traveller.email}</p>
        <p><strong>Camp:</strong> {selectedCamp}</p>
        <p><strong>Date Range:</strong> {dateRange}</p>
        <p><strong>Packages:</strong> {selectedPackages.join(", ")}</p>
        <p><strong>Rooms:</strong> {selectedRooms.join(", ")}</p>
        <p><strong>Addons:</strong> {addons.map(a => a.title).join(", ") || "None"}</p>
        <p><strong>Total Reservation Amount:</strong> €{booking.totalPrice}</p>
        {finalPrice &&
          <>
            <p><strong>Discount Percentage:</strong> {booking.discount ? `${booking.discount}%` : "None"}</p>
            <p><strong>Total Amount After Discount:</strong> €{finalPrice}</p>
          </>
        }
      </div>

      <button className="submit-payment-btn" onClick={handleSubmitPayment}>
        Submit Payment
      </button>
    </div>
  );
};

export default PaymentRequest;
