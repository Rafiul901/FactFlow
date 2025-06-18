import React from "react";
import { useNavigate } from "react-router";

const Extra = () => {
  const navigate = useNavigate();
  
  const categories = [
    "Technology",
    "Science",
    "Finance",
    "Health",
    "Philosophy",
    "History"
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 cursor-pointer text-center w-full"
          >
            <h3 className="text-lg font-semibold text-purple-600">{category}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Extra;