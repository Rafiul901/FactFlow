import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const AllArticles = () => {
  const data = useLoaderData();
  console.log(data);
    return (
<div>
  <h1 className='text-3xl text-center mt-10 mb-3 font-bold my-7'>All Articles</h1>
  <p className='text-center text-gray-600 text-xl'>Discover a universe of ideas—curated insights, deep dives, and stories that spark your next scroll.</p>
  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-10 mt-10'>
  
  {
    data.map(user => <Card key={user._id} user={user}></Card>)
  }
</div>
</div>
    );
};

export default AllArticles;