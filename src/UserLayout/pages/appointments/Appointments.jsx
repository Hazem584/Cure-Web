import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./../../../components/header/NavBar";
import DoctorDetails from "./components/DoctorDetails";
import BookingCalendar from "./components/BookingCalendar";
import ReviewsAndRating from "./components/ReviewsAndRating";
import Footer from "../../../components/footer/Footer";

const getApiBaseUrl = () => {
  const base = import.meta.env.VITE_API_BASE_URL;
  return base.endsWith("/") ? base : `${base}/`;
};

const API_BASE_URL = getApiBaseUrl();
const DOCTORS_API_URL = `${API_BASE_URL}doctors`;
const APPOINTMENTS_API_URL = `${API_BASE_URL}appointments`;
const getAuthToken = () => {
  if (typeof window === "undefined") return null;
  return (
    window.localStorage.getItem("cure_token") ||
    window.localStorage.getItem("token") ||
    window.localStorage.getItem("authToken") ||
    null
  );
};

const NORMALIZED_DAY_OPTIONS = { weekday: "short" };

const buildDateOptions = (centerDate = new Date()) => {
  const baseDate = new Date(centerDate);
  baseDate.setHours(0, 0, 0, 0);

  const startDate = new Date(baseDate);
  startDate.setDate(baseDate.getDate() - 3);

  return Array.from({ length: 7 }).map((_, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);

    return {
      label: currentDate.toLocaleDateString("en-US", NORMALIZED_DAY_OPTIONS),
      day: currentDate.getDate().toString().padStart(2, "0"),
      value: currentDate,
    };
  });
};

const timeSlots = [
  { value: "9:00 AM", label: "9:00 AM" },
  { value: "9:30 AM", label: "9:30 AM" },
  { value: "10:00 AM", label: "10:00 AM" },
  { value: "10:30 AM", label: "10:30 AM" },
  { value: "11:00 AM", label: "11:00 AM" },
  { value: "11:30 AM", label: "11:30 AM" },
  { value: "12:00 PM", label: "12:00 PM" },
  { value: "1:00 PM", label: "1:00 PM" },
  { value: "1:30 PM", label: "1:30 PM" },
  { value: "2:00 PM", label: "2:00 PM" },
  { value: "2:30 PM", label: "2:30 PM" },
];

