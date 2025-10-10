import { createContext } from "react";

export let Dukaan = createContext();

export const MyDukaanProvider = ({ children }) => {
  let samaan = "k.fshdjkfewgf";
  return <Dukaan.Provider value={samaan}>{children}</Dukaan.Provider>;
};
