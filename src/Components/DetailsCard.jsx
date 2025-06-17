import React from 'react';

const DetailsCard = ({post}) => {
    const {content,title,category,author_name,author_photo,occupation,date,tags} = post;
    
    return (
        <div>
          <div className="max-w-4xl m-5 border-2 border-blue-900 mx-auto  rounded-2xl shadow-xl overflow-hidden">
  {/* Article Header with Gradient Background */}
  <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 ">
    <div className="flex justify-between items-start mb-4">
      <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
        {category}
      </span>
      <span className="text-blue-200 text-sm">
        {date}
      </span>
    </div>
    
    <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
      {title}
    </h1>
    
    {/* Author Section */}
    <div className="flex items-center">
      <img 
        src={author_photo}
        alt="Dr. Alan Turing"
        className="w-12 h-12 rounded-full border-2 border-blue-300 object-cover mr-4"
      />
      <div>
        <p className="font-medium text-blue-100">{author_name}</p>
        <p className="text-blue-200 text-sm">{occupation}</p>
      </div>
    </div>
  </div>

  {/* Article Content */}
  <div className="p-8">
    <p className=" text-lg leading-relaxed mb-6">
      {content}
    </p>
    
    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-8">

    {post?.tags?.map((tag, index) => (
  <span
    key={index}
    className="bg-cyan-200 text-blue-800 font-semibold px-3 py-1 rounded-full"
  >
    {tag}
  </span>
))}

    </div>
  </div>

  {/* Engagement Section */}
  <div className="border-t border-gray-200 px-8 py-6">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>248</span>
        </button>
        <div className="flex items-center space-x-1 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>42</span>
        </div>
      </div>
    </div>

    {/* Comment Form */}
    <form className="mb-8">
      <div className="flex space-x-4">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="User"
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write a comment..."
            rows="3"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition float-right"
          >
            Post Comment
          </button>
        </div>
      </div>
    </form>

    {/* Comments List */}
    <div className="space-y-6">
      <div className="flex space-x-4">
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="Marie Curie"
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-medium text-gray-900">Marie Curie</h4>
              <span className="text-gray-500 text-sm">
                May 16, 2023
              </span>
            </div>
            <p className="text-gray-700">Fascinating insights! This reminds me of my early work with radioactive elements.</p>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-4">
        <img 
          src="https://randomuser.me/api/portraits/men/22.jpg" 
          alt="Albert Einstein"
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-medium text-gray-900">Albert Einstein</h4>
              <span className="text-gray-500 text-sm">
                May 17, 2023
              </span>
            </div>
            <p className="text-gray-700">The quantum theory is certainly imposing. But an inner voice tells me that it is not yet the real thing.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailsCard;