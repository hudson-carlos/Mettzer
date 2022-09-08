import { useContext, useEffect } from "react";
import { TodoContext } from "../provider";
import api from "../api";

export default function Search() {
  const {
    art,
    setArt,
    setData,
    setLoading,
    page,
    setPage
  } = useContext(TodoContext);

  useEffect(() => {
    if(art) {
      getApi();
      console.log("test"); 
    } 
  },[page]);  

  async function getApi() {
    const response = await api(art, page);
    setData(response);
    setLoading("");
  } 

  return (
    <header>
      <input 
        type="text" 
        value={art} 
        onChange={({currentTarget}) => setArt(currentTarget.value)}
      />
      <button onClick={() => {
        setLoading("Loading...")
        getApi();
        setPage(1);
      }}>
        Search
      </button>
    </header>
  );  
}
