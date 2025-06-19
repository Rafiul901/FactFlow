import React, { use, useEffect, useState } from 'react';

import Loader from './Loader';
import Swal from 'sweetalert2';
import { Link } from 'react-router'; 
import { AuthContext } from '../Auth/AuthContext';
import Modal from './Modal';

const PostArticle = () => {
  const { user, loading } = use(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);

  

  const handleDelete = ({ _id }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://backend-rafiul901-rafiul901s-projects.vercel.app/myPosts/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remainingTasks = myTasks.filter(task => task._id !== _id);
          setMyTasks(remainingTasks);
          Swal.fire({
            title: "Deleted!",
            text: "Your article has been deleted.",
            icon: "success"
          });
        })
        .catch(error => {
          console.error('Error deleting article:', error);
          Swal.fire({
            title: "Error",
            text: "Failed to delete post",
            icon: "error"
          });
        });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`https://backend-rafiul901-rafiul901s-projects.vercel.app/myPosts?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyTasks(data);
          setLoadingTasks(false);
        })
        .catch(error => {
          console.error('Error fetching post:', error);
          setLoadingTasks(false);
        });
    }
  }, [user]);

  if (loading || loadingTasks) return <Loader />;

  return (
    <div className="min-h-screen  p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border-2 border-indigo-700 rounded-xl shadow-md overflow-hidden p-4 md:p-6">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">My Posted Tasks</h2>
          </div>

          {myTasks.length === 0 ? (
            <div className="text-center py-8 md:py-12">
              <p className="text-blue-600 text-base md:text-lg">You haven't posted any tasks yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
             
              <table className="w-full hidden md:table">
                <thead className="bg-indigo-400 border-4 border-blue-600 text-white">
                  <tr>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold uppercase text-black tracking-wider">Title</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold uppercase text-black tracking-wider">Deadline</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold uppercase text-black tracking-wider">Thumbnail</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold uppercase text-black tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-100">
                  {myTasks.map(task => (
                    <tr key={task._id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-blue-900 font-medium">{task.title}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-blue-800">{task.date}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-blue-800 font-semibold"><img className='w-15 border-2 border-blue-600' src={task.thumbnail} alt="" /></td>
                      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Link 
                            to={`/update/${task._id}`}
                            className="px-2 md:px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs md:text-sm"
                          >
                            Update Post
                          </Link>
                          <button 
                            onClick={() => handleDelete(task)} 
                            className="px-2 md:px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-xs md:text-sm"
                          >
                            Delete
                          </button>
                          
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="md:hidden space-y-4">
                {myTasks.map(task => (
                  <div key={task._id} className="border border-blue-100 rounded-lg p-4 bg-white shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-blue-900">{task.title}</h3>
                      <span className="text-blue-800 font-semibold">${task.budget}</span>
                    </div>
                    <p className="text-sm text-blue-800 mb-3">Deadline: {task.deadline}</p>
                    <div className="flex space-x-2">
                      <Link 
                        to={`/update/${task._id}`}
                        className="flex-1 text-center px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        Update
                      </Link>
                      <button 
                        onClick={() => handleDelete(task)} 
                        className="flex-1 px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                      >
                        Delete
                      </button>
                    
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostArticle;