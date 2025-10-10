import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="h-[60%] w-[40%] p-4 border-gray-400 rounded-xl text-center shadow-md">
      <h1 className="text-3xl font-bold text-blue-500">Login form</h1>
      <form
        className="flex flex-col gap-5 justify-center items-center h-full"
        action=""
      >
        <input
          className="border w-full rounded p-2"
          type="text"
          placeholder="Email"
        />
        <input
          className="border w-full rounded p-2"
          type="text"
          placeholder="Password"
        />

        <button
          className="border w-full rounded p-2 bg-blue-500/70 text-white"
          type="submit"
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
