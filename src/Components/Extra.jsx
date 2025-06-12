import React from "react";

const Extra = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Technology</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Science</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Finance</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Health</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Philosophy</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Education</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">History</h3>
        </button>
        <button className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full">
          <h3 className="text-lg font-semibold text-purple-600">Others</h3>
        </button>
      </div>
    </div>
  );
};

export default Extra;
