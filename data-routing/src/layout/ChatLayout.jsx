import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

const ChatLayout = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");
      if (res) {
        setUsers(res.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="h-screen flex gap-5">
      <nav className="w-[25%] border-r border-gray-400 flex flex-col gap-4">
        {users.map((elem) => {
          return (
            <span
              onClick={() =>
                navigate(
                  `/home/messages/${elem.name.firstname}/${elem.name.lastname}`
                )
              }
              className="border-b p-2 cursor-pointer border-gray-400"
              key={elem.id}
            >
              {elem.name.firstname}
            </span>
          );
        })}
      </nav>
      <div className="w-[75%]">
        <Outlet />
      </div>
    </div>
  );
};

export default ChatLayout;
