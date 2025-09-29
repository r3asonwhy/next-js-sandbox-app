import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
        <p className="text-gray-500 mt-2">Please wait while we fetch your data.</p>
      </div>
    </div>
  );
};

export default Loader;
