import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Visual Graphic */}
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-slate-200 tracking-widest">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-indigo-600 p-4 rounded-full shadow-xl text-white transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Property Not Found
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Sorry, the address or listing you are looking for seems to have been off-market, moved, or never existed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors duration-200"
          >
            Back to Homepage
          </a>
          <a
            href="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200"
          >
            Browse Listings
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;