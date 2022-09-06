import { createContext } from "react";

const context = createContext();

function provider({ children }) {

  const value = {};

  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
}

export default provider;