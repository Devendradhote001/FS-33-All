import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../features/errorSlice";
import { toast } from "react-toastify";

const ErrorHandler = ({ error }) => {
  const dispatch = useDispatch();

  const { message } = useSelector((state) => state.error);

  if (error) {
    dispatch(setError(error));
    toast.error(message);
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorHandler;
