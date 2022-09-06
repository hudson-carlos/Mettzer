import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [art, setArt] = useState('');

  const value = {
    art, 
    setArt,
  };

  return (
    <TodoContext.Provider value={ value }>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;