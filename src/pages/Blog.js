import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    let blog = {};
    const blogs = async () => {
      const data = await fetch("/api/getBlogs");
      const new_data = await data.json();
      setBlogs(new_data);
    };
    blogs();
  }, []);

  return (
    <div>
      <div className="text-white container text-center text-5xl font-mono my-4">
        Blogs
        {blogs.map((element) => {
          return (
            <div key={element.slug} className="text-base my-3">
              <div className="text-2xl text-purple-600"><Link href={`/blogs/${element.slug}`}>{element.title}</Link></div>
              <div className="text-lg max-w-3xl mx-auto text-yellow-500">
                {element.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
