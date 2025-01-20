import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateData } from "../redux/slices/userSlice";

const Update = () => {
  const { users, loading } = useSelector((state) => state.app);
  console.log("users in update", users);

  const { id } = useParams();
  console.log("id im update", id);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    age: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const singleUser = users.find((user) => user.id === id);
      if (singleUser) {
        setFormData(singleUser);
      }
    }
  }, [id, users]);

  const handlePostInput = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  console.log("singleUser in update", formData);

  const handleUpdateInputSubmit = (e) => {
    e.preventDefault();
    dispatch(updateData(formData));
    navigate("/");
  };

  return (
    <div>
      <div className="my-5">
        <div className="container mx-auto shadow-md dark:shadow-white py-4 px-6 sm:px-10  border-emerald-500 rounded-md">
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
            <form onSubmit={handleUpdateInputSubmit}>
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
                  value={formData.name}
                  onChange={handlePostInput}
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
                  value={formData.city}
                  onChange={handlePostInput}
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
                  value={formData.age}
                  onChange={handlePostInput}
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
                  value={formData.gender}
                  onChange={handlePostInput}
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
    </div>
  );
};

export default Update;
