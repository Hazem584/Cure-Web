import { APPOINTMENTS_API_URL, DOCTORS_API_URL } from "../apiConfig";
import { getAuthToken } from "../utils/auth";
import { normalizeDateValue } from "../utils/dateUtils";

const parseJsonSafe = async (response) => {
  try {
    return await response.json();
  } catch {
    return {};
  }
};

export const fetchDoctorById = async (doctorId, { signal } = {}) => {
  if (!doctorId) {
    throw new Error("Doctor id is required.");
  }

  const response = await fetch(`${DOCTORS_API_URL}/${doctorId}`, { signal });
  if (!response.ok) {
    throw new Error("Failed to load doctor details, try again later.");
  }

  const payload = await parseJsonSafe(response);
  return payload?.data || payload;
};

export const fetchDoctorReviews = async (doctorId, { signal } = {}) => {
  if (!doctorId) {
    throw new Error("Doctor id is required.");
  }

  const headers = {
    Accept: "application/json",
  };
  const token = getAuthToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${DOCTORS_API_URL}/${doctorId}/reviews`, {
    headers,
    signal,
    credentials: "include",
  });

  const payload = await parseJsonSafe(response);
  if (!response.ok) {
    const message =
      payload?.message ||
      (response.status === 401
        ? "You need to be logged in to view reviews."
        : "Failed to load reviews, please try again later.");
    throw new Error(message);
  }

  const data = payload?.data || payload;
  return {
    reviews: Array.isArray(data?.reviews) ? data.reviews : [],
    ratingSummary: data?.ratingSummary || null,
  };
};

export const submitDoctorReview = async (doctorId, { rating, comment }) => {
  const token = getAuthToken();
  if (!doctorId) {
    throw new Error("Please select a doctor first.");
  }
  if (!token) {
    throw new Error("You must be logged in to add a review.");
  }

  const response = await fetch(`${DOCTORS_API_URL}/${doctorId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    body: JSON.stringify({ rating, comment }),
  });

  const payload = await parseJsonSafe(response);
  if (!response.ok) {
    throw new Error(
      payload?.message || "Failed to add review, please try again."
    );
  }

  return {
    review: payload?.data,
    ratingSummary: payload?.ratingSummary,
  };
};

export const createAppointmentRequest = async ({
  doctorId,
  appointmentDate,
  appointmentTime,
  paymentMethod = "clinic",
  patientName,
  patientPhone,
  notes,
}) => {
  if (!doctorId) {
    throw new Error("Please select a doctor before booking.");
  }

  const token = getAuthToken();
  if (!token) {
    throw new Error("You must be logged in to book an appointment.");
  }

  const normalizedDate =
    typeof appointmentDate === "string"
      ? appointmentDate
      : normalizeDateValue(appointmentDate)?.toISOString().split("T")[0];

  if (!normalizedDate || !appointmentTime) {
    throw new Error("Appointment date and time are required.");
  }

  const response = await fetch(APPOINTMENTS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    body: JSON.stringify({
      doctorId,
      appointmentDate: normalizedDate,
      appointmentTime,
      paymentMethod,
      patientName,
      patientPhone,
      notes,
    }),
  });

  const payload = await parseJsonSafe(response);
  if (!response.ok) {
    throw new Error(
      payload?.message || "Failed to create appointment, please try again."
    );
  }

  return payload?.data || payload;
};
