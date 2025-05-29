import { createContext, useContext, useEffect, useState } from "react";

export const DadosContext = createContext();

export function DadosProvider({ children }) {


  const exportar = {

  };

  return (
    <DadosContext.Provider value={exportar}>{children}</DadosContext.Provider>
  );
}