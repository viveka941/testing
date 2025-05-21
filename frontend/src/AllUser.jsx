import axios from "axios";
import React, { useEffect, useState } from "react";

function AllUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/allUser");
        setData(res.data.data); // assuming res.data.data is an array of user objects
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">All User List</h1>
      {data.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <ul className="space-y-4">
          {data.map((user, idx) => (
            <li
              key={idx}
              className="border border-gray-200 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <p>
                <span className="font-semibold text-gray-700">Name:</span>{" "}
                {user.name}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Email:</span>{" "}
                {user.email}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Phone:</span>{" "}
                {user.phone}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllUser;
