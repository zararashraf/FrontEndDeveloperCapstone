import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  const [availableTimes] = useState([
    "12:00 PM",
    "1:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]);

  return (
    <>
      <h1 className="booking">Book Now!</h1>
      <div className="booking-container">
        <div className="booking-form-container">
          <BookingForm availableTimes={availableTimes} />
        </div>
      </div>
    </>
  );
};

export default Booking;
