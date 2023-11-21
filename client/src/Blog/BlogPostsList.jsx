import React from 'react';
import BlogPost from './BlogPost';
import BlogPage from './BlogPage';

const BlogPostsList = () => {
  // Fetch and store blog posts logic goes here

  return (
    <div className="bg-black flex-col grow shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="block text-orange-500 text-xl font-bold mb-2">Previous Posts</h2>
      {/* Map through your blog posts and render them */}
      <BlogPage />
    </div>
  );
};

export default BlogPostsList;
