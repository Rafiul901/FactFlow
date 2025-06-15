import React from 'react';

const Card = () => {
    return (
                <div className="max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ">
  {/* Gradient Background with Content */}
  <div className="bg-gradient-to-br from-blue-500 via-blue-800 to-indigo-800 p-8 text-white">
    
    {/* Title */}
    <h2 className="text-3xl font-bold mb-3 leading-tight">Exploring the Depths of Modern JavaScript Frameworks</h2>
    
    {/* Author Section with Profile Pic */}
    <div className="flex items-center mb-6">
      <div className="mr-4">
        <img 
          className="w-12 h-12 rounded-full border-2 border-blue-300 object-cover"
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="Author profile"
        />
      </div>
      <div>
        <p className="font-medium text-blue-100">Alexandra Chen</p>
        <p className="text-blue-200 text-sm opacity-90">Senior Frontend Developer</p>
      </div>
      <div className="ml-auto text-right">
        <p className="text-xs uppercase tracking-wider text-blue-200 mb-1">Published</p>
        <p className="text-blue-100 font-medium">June 12, 2023</p>
      </div>
    </div>
    

    <div className="flex justify-end">
      <button className=" btn flex items-center px-5 py-2.5 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-blue-200 border-opacity-30 hover:bg-opacity-30 transition-all duration-300 group">
        <span className="font-medium mr-2 text-black">Read Article</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>

  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
</div>
    );
};

export default Card;