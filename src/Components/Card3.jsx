import React from 'react';
import { Link } from 'react-router';

const Card3 = ({postCat}) => {
    const {title,author_photo,author_name,date,occupation,_id} =postCat;
    return (
        <div className="w-96 h-64 flex flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">

  <div className="flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 text-white flex flex-col">
    
    
    <h2 className="text-2xl font-bold mb-3 leading-tight  line-clamp-2 h-16">
      {title}
    </h2>
    
  
    <div className="flex items-center mb-4 mt-auto">
      <div className="mr-3">
        <img 
          className="w-10 h-10 rounded-full border-2 border-blue-300 object-cover"
          src={author_photo}
          alt="Author profile"
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
    </div>
    
  
    <div className="flex justify-end pt-2">
     <Link to={`/posts/${_id}`}> <button className="flex btn items-center px-4 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-blue-300 border-opacity-30 hover:bg-opacity-30 transition-all duration-300 group">
        <span className="font-medium text-sm mr-2">Read Article</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button></Link>
    </div>
  </div>
  

  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
</div>
    );
};

export default Card3;