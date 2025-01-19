import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/slices/userSlice";
import User from "./User";

const Home = () => {
  const { users, loading, error } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log("users Home", users);

  return (
    <div>
      <div className="p-4 flex justify-center">
        <h1 className="text-3xl font-semibold text-gray-700">Users Data</h1>
      </div>
      {loading && <div className="text-center text-blue-500">Loading...</div>}
      {error && <div className="text-center text-red-500">Error: {error}</div>}
      <div className="text-gray-900 bg-gray-200">
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b bg-gray-300">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Age</th>
                <th className="text-left p-3 px-5">City</th>
                <th className="text-left p-3 px-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user) => <User key={user.id} user={user} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
