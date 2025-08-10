import React from "react";
import { motion } from "framer-motion";
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
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.button 
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="group bg-white border-2 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer text-center w-full flex items-center justify-center"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-lg font-semibold text-purple-600 mr-2">
              {category}
            </h3>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-blue-600"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ x: 0 }}
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Extra;