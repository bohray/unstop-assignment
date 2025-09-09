import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-32 px-4">
      <h1 className="flex flex-col text-2xl md:text-4xl font-medium mb-10 text-center">
        Welcome to <div className="text-iris font-black text-5xl">Unstop</div>
      </h1>

      <div className="bg-white shadow-lg rounded-2xl px-2.5 py-6 w-full max-w-sm flex flex-col gap-5 items-center text-center border border-grayish-50 animate-pulse">
        {/* Avatar Skeleton */}
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>

        {/* Name Skeleton */}
        <div className="flex flex-col gap-2.5">
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="flex flex-col gap-1 text-xs font-medium text-gray-500">
            {/* Email + Gender Skeleton */}
            <div className="h-3 w-40 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-24 bg-gray-200 rounded mb-6"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="w-full md:w-1/2 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Loader;
