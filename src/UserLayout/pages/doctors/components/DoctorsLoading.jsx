import React from "react";

const DoctorsLoading = ({ count = 6 }) => {
  const placeholders = Array.from({ length: count });

  return (
    <div
      className="grid grid-cols-3 gap-6 mt-4 mb-11 [@media(max-width:719px)]:grid-cols-1 [@media(max-width:639px)]:items-center [@media(max-width:639px)]:justify-center 
      
    [@media(max-width:1020px)]:grid-cols-2    "
    >
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm animate-pulse dark:border-gray-700 dark:bg-dark-darkBg/60"
        >
          <div className="flex gap-3">
            <div className="h-20 w-20 rounded-lg bg-gray-200 dark:bg-gray-700" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <div className="flex gap-6 pt-2">
                <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-28 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-3 w-14 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="mt-5 h-10 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
};

export default DoctorsLoading;
