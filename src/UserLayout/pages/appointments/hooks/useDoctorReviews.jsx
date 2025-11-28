import { useCallback, useEffect, useState } from "react";
import {
  fetchDoctorReviews,
  submitDoctorReview,
} from "../services/appointmentsApi";

const getStoredUser = () => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const enrichReviewWithUser = (review) => {
  if (!review) return review;
  const currentUser = getStoredUser();
  if (!currentUser) return review;

  const userName =
    currentUser.name || currentUser.fullName || currentUser.username;
  const userAvatar =
    currentUser.avatar ||
    currentUser.image ||
    currentUser.profileImage ||
    currentUser.profilePicture ||
    currentUser.avatarUrl ||
    currentUser.profilePic ||
    currentUser.photo;

  return {
    ...review,
    name:
      review.name ||
      review.reviewerName ||
      review?.patient?.name ||
      review?.user?.name ||
      userName,
    reviewerName: review.reviewerName || review.name || userName,
    avatar:
      review.avatar ||
      review?.patient?.avatar ||
      review?.patient?.avatarUrl ||
      review?.patient?.image ||
      review?.patient?.profileImage ||
      review?.patient?.profilePicture ||
      review?.patient?.profilePic ||
      review?.patient?.photo ||
      review?.user?.avatar ||
      review?.user?.avatarUrl ||
      review?.user?.image ||
      review?.user?.profileImage ||
      review?.user?.profilePicture ||
      review?.user?.profilePic ||
      review?.user?.photo ||
      userAvatar,
    user: { ...(review.user || {}), ...currentUser },
  };
};

export const useDoctorReviews = (doctorId) => {
  const [reviews, setReviews] = useState([]);
  const [ratingSummary, setRatingSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!doctorId) {
      setReviews([]);
      setRatingSummary(null);
      setError("Please pick a doctor from the doctors page first.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();
    const loadReviews = async () => {
      try {
        setLoading(true);
        setError("");
        const { reviews: doctorReviews, ratingSummary: summary } =
          await fetchDoctorReviews(doctorId, { signal: controller.signal });
        if (isMounted) {
          setReviews(doctorReviews);
          setRatingSummary(summary);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        if (isMounted) {
          setError(err.message || "Unable to load reviews.");
          setReviews([]);
          setRatingSummary(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadReviews();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [doctorId]);

  const submitReview = useCallback(
    async ({ rating, comment }) => {
      try {
        setSubmitting(true);
        setSubmitError("");
        const { review, ratingSummary: summary } = await submitDoctorReview(
          doctorId,
          { rating, comment }
        );

        if (review) {
          const hydratedReview = enrichReviewWithUser(review);
          setReviews((prev) => [hydratedReview || review, ...prev]);
        }
        if (summary) {
          setRatingSummary(summary);
        } else if (review?.rating) {
          setRatingSummary((prev) => {
            if (!prev) {
              return { average: review.rating, count: 1 };
            }
            const nextCount = (prev.count || 0) + 1;
            const nextAverage =
              ((prev.average || 0) * (prev.count || 0) + review.rating) /
              nextCount;
            return {
              ...prev,
              average: Number(nextAverage.toFixed(1)),
              count: nextCount,
            };
          });
        }

        return true;
      } catch (err) {
        if (err.name !== "AbortError") {
          setSubmitError(err.message || "Unable to add review.");
        }
        return false;
      } finally {
        setSubmitting(false);
      }
    },
    [doctorId]
  );

  const clearSubmitError = useCallback(() => setSubmitError(""), []);

  return {
    reviews,
    ratingSummary,
    loading,
    error,
    submitting,
    submitError,
    submitReview,
    clearSubmitError,
  };
};

export default useDoctorReviews;
