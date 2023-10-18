import './Blogs.styles.css'
import { useState } from 'react';
import React from 'react';
import BlogPost from '../BlogPost/BlogPost';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: "Choosing the Perfect Bag for Your Style",
      date: "October 1, 2023",
      content: "Are you in search of the ideal bag to complement your unique style?..."
    },
    {
      title: "The Ultimate Guide to Bag Care",
      date: "October 15, 2023",
      content: "You've found the perfect bag; now it's time to make it last..."
    },
    {
      title: "Top Bag Trends for the Upcoming Season",
      date: "November 1, 2023",
      content: "Fashion is ever-evolving, and keeping up with the latest trends is essential..."
    }
  ]);

  return (
    <div className="blog-list">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default Blogs;
