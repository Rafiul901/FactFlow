import React from 'react';

const Modal = () => {
    return (
        <div>
            <div>
      {/* Button to open modal */}
      <button 
        className="btn btn-primary"
        onClick={() => document.getElementById('article_modal').showModal()}
      >
        Create New Article
      </button>

      {/* The dialog modal */}
      <dialog id="article_modal" className="modal">
        <div className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Create New Article</h2>
            <form method="dialog">
              <button className="btn btn-sm btn-circle">✕</button>
            </form>
          </div>
          
          <form className="space-y-4">
            {/* Title Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter article title"
              />
            </div>
            
            {/* Content Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                rows={6}
                className="textarea textarea-bordered w-full"
                placeholder="Write your article content here..."
              ></textarea>
            </div>
            
            {/* Category and Thumbnail Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Category Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-bordered w-full">
                  <option disabled selected>Select a category</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Health</option>
                  <option>Entertainment</option>
                </select>
              </div>
              
              {/* Thumbnail Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail Image URL</span>
                </label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            
            {/* Tags Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tags (comma separated)</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="tag1, tag2, tag3"
              />
            </div>
            
            {/* Date Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Publish Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full"
              />
            </div>
            
            {/* Author Info (readonly) */}
            <div className="bg-base-200 p-3 rounded-box">
              <h3 className="text-xs font-medium opacity-70 mb-1">Author Information</h3>
              <div className="flex items-center space-x-3">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">userInitials</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">username</p>
                  <p className="text-xs opacity-70">email</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="modal-action">
              {/* This form will close the modal */}
              <form method="dialog">
                <button className="btn">Cancel</button>
              </form>
              <button type="submit" className="btn btn-primary">
                Publish Article
              </button>
            </div>
          </form>
        </div>
        
        {/* Clicking outside closes the modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  
        </div>
    );
};

export default Modal;