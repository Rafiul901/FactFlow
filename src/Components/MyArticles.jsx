import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth/AuthContext';

const MyArticles = () => {
   
      const { user } = use(AuthContext);
    
      const handleAddArticle = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());
    
       
        taskData.userEmail = user?.email;
        taskData.userName = user?.displayName;
    
        fetch(`http://localhost:3000/myPosts?email=${user.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(taskData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            Swal.fire({
              title: 'Article Successfully added!',
              icon: 'success'
            });
            form.reset();
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              title: 'Failed to add article!',
              icon: 'error'
            });
          });
        }
    return (
        <div>
          <div className="max-w-4xl mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold  mb-6">Create New Article</h1>
  
  <div className=" rounded-lg shadow-md p-6 border-2 border-blue-500" >
    <form onSubmit={handleAddArticle} className="space-y-6">
      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter article title"
        />
      </div>
      
      {/* Content Field */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          id="content"
          rows={10}
           name="content"
          className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your article content here..."
        ></textarea>
      </div>
      
      {/* Category and Thumbnail Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category Field */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a category</option>
            <option value="technology">Technology</option>
            <option value="business">Finance</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="philosophy">Philosophy</option>
          </select>
        </div>
        
        {/* Thumbnail Field */}
        <div>
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            id="thumbnail"
             name="thumbnail"
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="add image"
          />
        </div>
      </div>
      
  

      
      {/* Date Field */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Publish Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      {/* Author Info (readonly) */}
      <div className="bg-gray-100 border-1 p-4 rounded-md">
        <h3 className="text-sm font-medium text-blue-700 mb-2">Author Information</h3>
        <div className="flex items-center space-x-4">
         
          <div>
            <p className="text-sm  text-gray-900"><span className='font-bold'>Name: </span>{user?.displayName || ''}</p>
            <p className="text-sm text-blue-950"><span className='font-bold'>Email: </span> {user?.email || ''}</p>
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="pt-4">
        <button 
          type="submit"
          className="px-6 py-3 bg-blue-600 btn text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Publish Article
        </button>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default MyArticles;