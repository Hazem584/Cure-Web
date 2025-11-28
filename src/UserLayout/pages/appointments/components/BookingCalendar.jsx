import React, { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import PaymentModal from "./PaymentModal";
import { formatFullDate } from "../utils/dateUtils";

const BookingCalendar = ({
  dates,
  timeSlots,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  doctor,
  onCreateAppointment,
}) => {
  const formattedSelectedDate = selectedDate ? formatFullDate(selectedDate) : "";
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);

  const selectedAppointment =
    selectedDate && selectedTime
      ? {
          displayDate: formattedSelectedDate,
          time: selectedTime,
          dateValue: selectedDate,
        }
      : null;

  const handleBook = () => {
    if (!selectedAppointment) return;
    setShowPaymentSummary(true);
  };

  return (
    <section className="rounded-4xl bg-white dark:bg-dark-darkBg p-8 max-[300px]:p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-[300px]:gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-500 dark:text-dark-textOnDark">
            Make an appointment
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-3xl border border-slate-100 dark:border-dark-borderDark bg-slate-50 p-6 max-[300px]:p-4">
        <div className="flex items-center justify-between gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 max-[300px]:flex-col max-[300px]:items-start max-[300px]:gap-2 max-[300px]:rounded-3xl max-[300px]:px-3">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-dark-textOnDark">
            Choose date and time
          </h2>
          <div className="flex items-center gap-2 text-slate-600 dark:text-dark-textOnDark">
            <HiOutlineCalendar className="text-lg" />
            <span>{formattedSelectedDate}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 max-[300px]:justify-center max-[300px]:gap-2">
          {dates.map((date) => {
            const isSelected =
              selectedDate?.toDateString() === date.value.toDateString();
            return (
              <button
                key={date.value.toISOString()}
                type="button"
                onClick={() => onSelectDate(date.value)}
                className={`flex h-20 w-16 flex-col items-center justify-center rounded-2xl border text-sm font-medium transition-colors max-[300px]:h-14 max-[300px]:w-12 max-[300px]:text-xs ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white shadow dark:text-dark-textOnDark"
                    : "border-slate-200 dark:border-dark-borderDark dark:bg-dark-bgSurface bg-slate-50 text-slate-600 hover:border-blue-300 hover:text-blue-500 dark:text-dark-textSecondary"
                }`}
              >
                <span>{date.label}</span>
                <span className="text-lg font-semibold max-[300px]:text-base ">
                  {date.day}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-4 max-[300px]:grid-cols-2 max-[300px]:gap-2">
          {timeSlots.map((slot) => {
            const isSelected = selectedTime === slot.value;
            return (
              <button
                key={slot.value}
                type="button"
                onClick={() => onSelectTime(slot.value)}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all max-[300px]:px-3 max-[300px]:py-2 max-[300px]:text-xs ${
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white dark:text-dark-textOnDark shadow"
                    : "border-slate-200 bg-white dark:border-dark-borderDark dark:bg-dark-bgSurface dark:text-dark-textSecondary text-slate-600 hover:border-blue-300 hover:text-blue-500"
                }`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between max-[300px]:gap-3">
          <div className="text-sm text-slate-500 dark:text-dark-textSecondary max-[300px]:text-xs max-[300px]:leading-5">
            {selectedDate && selectedTime
              ? `${formattedSelectedDate} at ${selectedTime}`
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
          doctor={doctor}
          onClose={() => setShowPaymentSummary(false)}
          onCreateAppointment={onCreateAppointment}
        />
      )}
    </section>
  );
};

export default BookingCalendar;
