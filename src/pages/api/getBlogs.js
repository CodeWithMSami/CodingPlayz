import * as fs from 'fs';

export default async function getBlogs(req, res) {
  const data = await fs.promises.readdir('Blogs','utf-8')
  let allBlogs = [];
  for (const items of data) {
        const file = await fs.promises.readFile(('Blogs/'+items),'utf-8')
        const new_file = JSON.parse(file)
        allBlogs.push(new_file)
  }
  res.json(allBlogs)
}

