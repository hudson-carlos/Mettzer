import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [art, setArt] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState("");

  const value = {
    art, 
    setArt,
    data,
    setData,
    page,
    setPage,
    loading,
    setLoading
  };

  return (
    <TodoContext.Provider value={ value }>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
