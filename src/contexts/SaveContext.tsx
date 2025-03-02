import { createContext, useState } from "react";
import { IMonthDays } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}
interface ISaveContext {
  saved: IMonthDays[];
  setSaved: (arr: IMonthDays[]) => void;
}
export const SaveContext = createContext({} as ISaveContext);

export default function SaveContextProvider({ children }: IProps) {
  const [saved, setSaved] = useState<IMonthDays[]>([]);
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
