import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import ConfirmationModal from "./ConfirmationModal";

const PaymentModal = ({
  appointment,
  doctor,
  onClose,
  onCreateAppointment,
}) => {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  const doctorImage =
    doctor?.image ||
    doctor?.photo ||
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Twitter_default_profile_400x400.png";
  const doctorName = doctor?.name || "Doctor";
  const doctorSpecialty = doctor?.specialty || "Specialty";
  const doctorLocation =
    doctor?.location?.address ||
    doctor?.location?.city ||
    "Clinic location is not available yet.";
  const consultationPrice =
    typeof doctor?.consultationPrice === "number"
      ? `EGP ${doctor.consultationPrice}`
      : "Not provided";

  if (!appointment) {
    return null;
  }

  const handleSubmit = async () => {
    if (!appointment?.dateValue) {
      setError("Please select a date and time before booking.");
      return;
    }
    if (!patientName.trim() || !patientPhone.trim()) {
      setError("Patient name and phone are required.");
      return;
    }
    if (typeof onCreateAppointment !== "function") {
      setError("Booking is currently unavailable. Please try again later.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await onCreateAppointment({
        appointmentDate: appointment.dateValue,
        appointmentTime: appointment.time,
        paymentMethod: "clinic",
        patientName: patientName.trim(),
        patientPhone: patientPhone.trim(),
        notes: notes.trim(),
      });

      setIsConfirmed(true);
    } catch (err) {
      setError(err.message || "Unable to book appointment, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmationClose = () => {
    setIsConfirmed(false);
    onClose?.();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 px-4 py-8"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={onClose}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-lg space-y-6 rounded-3xl bg-white p-8 shadow-2xl dark:border-2 dark:border-dark-borderDark dark:bg-dark-darkBg dark:text-dark-textOnDark">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition hover:text-slate-600"
            aria-label="Close"
          >
            <IoClose size={24} />
          </button>

          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-slate-100">
              <img
                src={doctorImage}
                alt={`Photo of ${doctorName}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-dark-textOnDark">
                {doctorName}
              </h3>
              <p className="text-sm text-slate-500 dark:text-dark-textSecondary">
                {doctorSpecialty}
              </p>
              <div className="mt-1 text-sm text-slate-500 dark:text-dark-textSecondary">
                {doctorLocation}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-dark-bgSurface">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase text-slate-500">Appointment</p>
                <p className="text-base font-semibold text-slate-900 dark:text-dark-textOnDark">
                  {appointment.displayDate} - {appointment.time}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-sm font-medium text-blue-500 hover:underline"
              >
                Edit
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-dark-textOnDark">
              Patient details
            </h4>
            <input
              type="text"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-dark-borderDark dark:bg-dark-bgSurface dark:text-dark-textOnDark"
              placeholder="Patient name"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
            />
            <input
              type="tel"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-dark-borderDark dark:bg-dark-bgSurface dark:text-dark-textOnDark"
              placeholder="Patient phone"
              value={patientPhone}
              onChange={(event) => setPatientPhone(event.target.value)}
            />
            <textarea
              rows={3}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-dark-borderDark dark:bg-dark-bgSurface dark:text-dark-textOnDark"
              placeholder="Notes (optional)"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-dark-textOnDark">
              Payment method
            </h4>
            <div className="flex items-center justify-between rounded-2xl border-2 border-blue-100 bg-blue-50/70 px-4 py-3 dark:border-dark-borderDark dark:bg-dark-bgSurface">
              <div>
                <p className="text-base font-semibold text-slate-900 dark:text-dark-textOnDark">
                  Pay in clinic
                </p>
                <p className="text-xs text-slate-500 dark:text-dark-textSecondary">
                  Pay at the clinic during your visit
                </p>
              </div>
              <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                Cash
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-lg font-semibold text-slate-900 dark:text-dark-textOnDark">
                Price
                <span className="text-sm font-normal text-slate-500 dark:text-dark-textSecondary">
                  /visit
                </span>
              </span>
              <span className="text-2xl font-bold text-red-500">
                {consultationPrice}
              </span>
            </div>
            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-full bg-blue-500 py-4 text-center font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {loading ? "Processing..." : "Confirm Appointment"}
            </button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        visible={isConfirmed}
        doctor={doctor}
        appointment={appointment}
        onClose={handleConfirmationClose}
      />
    </>
  );
};

export default PaymentModal;
