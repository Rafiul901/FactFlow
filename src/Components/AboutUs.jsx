import React from 'react';


const AboutUs = () => {
    return (
        <div className='m-5'>
           <div className="relative bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-600 py-20 px-6 sm:px-12 lg:px-24 rounded-3xl shadow-2xl overflow-hidden">
  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
  <div className="relative z-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
      About FactFlow
      
    </h2>
    
    <p className="text-lg sm:text-xl text-white text-center max-w-4xl mx-auto mb-10 leading-relaxed">
      Welcome to <span className="font-semibold">FactFlow</span> — your ultimate destination to read insightful articles, share your knowledge, and engage in meaningful discussions. Whether you're here to learn, contribute, or connect, FactFlow empowers voices from every corner of the world.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-8">
      <div className="bg-blue-900 border-2 border-blue-400 bg-opacity-20 backdrop-blur-md rounded-2xl p-8 w-full sm:w-80 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-4">📖 Read</h3>
        <p>Explore a wide range of carefully curated articles across various categories, written by experts and enthusiasts.</p>
      </div>
      <div className="bg-blue-900 border-2 border-blue-400 bg-opacity-20 backdrop-blur-md rounded-2xl p-8 w-full sm:w-80 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-4">✍️ Post</h3>
        <p>Share your own articles, insights, and knowledge to educate and inspire our growing community of readers.</p>
      </div>
      <div className="bg-blue-900 border-2 border-blue-400 bg-opacity-20 backdrop-blur-md rounded-2xl p-8 w-full sm:w-80 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-4">💬 Discuss</h3>
        <p>Join conversations, exchange ideas, and connect with like-minded individuals through thoughtful discussions.</p>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default AboutUs;