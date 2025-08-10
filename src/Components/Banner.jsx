import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion'; 
import bgImage from '../assets/bg.jpg';

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/allArticles');
  };

  return (
    <div className="relative w-full h-screen max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          
          {/* 🛠 Animated Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Contribute your expertise
          </motion.h1>

          {/* 🛠 Animated Paragraph */}
          <motion.p
            className="text-xl md:text-2xl text-gray-50 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            Become part of our vibrant community where experts and learners alike can share insights,
            discover new ideas, and achieve shared growth.
          </motion.p>

          {/* 🛠 Animated Button */}
          <motion.button
            onClick={handleExploreClick}
            className="bg-white text-indigo-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg active:scale-95"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Articles
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
