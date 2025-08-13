import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#0a2540] to-blue-950 py-12 px-6 text-center text-white rounded-xl shadow-xl mx-4 my-12 border border-blue-700/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Join the <span className="text-blue-200">FactFlow</span> Community
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 min-h-[72px]">
          <Typewriter
            words={[
              'Share your knowledge with professionals',
              'Engage in meaningful discussions',
              'Stay updated with verified facts',
              'Grow your professional network'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>

        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Section1;