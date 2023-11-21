import React from 'react';

import BlogPostsListtwo from './BlogPostsListtwo';
import AuthorSection from "./AuthorSection" 

const BlogLayout = () => {
  return (
    <div className="container h-full bg-black mx-auto p-4"  >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {/* Previous Posts Section */}
          <BlogPostsListtwo/>
        </div>
        <div>
          {/* Create Post Section */}
          <AuthorSection/>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

