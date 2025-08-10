import React, { useEffect, useState } from 'react';
import Card from './Card';

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let url = 'https://backend-gray-eight-74.vercel.app/posts';

    const params = new URLSearchParams();
    if (filter) params.append('category', filter);
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data));
  }, [filter]);

  return (
    <div className="px-4 sm:px-6 lg:px-8"> 
      <div className="max-w-7xl mx-auto"> 
        <h1 className='text-2xl sm:text-3xl text-center mt-8 sm:mt-10 mb-3 font-bold px-2'>
          All Articles
        </h1>
        <p className='text-center text-gray-600 text-base sm:text-xl mb-5 px-4 sm:px-0'>
          Discover a universe of ideas—curated insights, deep dives, and stories that spark your next scroll.
        </p>

        <div className='flex justify-center mb-6 sm:mb-8 px-2'>
          <select
            className='border-2 border-blue-600 text-green-700 px-3 sm:px-4 py-2 rounded w-full max-w-xs'
            onChange={e => setFilter(e.target.value)}
            value={filter}
          >
            <option value=''>All Categories</option>
            <option value='Technology'>Technology</option>
            <option value='Health'>Health</option>
            <option value='Science'>Science</option>
            <option value='Philosophy'>Philosophy</option>
            <option value='Finance'>Finance</option>
            <option value='History'>History</option>
          </select>
        </div>

        <div className='px-2 sm:px-4 lg:px-0'> 
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {articles.map(article => (
              <Card key={article._id} user={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;