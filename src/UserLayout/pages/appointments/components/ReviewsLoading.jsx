import React from "react";

const ReviewsLoading = ({ count = 3 }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <article
          key={index}
          className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white dark:border-dark-borderDark dark:bg-dark-darkBg p-6"
        >
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </article>
      ))}
    </div>
  );
};

export default ReviewsLoading;
