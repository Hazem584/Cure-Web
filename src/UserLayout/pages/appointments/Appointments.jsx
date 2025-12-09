import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../components/header/NavBar";
import Footer from "../../../components/footer/Footer";
import DoctorDetails from "./components/DoctorDetails";
import BookingCalendar from "./components/BookingCalendar";
import ReviewsAndRating from "./components/ReviewsAndRating";
import { useAppointmentScheduler } from "./hooks/useAppointmentScheduler";
import { useDoctorProfile } from "./hooks/useDoctorProfile";
import { useDoctorReviews } from "./hooks/useDoctorReviews";
import { useAppointmentActions } from "./hooks/useAppointmentActions";

const Appointments = () => {
  const { doctorId } = useParams();

  const {
    dates,
    timeSlots,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useAppointmentScheduler();

  const {
    doctor,
    loading: doctorLoading,
    error: doctorError,
  } = useDoctorProfile(doctorId);

  const {
    reviews,
    ratingSummary,
    loading: reviewsLoading,
    error: reviewsError,
    submitting: reviewSubmitting,
    submitError: reviewSubmitError,
    submitReview,
    clearSubmitError,
  } = useDoctorReviews(doctorId);

  const { createAppointment } = useAppointmentActions({ doctorId });

  return (
    <div className="dark:bg-dark-darkBg">
      <NavBar />
      <div className="min-h-screen bg-slate-50 dark:bg-dark-darkBg py-8 px-4 sm:px-6 lg:px-12 max-[300px]:px-2 max-[300px]:py-6">
        <div className="mx-auto">
          <div className="flex flex-col gap-8 lg:flex-row max-[300px]:gap-6">
            <div className="order-1 lg:order-2 lg:flex-shrink-0">
              <DoctorDetails
                doctor={doctor}
                loading={doctorLoading}
                error={doctorError}
              />
            </div>
            <div className="order-2 flex flex-col lg:order-1 lg:flex-1">
              <BookingCalendar
                dates={dates}
                timeSlots={timeSlots}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectDate={setSelectedDate}
                onSelectTime={setSelectedTime}
                doctor={doctor}
                onCreateAppointment={createAppointment}
              />
              <ReviewsAndRating
                ratingSummary={ratingSummary || doctor?.rating}
                reviews={reviews}
                loading={reviewsLoading}
                error={reviewsError}
                onSubmitReview={submitReview}
                submitting={reviewSubmitting}
                submitError={reviewSubmitError}
                canAddReview={Boolean(doctorId)}
                onResetSubmitError={clearSubmitError}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointments;
