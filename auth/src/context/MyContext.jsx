import { createContext } from "react";
export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  let greet = "hello good evening";

  return <MyStore.Provider value={greet}>{children}</MyStore.Provider>;
};
