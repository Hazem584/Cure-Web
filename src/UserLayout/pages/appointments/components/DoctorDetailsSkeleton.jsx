import React from "react";

const DoctorDetailsSkeleton = () => {
  return (
    <div className="w-full space-y-6 lg:w-80 xl:w-[540px] max-[300px]:space-y-5">
      <div className="space-y-6 rounded-3xl bg-[#F5F6F7] dark:bg-dark-darkBg p-6 shadow-sm max-[300px]:p-4 animate-pulse">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-28 w-28 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-2 w-40">
            <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[300px]:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="space-y-2 rounded-2xl bg-white dark:bg-dark-bgSurface p-3"
            >
              <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto" />
              <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-2 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-100 dark:border-dark-borderDark bg-slate-50/80 p-5 max-[300px]:p-4">
          <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-2">
            <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-48 rounded-2xl bg-gray-200 dark:bg-gray-700 max-[300px]:h-40" />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsSkeleton;
