import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Register from "./Register";
import { MyStore } from "../context/MyContext";
import { Dukaan } from "../context/OnotherContext";

const Login = ({ setToggle }) => {
  let cd = useContext(MyStore);
  let cv = useContext(Dukaan);
  console.log(cv);

  console.log(cd);

  let { register, handleSubmit, reset } = useForm();

  let loginFormHandler = (data) => {
    let user = usersData.filter(
      (elem) => elem.email === data.email && elem.password === data.password
    );

    if (user.length === 0) {
      alert("user not found. please register first");
      return;
    }

    setLoggedInUsers((prev) => [...prev, user[0]]);

    alert("user logged in");
    reset();

    console.log(user);
  };

  return (
    <div className="w-[40%] bg-white p-4 flex rounded flex-col gap-5 text-center">
      <h1 className="text-2xl text-blue-600 font-bold">Login here</h1>
      <p></p>
      <form
        onSubmit={handleSubmit(loginFormHandler)}
        className="flex flex-col gap-5"
        action=""
      >
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
          value="Lets check"
        />
      </form>

      <div>
        <p>
          Don't have an account?
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-700 cursor-pointer"
          >
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
