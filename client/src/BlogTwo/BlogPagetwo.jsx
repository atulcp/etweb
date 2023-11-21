import React from 'react';
import BlogPosttwo from './BlogPosttwo'; // Importing the BlogPost component

const BlogPage = () => {
    // Example blog posts data
    const blogPosts = [
        {
            id: 1,
            title: 'Exploring the Wonders of Nature',
            content: 'In this post, we delve into the beauty and intricacies of the natural world...'
        },
        {
            id: 2,
            title: 'The Future of Technology and Innovation',
            content: 'Technology is evolving at an unprecedented pace, reshaping the way we live...'
        },
        {
            id: 3,
            title: 'Culinary Adventures: Exploring World Cuisines',
            content: 'Food is not just a necessity; it\'s a journey of flavors and cultures...'
        },
        {
            id: 4,
            title: 'The Art of Mindfulness and Well-being',
            content: 'In our fast-paced world, taking a moment to pause and reflect is vital...'
        },
        {
            id: 5,
            title: 'Travel Diaries: Discovering Hidden Gems',
            content: 'Travel is more than visiting popular destinations; it’s about discovering hidden gems...'
        }
        // Add more posts here if needed
    ];

    return (
        <div className="container mx-auto p-4 ">
            <div className="flex flex-col bg-gray-300 text-black-300 md:flex-row md:flex-wrap gap-4">
                {blogPosts.map(post => (
                    <BlogPosttwo key={post.id} title={post.title} content={post.content} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
