import React from 'react';

const CreatePostForm = () => {
  // Form submission logic goes here

  return (
    <div className="bg-black h-screen">
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="pb-6">
                <h2 className="block text-orange-500 text-xl text-center font-bold mb-2">Create a New Post</h2>
            </div>
            <input className="shadow appearance-none border rounded w-full bg-gray-300 py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title" />
            <textarea className="shadow appearance-none border bg-gray-300 rounded h-[500px] w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Content"></textarea>
            <button className="bg-transparent border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Create Post</button>
        </form>  
    </div>
  );
};

export default CreatePostForm;
