import React from 'react';

const BlogPost = ({ title, content }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default BlogPost;