const Appointments = () => {
  const { doctorId } = useParams();
  const [dates, setDates] = useState(() => buildDateOptions(new Date()));
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });
  const [selectedTime, setSelectedTime] = useState(timeSlots[4]?.value ?? "");
  const [doctor, setDoctor] = useState(null);
  const [doctorLoading, setDoctorLoading] = useState(false);
  const [doctorError, setDoctorError] = useState("");
  const [reviews, setReviews] = useState([]);
  const [ratingSummary, setRatingSummary] = useState(null);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewsError, setReviewsError] = useState("");
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewSubmitError, setReviewSubmitError] = useState("");
  const clearReviewSubmitError = () => setReviewSubmitError("");
  const handleCreateAppointment = async ({
    appointmentDate,
    appointmentTime,
    paymentMethod,
    patientName,
    patientPhone,
    notes,
  }) => {
    if (!doctorId || !doctor?._id) {
      throw new Error("Please select a doctor before booking.");
    }

    const token = getAuthToken();
    if (!token) {
      throw new Error("You must be logged in to book an appointment.");
    }

    const normalizedDate =
      typeof appointmentDate === "string"
        ? appointmentDate
        : appointmentDate?.toISOString().split("T")[0];

    if (!normalizedDate || !appointmentTime) {
      throw new Error("Appointment date and time are required.");
    }

    const body = {
      doctorId,
      appointmentDate: normalizedDate,
      appointmentTime,
      paymentMethod: paymentMethod || "clinic",
      patientName,
      patientPhone,
      notes,
    };

    const response = await fetch(APPOINTMENTS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        payload?.message || "Failed to create appointment, please try again."
      );
    }

    return payload?.data || payload;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDates((currentDates) => {
        const nextDates = buildDateOptions(new Date());
        const hasChanged =
          !currentDates.length ||
          currentDates[0].value.toDateString() !==
            nextDates[0].value.toDateString();

        if (!hasChanged) {
          return currentDates;
        }

        setSelectedDate((prevSelected) => {
          const stillAvailable = nextDates.some(
            ({ value }) => value.toDateString() === prevSelected?.toDateString()
          );

          if (stillAvailable) {
            return prevSelected;
          }

          return nextDates[3]?.value ?? nextDates[0]?.value ?? null;
        });

        return nextDates;
      });
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!doctorId) {
      setDoctor(null);
      setDoctorError("Please pick a doctor from the doctors page first.");
      return;
    }

    const controller = new AbortController();

    const fetchDoctor = async () => {
      try {
        setDoctorLoading(true);
        setDoctorError("");

        const response = await fetch(`${DOCTORS_API_URL}/${doctorId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load doctor details, try again later.");
        }

        const payload = await response.json();
        const doctorData = payload?.data || payload;

        setDoctor(doctorData);
      } catch (error) {
        if (error.name !== "AbortError") {
          setDoctorError(error.message || "Unable to load doctor details.");
        }
      } finally {
        setDoctorLoading(false);
      }
    };

    fetchDoctor();

    return () => controller.abort();
  }, [doctorId]);

  useEffect(() => {
    if (!doctorId) {
      setReviews([]);
      setRatingSummary(null);
      setReviewsError("Please pick a doctor from the doctors page first.");
      return;
    }

    const controller = new AbortController();
    const fetchReviews = async () => {
      try {
        setReviewsLoading(true);
        setReviewsError("");

        const headers = {
          Accept: "application/json",
        };
        const token = getAuthToken();
        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(`${DOCTORS_API_URL}/${doctorId}/reviews`, {
          headers,
          signal: controller.signal,
          credentials: "include",
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          const message =
            payload?.message ||
            (response.status === 401
              ? "You need to be logged in to view reviews."
              : "Failed to load reviews, please try again later.");
          throw new Error(message);
        }

        const data = payload?.data || payload;
        setReviews(Array.isArray(data?.reviews) ? data.reviews : []);
        setRatingSummary(data?.ratingSummary || null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setReviewsError(error.message || "Unable to load reviews.");
          setReviews([]);
          setRatingSummary(null);
        }
      } finally {
        setReviewsLoading(false);
      }
    };

    fetchReviews();

    return () => controller.abort();
  }, [doctorId]);

  const handleSubmitReview = async ({ rating, comment }) => {
    if (!doctorId) {
      setReviewSubmitError("Please select a doctor first.");
      return false;
    }

    const token = getAuthToken();
    if (!token) {
      setReviewSubmitError("You must be logged in to add a review.");
      return false;
    }

    try {
      setReviewSubmitting(true);
      setReviewSubmitError("");

      const response = await fetch(`${DOCTORS_API_URL}/${doctorId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ rating, comment }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          payload?.message || "Failed to add review, please try again."
        );
      }

      const newReview = payload?.data;
      const summary = payload?.ratingSummary;

      if (newReview) {
        setReviews((prev) => [newReview, ...prev]);
      }
      if (summary) {
        setRatingSummary(summary);
      } else if (newReview?.rating) {
        setRatingSummary((prev) => {
          if (!prev) {
            return {
              average: newReview.rating,
              count: 1,
            };
          }
          const nextCount = (prev.count || 0) + 1;
          const nextAverage =
            ((prev.average || 0) * (prev.count || 0) + newReview.rating) /
            nextCount;
          return {
            ...prev,
            average: Number(nextAverage.toFixed(1)),
            count: nextCount,
          };
        });
      }

      return true;
    } catch (error) {
      if (error.name !== "AbortError") {
        setReviewSubmitError(error.message || "Unable to add review.");
      }
      return false;
    } finally {
      setReviewSubmitting(false);
    }
  };

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
                onCreateAppointment={handleCreateAppointment}
              />
              <ReviewsAndRating
                ratingSummary={ratingSummary || doctor?.rating}
                reviews={reviews}
                loading={reviewsLoading}
                error={reviewsError}
                onSubmitReview={handleSubmitReview}
                submitting={reviewSubmitting}
                submitError={reviewSubmitError}
                canAddReview={Boolean(doctorId)}
                onResetSubmitError={clearReviewSubmitError}
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
