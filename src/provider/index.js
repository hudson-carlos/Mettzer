import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [art, setArt] = useState('');
  const [data, setData] = useState([]);

  const value = {
    art, 
    setArt,
    data,
    setData,
  };

  return (
    <TodoContext.Provider value={ value }>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
