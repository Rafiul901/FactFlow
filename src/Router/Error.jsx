import React from 'react';      
import error from '../assets/error.png'
const Error = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={error}
          alt="Error 404"
          className="w-[800px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-5">
        
        
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-2 text-white font-bold bg-black hover:bg-purple-600 rounded-lg"
        >
          Go to Homepage
        </a>
      </div>
    </>
  );
};




export default Error;