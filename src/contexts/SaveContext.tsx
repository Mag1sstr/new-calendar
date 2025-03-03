import { createContext, useContext, useState } from "react";
import { ISaved } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}
interface ISaveContext {
  saved: ISaved[];
  setSaved: (arr: ISaved[]) => void;
}
export const SaveContext = createContext({} as ISaveContext);

export default function SaveContextProvider({ children }: IProps) {
  const [saved, setSaved] = useState([]);
  return (
    <SaveContext.Provider
      value={{
        saved,
        setSaved,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
}

export function useSave() {
  return useContext(SaveContext);
}
