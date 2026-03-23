"use client";

import { createContext, useContext, useState } from "react";
import React, { ReactNode } from "react";

export const DataContext = createContext<{
  isOpenPopupForm: boolean;
  setIsOpenPopupForm: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpenPopupForm: false,
  setIsOpenPopupForm: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [isOpenPopupForm, setIsOpenPopupForm] = useState(false);
  return (
    <DataContext.Provider value={{ isOpenPopupForm, setIsOpenPopupForm }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;



export const useAppContext = () => {
  if (!DataContext) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return useContext(DataContext);
};