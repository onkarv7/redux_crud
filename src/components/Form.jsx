import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { postData } from "../redux/slices/userSlice";

const Form = () => {
  const [posts, setPosts] = useState({});
  //   const { loading, error } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePost = (event) => {
    const { id, value } = event.target;
    setPosts((prevPost) => ({ ...prevPost, [id]: value })); // Update form data
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", posts);
    dispatch(postData(posts)); // Dispatch postData thunk
    navigate("/"); // Redirect after submission
  };
  console.log("posts", posts);
  return (
    <div className="my-5">
      <div className="container mx-auto shadow-md dark:shadow-white py-4 px-6 sm:px-10 bg-white dark:bg-gray-800 border-emerald-500 rounded-md">
        <a
          href="/"
          className="px-4 py-2 bg-red-500 rounded-md text-white text-sm sm:text-lg shadow-md"
        >
          Go Back
        </a>
        <div className="my-3">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Create Post
          </h1>
          <form onSubmit={handlePostSubmit}>
            <div className="my-2">
              <label
                htmlFor="name"
                className="text-sm sm:text-md font-bold text-gray-700 dark:text-gray-300"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                onChange={handlePost}
                className="block w-full border border-emerald-500 px-2 py-2 rounded-md"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="city"
                className="text-sm sm:text-md font-bold text-gray-700 dark:text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                onChange={handlePost}
                className="block w-full border border-emerald-500 px-2 py-2 rounded-md"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="age"
                className="text-sm sm:text-md font-bold text-gray-700 dark:text-gray-300"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                onChange={handlePost}
                className="block w-full border border-emerald-500 px-2 py-2 rounded-md"
              />
            </div>
            <div className="my-2">
              <label
                htmlFor="gender"
                className="text-sm sm:text-md font-bold text-gray-700 dark:text-gray-300"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                onChange={handlePost}
                className="block w-full border border-emerald-500 px-2 py-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              //   disabled={loading}
              className="px-4 py-1 bg-emerald-500 rounded-md text-black"
            >
              {/* {loading ? "Saving..." : "Save"} */}
              save
            </button>
          </form>
          {/* {error && <p className="text-red-500">Error: {error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Form;
