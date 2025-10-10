import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyContext";

const Register = ({ setToggle, setUsersData, usersData }) => {
  let cd = useContext(MyStore);
  console.log(cd)

  let { register, handleSubmit, reset } = useForm();

  let formHandler = (data) => {
    let updatedArr = [...usersData, data];
    setUsersData(updatedArr);
    localStorage.setItem("users", JSON.stringify(updatedArr));
    alert("user registered");
    reset();
  };

  return (
    <div className="w-[40%] bg-white p-4 flex rounded flex-col gap-5 text-center">
      <h1 className="text-2xl text-blue-600 font-bold">Register here</h1>
      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-5"
        action=""
      >
        <input
          {...register("username")}
          className="border p-3 rounded"
          type="text"
          placeholder="Username"
        />
        <input
          {...register("email")}
          className="border p-3 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("password")}
          className="border p-3 rounded"
          type="text"
          placeholder="Password"
        />
        <input
          className="bg-blue-600 text-white p-3 rounded"
          type="submit"
          value="Register"
        />
      </form>

      <div>
        <p>
          Already have an account,
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-700 cursor-pointer"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
