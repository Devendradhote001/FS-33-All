import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const Register = ({ setToggle }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addUser(data));
    alert("added successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-4">
        <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Fullname
            </label>
            <input
              type="text"
              {...register("fullname", { required: "Fullname is required" })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              placeholder="John Doe"
            />
            {errors.fullname && (
              <span className="text-red-500 text-xs">
                {errors.fullname.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              placeholder="username123"
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                {errors.username.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              placeholder="********"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold shadow"
          >
            Register
          </button>
        </form>
        <div>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setToggle((prev) => !prev)}
              className="text-blue-600 cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
