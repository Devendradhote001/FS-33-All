import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../features/errorSlice";
import { toast } from "react-toastify";
import { removeResponse } from "../features/responseSlice";

const ErrorHandler = ({ error }) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.error);
  const success = useSelector((state) => state.response.message);

  useEffect(() => {
    if (message) {
      toast.error(message);
      dispatch(removeError());
    }
    if (success) {
      toast.success(success);
      dispatch(removeResponse());
    }
  }, [message, success]);

  return null;
};

export default ErrorHandler;
