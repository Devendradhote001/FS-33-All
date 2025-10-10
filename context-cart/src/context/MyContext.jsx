import { createContext, useState } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartsData, setCartsData] = useState([]);

  return (
    <MyStore.Provider value={{ setToggle, toggle, setCartsData, cartsData }}>
      {children}
    </MyStore.Provider>
  );
};
