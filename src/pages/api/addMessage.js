import * as fs from "fs";

export default async function addMessage(req, res) {
  const file = await fs.promises.readdir("Messages");
  const fileLength = file.length;
  console.log("Messages/" + (fileLength + 1).toString() + ".json");
  const message = await fs.promises.writeFile(
    "Messages/" + (fileLength + 1).toString() + ".json",
    JSON.stringify({
      email: req.body.email,
      title: req.body.title,
      message: req.body.message,
    })
  );
  res.status(201).json({ Success: true });
}
