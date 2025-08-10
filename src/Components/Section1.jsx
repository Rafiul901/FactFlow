import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; 

const Section1 = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-blue-900 py-16 px-6 text-center text-white rounded-lg shadow-lg my-16 mx-4">
      <h2 className="text-4xl font-extrabold mb-6">
        Join the FactFlow Community Today
      </h2>
      <p className="text-lg mb-8">
        <Typewriter
          words={[
            'Share your knowledge, engage in discussions, and stay updated with the latest facts. Become part of a vibrant knowledge-sharing platform.'
          ]}
          loop={0}         
          cursor           
          cursorStyle="|"  
          typeSpeed={40}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </p>
    </div>
  );
};

export default Section1;
