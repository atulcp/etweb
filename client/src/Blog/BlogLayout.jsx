import React from 'react';
import CreatePostForm from './CreatePostForm';
import BlogPostsList from './BlogPostsList';
import { BGPattern4 } from '../imgs/ImgAssets';

const BlogLayout = () => {
  return (
    <div className="container h-full bg-black mx-auto p-4" style={{ backgroundImage: `url(${BGPattern4})`, backgroundSize: 'cover' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {/* Previous Posts Section */}
          <BlogPostsList />
        </div>
        <div>
          {/* Create Post Section */}
          <CreatePostForm />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

