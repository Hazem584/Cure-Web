import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-3">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-700 dark:text-gray-300 text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export default Loading;
