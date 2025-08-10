import React from 'react';
import { motion } from 'framer-motion';
import Banner from './Banner';
import Extra from './Extra';
import Section1 from './Section1';
import Section2 from './Section2';
import { useLoaderData } from 'react-router';
import Featured from './Featured';

const Home = () => {
    const featuredData = useLoaderData();
    console.log(featuredData);

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div>
            <Banner></Banner>
            
<div className="px-4 sm:px-6 lg:px-8 py-10"> 
  <div className=" max-w-7xl mx-auto">
    <motion.h1 
      className="text-2xl sm:text-3xl text-center mt-10 mb-3 font-bold my-7 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      Featured Articles
    </motion.h1>
    
    <motion.p 
      className="text-center text-gray-600 text-base sm:text-xl px-4 sm:px-10 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Discover our latest insights and trending topics from across science, technology, and innovation. These articles highlight recent contributions from experts and thought leaders, bringing you fresh perspectives on the world's most fascinating ideas.
    </motion.p>
    
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 px-4 sm:px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {featuredData.map(feature => (
        <motion.div key={feature._id} variants={item} className="w-full">
          <Featured feature={feature}></Featured>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>

            <Extra></Extra>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;