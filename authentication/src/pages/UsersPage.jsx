import React from "react";
import { fetchUsersDataHook } from "../hooks/usersHook";
import { getUsersData } from "../apis/userApi";
import { useQuery } from "@tanstack/react-query";

const UsersPage = () => {
  let { data, isPending, error } = fetchUsersDataHook();

  console.log(data);

  if (isPending) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default UsersPage;
