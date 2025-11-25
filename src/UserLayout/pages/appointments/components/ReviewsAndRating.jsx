import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewModal from "./ReviewModal";
import ReviewsLoading from "./ReviewsLoading";

const renderStars = (rating) => {
  const safeRating =
    typeof rating === "number" && !Number.isNaN(rating) ? rating : 0;
  const stars = [];
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative">
          <FaStar className="text-gray-200" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      );
    } else {
      stars.push(<FaStar key={i} className="text-gray-200" />);
    }
  }

  return stars;
};

const ReviewsAndRating = ({
  ratingSummary,
  reviews,
  loading,
  error,
  onSubmitReview,
  submitting,
  submitError,
  canAddReview = false,
  onResetSubmitError,
}) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const normalizedReviews = useMemo(
    () => (Array.isArray(reviews) ? reviews : []),
    [reviews]
  );
  const averageRating =
    typeof ratingSummary?.average === "number" ? ratingSummary.average : 0;
  const reviewsCount = ratingSummary?.count ?? normalizedReviews.length ?? 0;

  const handleOpenModal = () => {
    if (!canAddReview) return;
    if (onResetSubmitError) {
      onResetSubmitError();
    }
    setShowReviewModal(true);
  };

  const handleSubmitReview = async (payload) => {
    if (!onSubmitReview) {
      return false;
    }
    const succeeded = await onSubmitReview(payload);
    if (succeeded) {
      setShowReviewModal(false);
    }
    return succeeded;
  };

  return (
    <section
      className={`rounded-3xl bg-white border-2 dark:border-dark-borderDark dark:bg-dark-darkBg dark:text-dark-textOnDark p-8`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-slate-900">
          Reviews and Rating
        </h2>
        <button
          type="button"
          onClick={handleOpenModal}
          disabled={!canAddReview}
          className="flex items-center gap-2 text-blue-500 text-sm font-medium hover:text-blue-600 transition disabled:text-slate-400 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          add review
        </button>
      </div>
      {error && (
        <p className="mb-4 text-center text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      <div className="flex items-center justify-between mb-8">
        {loading ? (
          <div className="flex w-full items-center justify-between animate-pulse">
            <div className="h-10 w-28 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2 text-right">
              <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700 ml-auto" />
              <div className="h-3 w-32 rounded bg-gray-200 dark:bg-gray-700 ml-auto" />
            </div>
          </div>
        ) : (
          <>
            <div className="text-5xl font-semibold text-slate-900">
              {averageRating.toFixed(1)}/5
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                {renderStars(averageRating)}
              </div>
              <p className="text-sm text-slate-600">
                {reviewsCount ? `${reviewsCount}+ Reviews` : "No reviews yet"}
              </p>
            </div>
          </>
        )}
      </div>
      {loading && <ReviewsLoading />}
      {!loading && normalizedReviews.length === 0 && (
        <p className="text-center text-sm text-slate-500">
          No reviews have been added for this doctor yet.
        </p>
      )}
      {submitError && (
        <p className="text-center text-sm text-red-500 mt-4" role="alert">
          {submitError}
        </p>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {normalizedReviews.map((review, index) => {
          const {
            _id,
            id,
            name,
            reviewerName,
            user,
            patient,
            rating: reviewRating,
            comment,
            message,
            createdAt,
            avatar,
          } = review;

          const displayName =
            name ||
            reviewerName ||
            patient?.name ||
            user?.name ||
            user?.fullName ||
            user?.username ||
            "Anonymous";
          const displayMessage = comment || message || "No comment provided.";
          const displayRating =
            typeof reviewRating === "number" ? reviewRating : averageRating;
          const formattedDate = createdAt
            ? new Date(createdAt).toLocaleDateString()
            : "";
          const displayAvatar =
            avatar ||
            patient?.avatar ||
            patient?.image ||
            patient?.profileImage ||
            patient?.profilePicture ||
            patient?.profilePic ||
            patient?.photo ||
            user?.avatar ||
            user?.image ||
            user?.profileImage ||
            user?.profilePicture ||
            user?.profilePic ||
            user?.photo ||
            "/doctor.png";

          return (
            <article
              key={_id || id || index}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white dark:border-dark-borderDark dark:bg-dark-darkBg p-6"
            >
              <div className="flex items-start gap-4">
                <img
                  src={displayAvatar}
                  alt={`${displayName} avatar`}
                  className="h-16 w-16 rounded-full object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {displayName}
                      </h3>
                      <p className="text-sm text-slate-500">{formattedDate}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <FaStar className="text-yellow-400 text-lg" />
                      <span className="text-lg font-semibold text-yellow-500">
                        {displayRating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-base leading-relaxed text-slate-700">
                {displayMessage}
              </p>
            </article>
          );
        })}
      </div>
      {showReviewModal && (
        <ReviewModal
          onClose={() => setShowReviewModal(false)}
          onSubmit={handleSubmitReview}
          submitting={submitting}
          submitError={submitError}
        />
      )}
    </section>
  );
};

export default ReviewsAndRating;
