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
    <div>
      <h1>All User List</h1>
      <ul>
        {data.map((user, idx) => (
          <li key={idx}>
            <strong>Name:</strong> {user.name} | <strong>Email:</strong>{" "}
            {user.email} | <strong>Phone:</strong> {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllUser;
