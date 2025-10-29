import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewModal from "./ReviewModel";

const testimonials = [
  {
    id: "nabila-reyna",
    name: "Nabila Reyna",
    timeAgo: "30 min ago",
    rating: 4.5,
    message:
      "Excellent service! Dr. Jessica Turner was attentive and thorough. The clinic was clean, and the staff were friendly. Highly recommend for in-person care!",
    avatar: "/doctor.png",
  },
  {
    id: "ferry-ichsan",
    name: "Ferry Ichsan A",
    timeAgo: "A week ago",
    rating: 4.5,
    message:
      "Quick and easy appointment! Dr. Jessica Turner was professional, and the staff made me feel comfortable. Highly recommend!",
    avatar: "/doctor.png",
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

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

const ReviewsAndRating = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);

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
          onClick={() => setShowReviewModal(true)}
          className="flex items-center gap-2 text-blue-500 text-sm font-medium hover:text-blue-600 transition"
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
      <div className="flex items-center justify-between mb-8">
        <div className="text-5xl font-semibold text-slate-900">4.5/5</div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1 mb-1">
            {renderStars(4.5)}
          </div>
          <p className="text-sm text-slate-600">1250+ Reviews</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map(({ id, name, timeAgo, rating, message, avatar }) => (
          <article
            key={id}
            className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white dark:border-dark-borderDark dark:bg-dark-darkBg p-6"
          >
            <div className="flex items-start gap-4">
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="h-16 w-16 rounded-full object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {name}
                    </h3>
                    <p className="text-sm text-slate-500">{timeAgo}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <FaStar className="text-yellow-400 text-lg" />
                    <span className="text-lg font-semibold text-yellow-500">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-700">
              {message}
            </p>
          </article>
        ))}
      </div>
      {showReviewModal && (
        <ReviewModal
          onClose={() => setShowReviewModal(false)}
          onSubmit={() => setShowReviewModal(false)}
        />
      )}
    </section>
  );
};

export default ReviewsAndRating;
