import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import Swal from 'sweetalert2';

const DetailsCard = ({post}) => {
    const {content,title,category,author_name,author_photo,occupation,date,tags,_id: article_id} = post;
    
    const { user } = use(AuthContext);

   const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

    useEffect(() => {
 fetch(`/comments/${article_id}`)
      .then(res => res.json())
      .then(data => setComments(data));

    
    fetch(`/likes/${article_id}`)
      .then(res => res.json())
      .then(data => setLikes(data.likeCount));

    if (user?.uid) {
      fetch(`/likes/check?article_id=${article_id}&user_id=${user.uid}`)
        .then(res => res.json())
        .then(data => setAlreadyLiked(data.liked));
    }
  }, [article_id, user]);

    const handleLike = async () => {
    if (alreadyLiked) return Swal.fire("You already liked this post!");
     

    const res = await fetch('https://backend-gray-eight-74.vercel.app/likes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        article_id,
        user_id: user.uid
      })
    });

    if (res.ok) {
      setLikes(likes + 1);
      setAlreadyLiked(true);
    }
  };



  //for comment section

    const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      article_id,
      user_id: user.uid,
      user_name: user.displayName,
      user_photo: user.photoURL,
      comment: commentText
    };

    const res = await fetch('https://backend-gray-eight-74.vercel.app/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment)
    });

    if (res.ok) {
      const saved = await res.json();
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };


    return (
        <div>
          <div className="max-w-4xl m-5 border-2 border-blue-900 mx-auto  rounded-2xl shadow-xl overflow-hidden">

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


  <div className="p-8">
    <p className=" text-lg leading-relaxed mb-6">
      {content}
    </p>
    

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


  <div className="border-t border-gray-200 px-8 py-6">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <button onClick={handleLike} className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{likes}</span>
        </button>
     
      </div>
    </div>


<form className="mb-8" onSubmit={handleCommentSubmit}>
  <div className="flex space-x-4">
    <img 
      src={user?.photoURL} 
      alt={user?.displayName}
      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-1">
      <textarea
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write a comment..."
        rows="3"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 btn px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition float-right"
      >
        Post Comment
      </button>
    </div>
  </div>
</form>


  <div className="space-y-6">
  {comments.map((c, idx) => (
    <div key={idx} className="flex space-x-4">
      <img 
        src={c.user_photo} 
        alt={c.user_name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-gray-900">{c.user_name}</h4>
          
          </div>
          <p className="text-gray-700">{c.comment}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
</div>
        </div>
    );
};

export default DetailsCard;