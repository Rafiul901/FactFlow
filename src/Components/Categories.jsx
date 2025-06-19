import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card3 from './Card3';

const Categories = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      try {
        const response = await fetch(`https://backend-rafiul901-rafiul901s-projects.vercel.app/posts/category/${category}`);
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPostsByCategory();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Articles in {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            posts.map(postCat =><Card3 key={postCat._id} postCat={postCat}></Card3>)
        }
      </div>
    </div>
  );
};

export default Categories;