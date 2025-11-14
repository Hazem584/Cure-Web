import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ReviewModal = ({ onClose, onSubmit, submitting, submitError }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim()) {
      const success = await onSubmit({ rating, comment: comment.trim() });
      if (success) {
        setRating(0);
        setComment("");
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-sm rounded-3xl bg-white dark:border-2 dark:border-dark-borderDark dark:bg-dark-darkBg p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <IoClose size={24} />
        </button>
        <form onSubmit={handleSubmit} className="space-y-6 dark:text-dark-textOnDark">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Your Rate</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <FaStar
                    size={28}
                    className={
                      star <= (hoverRating || rating)
                        ? "text-yellow-400"
                        : "text-slate-200"
                    }
                  />
                </button>
              ))}
            </div>
            <div className="text-2xl font-semibold text-slate-900">
              {rating}/5
            </div>
          </div>
          <div>
            <label
              htmlFor="review"
              className="mb-2 block text-sm font-semibold text-slate-900"
            >
              Your review
            </label>
            <textarea
              id="review"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review"
              rows={6}
              className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-dark-bgSurface dark:text-dark-textOnDark  px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          {submitError && (
            <p className="text-sm text-red-500" role="alert">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={rating === 0 || !comment.trim() || submitting}
            className="w-full rounded-full bg-blue-500 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
          >
            {submitting ? "Sending..." : "Send your review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
