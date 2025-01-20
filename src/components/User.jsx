import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../redux/slices/userSlice";
import { useNavigate } from "react-router";
import Modal from "./Modal";

const User = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserDelete = (id) => {
    console.log("clicked", id);
    dispatch(deleteData(id));
  };

  const handleEditRedirect = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleViewUser = (id) => {
    setModal(true);
    setId(id);
  };

  return (
    <>
      <tr className="border-b hover:bg-orange-100 bg-gray-100">
        <td className="p-3 px-5">{user.name}</td>
        <td className="p-3 px-5">{user.age}</td>
        <td className="p-3 px-5">{user.city}</td>
        <td className="p-3 px-5 flex justify-end">
          <button
            type="button"
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleViewUser(user.id)}
          >
            View
          </button>
          <button
            type="button"
            className="mr-3 text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleEditRedirect(user.id);
            }}
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
      {modal && <Modal setModal={setModal} id={id} />}
    </>
  );
};

export default User;
