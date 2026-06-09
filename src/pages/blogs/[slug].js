import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const { slug } = router.query;

  useEffect(() => {
    if(!slug) return;
    const blogs = async () => {
      const data = await fetch("/api/getBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });
      const new_data = await data.json();
      setBlogs(new_data);
      
    };
    blogs();
  }, [slug]);

  return (
    <div className="text-white container text-center text-5xl font-mono my-4 h-96 mb-24 mt-8">
      {blogs.map((element) => {
        return (
          <div key={element.slug} className="text-base my-5">
            <div className="text-4xl my-5 text-purple-600">{element.title}</div>
            <div className="text-xl max-w-3xl mx-auto text-yellow-500">
              {element.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slug;
