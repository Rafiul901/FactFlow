import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Card = ({feature}) => {
const {title,author_photo,author_name,date,occupation,_id} =feature;

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
  className="w-96 h-64 flex flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
  initial="hidden"
  animate="visible"
  whileHover="hover"
  variants={cardVariants}
>
  {/* Gradient Background with Content */}
  <div className="flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 text-white flex flex-col">
    
    {/* Title - with fixed height and ellipsis for overflow */}
    <motion.h2 
      className="text-2xl font-bold mb-3 leading-tight line-clamp-2 h-16"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {title}
    </motion.h2>
    
    {/* Author Section with Profile Pic - fixed height */}
    <motion.div 
      className="flex items-center mb-4 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="mr-3">
        <motion.img 
          className="w-10 h-10 rounded-full border-2 border-blue-300 object-cover"
          src={author_photo}
          alt="Author profile"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-blue-100 truncate">{author_name}</p>
        <p className="text-blue-200 text-sm opacity-90 truncate">{occupation}</p>
      </div>
      <div className="ml-2 text-right">
        <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">Published</p>
        <p className="text-blue-100 font-medium text-sm">{date}</p>
      </div>
    </motion.div>
    
    {/* Read More Button - fixed position at bottom */}
    <div className="flex justify-end pt-2">
      <Link to={`/posts/${_id}`}>
        <motion.button 
          className="flex text-black btn items-center px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-blue-300 border-opacity-30 transition-all duration-300 group"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="font-medium text-sm mr-2">Read Article</span>
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