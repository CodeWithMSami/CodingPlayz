import React, { useState } from "react";

const Contact = () => {
  const [Message, setMessage] = useState({ email: "", title: "", message: "" });

  const sendMessage = async (element) => {
    element.preventDefault();
    const message = await fetch("http://localhost:3000/api/addMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Message.email,
        title: Message.title,
        message: Message.message
      }),
    });
    const responce = await message.json();
    if(responce.Success){
      alert('Your message has send successfully.')
    }
    else{
      alert('Faild to send your message.Please try again...')
    }
    setMessage({ email: "", title: "", message: "" })
  };
  const onchange = (element) => {
    setMessage({ ...Message, [element.target.name]: element.target.value });
  };

  return (
    <>
      <form className="container mx-auto max-w-5xl min-h-full text-2xl font-mono my-4" onSubmit={sendMessage}>
        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="Email"
          onChange={onchange}
          value={Message.email}
          className="px-3 place-content-around placeholder-blue-700 border-2 w-full h-11 my-2 bg-gray-400 rounded-2xl border-blue-700"
        />
        <input
          type="text"
          required
          id="title"
          name="title"
          minLength={5}
          placeholder="Title"
          onChange={onchange}
          value={Message.title}
          className="px-3 place-content-around placeholder-blue-700 border-2 w-full h-11 my-2 bg-gray-400 rounded-2xl border-blue-700"
        />
        <textarea
          type="text"
          required
          id="message"
          name="message"
          minLength={10}
          placeholder="Message"
          onChange={onchange}
          value={Message.message}
          className="p-3 place-content-around h-52 placeholder-blue-700 border-2 w-full max-h- my-2 bg-gray-400 rounded-2xl border-blue-700"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 border-4 rounded-2xl border-blue-900 mt-8 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
