import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Modal = () => {
    const userTask = useLoaderData(); 
    const { _id } = userTask;
    const navigate = useNavigate();

    const handleUpdateArticle = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());

        fetch(`https://backend-gray-eight-74.vercel.app/myPosts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            Swal.fire({
                title: 'Success!',
                text: 'Your task was updated successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/postArticles');
            });
        })
        .catch(error => {
            console.error('Error updating task:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update task',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    return (
<div>
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Update Article</h1>

    <div className="rounded-lg shadow-md p-6 border-2 border-blue-500">
      <form onSubmit={handleUpdateArticle} className="space-y-6">
      
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={userTask.title}
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter article title"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            required
            defaultValue={userTask.content}
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your article content here..."
          ></textarea>
        </div>

        {/* Category & Thumbnail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue={userTask.category}
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

          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              defaultValue={userTask.thumbnail}
              className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add image"
            />
          </div>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Publish Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            defaultValue={userTask.date}
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

       
        <div className="bg-gray-100 border p-4 rounded-md">
          <h3 className="text-sm font-medium text-blue-700 mb-2">Author Information</h3>
          <div>
            <p className="text-sm text-gray-900">
              <span className="font-bold">Name:</span> {userTask.userName}
            </p>
            <p className="text-sm text-blue-950">
              <span className="font-bold">Email:</span> {userTask.userEmail}
            </p>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 btn text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Article
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default Modal;
