import React from "react";

const ConfirmationModal = ({ visible, onClose, doctor, appointment }) => {
  if (!visible) {
    return null;
  }

  const doctorName = doctor?.name || "the doctor";
  const specialty = doctor?.specialty ? ` (${doctor.specialty})` : "";
  const appointmentDate = appointment?.displayDate || "";
  const appointmentTime = appointment?.time || "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-dark-darkBg dark:text-dark-textOnDark p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-dark-textOnDark">
          Congratulations!
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-dark-textSecondary">
          Your appointment with {doctorName}
          {specialty} is confirmed for {appointmentDate} at {appointmentTime}.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700"
        >
          Done
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 text-sm font-medium text-blue-600 hover:underline"
        >
          Edit your appointment
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
