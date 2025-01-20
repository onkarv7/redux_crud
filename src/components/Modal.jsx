import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Modal = ({ setModal, id }) => {
  const [singleUserData, setSingleUserData] = useState();
  const { users } = useSelector((state) => state.app);
  console.log("idd", id);
  console.log(users);
  const singleUser = users.find((user) => user.id === id);

  console.log("single ", singleUser);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-semibold">User Details</h3>
            <button
              onClick={() => setModal(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Modal Body */}
          <div className="mt-4">
            <p className="text-gray-600">Name : {singleUser.name}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">Age : {singleUser.age}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">City : {singleUser.city}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
