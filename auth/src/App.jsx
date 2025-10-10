import React, { useContext, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { MyStore } from "./context/MyContext";
import Auth from "./components/Auth";
import { Dukaan, MyDukaanProvider } from "./context/OnotherContext";

const App = () => {
  let cv = useContext(Dukaan);
  console.log(cv);
  let cd = useContext(MyStore);
  console.log("i m in app->", cd);

  const [toggle, setToggle] = useState(true);
  const [loggedInUsers, setLoggedInUsers] = useState([]);
  const [usersData, setUsersData] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );

  return (
    <div className="h-screen flex-col w-screen bg-gray-400 flex justify-center items-center">
      {/* {toggle ? (
        <Login
          setToggle={setToggle}
          usersData={usersData}
          setLoggedInUsers={setLoggedInUsers}
        />
      ) : (
        <Register
          setToggle={setToggle}
          setUsersData={setUsersData}
          usersData={usersData}
        />
      )} */}

      <MyDukaanProvider>
        <Auth />
      </MyDukaanProvider>

      <div>
        {loggedInUsers.length
          ? loggedInUsers.map((elem) => {
              return (
                <div>
                  <h1>Name - {elem.username}</h1>
                  <p>Email - {elem.email}</p>``
                </div>
              );
            })
          : "No users loggedin"}
      </div>
    </div>
  );
};

export default App;
