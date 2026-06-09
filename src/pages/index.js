import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
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
    <>
      <Head>
        <title>My Next App</title>
      </Head>
      <main>
        <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 text-center justify-center m-14 rounded-2xl py-32'>
        <div className="text-9xl text-blue-600">Coding<div className="text-white inline">Playz</div></div>
        </div>
        <div className="text-white container text-center text-5xl font-mono my-4">
          <div className="mb-8">Blogs</div>
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
      </main>
    </>
  );
}
