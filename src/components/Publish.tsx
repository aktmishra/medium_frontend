import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config/const";
import { useNavigate } from "react-router-dom";

const Publish = () => {
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const navigate = useNavigate()

async function publishHandler ( ) {
    const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, {
        title,
        content
    },{
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      });
    navigate(`/blog/${response.data.data.id}`)
}

  return (
    <div>
      <form className="max-w-full mx-auto px-5">
        <input
          id="title"
          onChange={e=>setTitle(e.target.value)}
          className="block p-2.5 my-5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Title..."
        ></input>
        <textarea
          id="message"
          rows={9}
          onChange={e=>setContent(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Content..."
        ></textarea>

        <button
          type="button"
          onClick={publishHandler}
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600   focus:outline-none "
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Publish;
