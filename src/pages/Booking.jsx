import React from "react";
import ReservationForm from "../components/ReservationForm";

const Booking = () => {
  return (
    <>
      <h1 className="booking">Book Now!</h1>
      <div className="booking-container">
        <div className="booking-form-container">
          <ReservationForm />
        </div>
      </div>
    </>
  );
};

export default Booking;
