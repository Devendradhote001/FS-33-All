import { useQuery } from "@tanstack/react-query";
import { getUsersData } from "../apis/userApi";

export const fetchUsersDataHook = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsersData,
  });
};
