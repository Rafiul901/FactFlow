import React, { useEffect, useState } from 'react';
import Card from './Card';

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    let url = 'http://localhost:3000/posts';

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
    <div>
      <h1 className='text-3xl text-center mt-10 mb-3 font-bold'>All Articles</h1>
      <p className='text-center text-gray-600 text-xl mb-5'>
        Discover a universe of ideas—curated insights, deep dives, and stories that spark your next scroll.
      </p>


      <div className='flex justify-center gap-10 mb-8'>
        <select
          className='border-2 border-blue-600 px-4 py-2 rounded select-primary'
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

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-20'>
        {articles.map(article => (
          <Card key={article._id} user={article} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
