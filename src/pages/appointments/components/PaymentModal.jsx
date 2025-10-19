import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const PaymentModal = ({ appointment, onClose }) => {
  const [selectedPayment, setSelectedPayment] = useState("credit-card");

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  if (!appointment) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 h-full w-full cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md space-y-4 rounded-3xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition hover:text-slate-600"
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>

        {/* Doctor Info */}
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <img
              src="/doctor.png"
              alt="Dr. Jessica Turner"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
              <svg
                className="h-4 w-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Dr. Jessica Turner
            </h3>
            <p className="text-sm text-slate-500">Pulmonologist</p>
            <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
              <svg
                className="h-4 w-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>129,El-Nasr Street, Cairo</span>
            </div>
          </div>
        </div>

        {/* Appointment Info */}
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
              <svg
                className="h-5 w-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-medium text-slate-900">
              {appointment.date} - {appointment.time}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-1.5 text-sm font-medium text-blue-500 transition hover:bg-blue-50"
          >
            Reschedule
          </button>
        </div>

        {/* Payment Method */}
        <div>
          <h4 className="mb-4 text-lg font-semibold text-slate-900">
            Payment Method
          </h4>

          <div className="space-y-3">
            {/* Credit Card */}
            <label
              className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                selectedPayment === "credit-card"
                  ? "border-transparent bg-green-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selectedPayment === "credit-card"
                      ? "border-green-500 bg-green-500"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {selectedPayment === "credit-card" && (
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  checked={selectedPayment === "credit-card"}
                  onChange={() => setSelectedPayment("credit-card")}
                  className="sr-only"
                />
                <span className="font-medium text-slate-900">Credit Card</span>
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-blue-600 text-white font-bold text-xs">
                VISA
              </div>
            </label>

            {/* PayPal */}
            <label
              className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                selectedPayment === "paypal"
                  ? "border-transparent bg-green-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selectedPayment === "paypal"
                      ? "border-green-500 bg-green-500"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {selectedPayment === "paypal" && (
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={selectedPayment === "paypal"}
                  onChange={() => setSelectedPayment("paypal")}
                  className="sr-only"
                />
                <span className="font-medium text-slate-900">PayPal</span>
              </div>
              <svg
                className="h-6 w-6 text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.773.773 0 0 1 .76-.633h8.434c3.02 0 4.964 1.537 5.033 4.46.05 2.066-.97 3.557-3.062 4.46 2.092.903 2.592 2.394 2.542 4.46-.05 2.923-1.994 4.964-5.014 4.964l-6.56.006z" />
              </svg>
            </label>

            {/* Apple Pay */}
            <label
              className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-4 transition-all ${
                selectedPayment === "apple-pay"
                  ? "border-transparent bg-green-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selectedPayment === "apple-pay"
                      ? "border-green-500 bg-green-500"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {selectedPayment === "apple-pay" && (
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="apple-pay"
                  checked={selectedPayment === "apple-pay"}
                  onChange={() => setSelectedPayment("apple-pay")}
                  className="sr-only"
                />
                <span className="font-medium text-slate-900">Apple Pay</span>
              </div>
              <svg
                className="h-6 w-6 text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            </label>

            {/* Add New Card */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-blue-300 bg-white p-4 text-sm font-medium text-blue-500 transition hover:border-blue-400 hover:bg-blue-50"
            >
              <span className="text-xl">+</span>
              <span>Add new card</span>
            </button>
          </div>
        </div>

        {/* Price and Pay Button */}
        <div className="space-y-4 pt-4">
          <div className="flex items-baseline justify-between">
            <span className="text-lg font-semibold text-slate-900">
              Price
              <span className="text-sm font-normal text-slate-500">/hour</span>
            </span>
            <span className="text-2xl font-bold text-red-500">350$</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-blue-500 py-4 text-center font-semibold text-white transition hover:bg-blue-600"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
