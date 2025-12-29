import React from 'react';
import { Link } from 'react-router'; // Fixed import
import { motion } from 'framer-motion';

const Card = ({ feature }) => {
  const { title, author_photo, author_name, date, occupation, _id } = feature;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="w-full h-auto min-h-[280px] flex flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >

      <div className="flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-4 sm:p-6 text-white flex flex-col">
        
        {/* Title */}
        <motion.h2 
          className="text-xl sm:text-2xl font-bold mb-3 leading-tight line-clamp-2 min-h-[3.5rem] sm:min-h-[4rem]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {title}
        </motion.h2>
        
        {/* Author Section - Responsive */}
        <motion.div 
          className="flex items-center mb-4 mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mr-3">
            <motion.img 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-300 object-cover"
              src={author_photo}
              alt={`${author_name} profile`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="font-medium text-blue-100 truncate text-sm sm:text-base">
              {author_name}
            </p>
            <p className="text-blue-200 text-xs sm:text-sm opacity-90 truncate">
              {occupation}
            </p>
          </div>
          
          {/* Date - hidden on mobile for space */}
          <div className="ml-2 text-right hidden sm:block">
            <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
              Published
            </p>
            <p className="text-blue-100 font-medium text-sm">
              {date}
            </p>
          </div>
        </motion.div>
        
        {/* Mobile date display */}
        <motion.div 
          className="sm:hidden mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">
            Published
          </p>
          <p className="text-blue-100 font-medium text-sm">
            {date}
          </p>
        </motion.div>
        
        {/* Read Article Button */}
        <div className="flex justify-end pt-2">
          <Link to={`/posts/${_id}`}>
            <motion.button 
              className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white text-black bg-opacity-20 rounded-full backdrop-blur-sm border border-blue-300 border-opacity-30 transition-all duration-300 group text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="font-medium mr-2">Read Article</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Decorative Element */}
      <motion.div 
        className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default Card;