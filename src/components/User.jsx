import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/slices/userSlice";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const handleUserDelete = (id) => {
    console.log("clicked", id);
    dispatch(deleteData(id));
  };
  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{user.name}</td>
      <td className="p-3 px-5">{user.age}</td>
      <td className="p-3 px-5">{user.city}</td>
      <td className="p-3 px-5 flex justify-end">
        <button
          type="button"
          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          View
        </button>
        <button
          type="button"
          className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleUserDelete(user.id);
          }}
          type="button"
          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
