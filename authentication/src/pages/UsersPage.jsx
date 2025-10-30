import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsersData } from "../apis/userApi";
import { fetchUsersDataHook } from "../hooks/usersHook";

const UsersPage = () => {
  let { data, isPending, error } = fetchUsersDataHook();

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default UsersPage;
