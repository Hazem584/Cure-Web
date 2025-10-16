import React, { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import PaymentModal from "./PaymentModal";
import { FaCcVisa, FaPaypal } from "react-icons/fa";
import { SiApplepay } from "react-icons/si";

const getFormattedDate = (date) =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

const paymentMethods = [
  {
    id: "credit-card",
    label: "Credit Card",
    description: "Visa",
    icon: FaCcVisa,
  },
  {
    id: "paypal",
    label: "PayPal",
    description: "",
    icon: FaPaypal,
  },
  {
    id: "apple-pay",
    label: "Apple Pay",
    description: "",
    icon: SiApplepay,
  },
];

const BookingCalendar = ({
  dates,
  timeSlots,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}) => {
  const formattedSelectedDate = selectedDate
    ? getFormattedDate(selectedDate)
    : "";
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);

  const selectedAppointment =
    selectedDate && selectedTime
      ? { date: formattedSelectedDate, time: selectedTime }
      : null;

  const handleBook = () => {
    if (!selectedAppointment) return;
    setShowPaymentSummary(true);
  };

  return (
    <section className="rounded-4xl bg-white p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-500">
            Make an appointment
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-slate-100 bg-slate-50 p-6">
        <div className="flex justify-between items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            Choose date and time
          </h2>
          <div className="flex items-center gap-2 text-slate-600">
            <HiOutlineCalendar className="text-lg" />
            <span>{formattedSelectedDate}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between ">
          {dates.map((date) => {
            const isSelected =
              selectedDate?.toDateString() === date.value.toDateString();
            return (
              <button
                key={date.value.toISOString()}
                type="button"
                onClick={() => onSelectDate(date.value)}
                className={`flex h-20 w-16 flex-col items-center justify-center rounded-2xl border text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white shadow"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:text-blue-500"
                }`}
              >
                <span>{date.label}</span>
                <span className="text-lg font-semibold">{date.day}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          {timeSlots.map((slot) => {
            const isSelected = selectedTime === slot.value;
            return (
              <button
                key={slot.value}
                type="button"
                onClick={() => onSelectTime(slot.value)}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white shadow"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-500"
                }`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-500">
            {selectedDate && selectedTime
              ? `${formattedSelectedDate} · ${selectedTime}`
              : "Select a date and time"}
          </div>
          <button
            type="button"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            disabled={!selectedAppointment}
            onClick={handleBook}
          >
            Book
          </button>
        </div>
      </div>

      {showPaymentSummary && selectedAppointment && (
        <PaymentModal
          appointment={selectedAppointment}
          onClose={() => setShowPaymentSummary(false)}
        />
      )}
    </section>
  );
};

export default BookingCalendar;
