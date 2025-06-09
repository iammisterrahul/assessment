import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <p className="text-sm text-gray-600 mt-2">
          Please check the URL or return to the homepage.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
