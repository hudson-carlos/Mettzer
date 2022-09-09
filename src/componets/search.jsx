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
    } 
  },[page]);  

  async function getApi() {
    const list = JSON.parse(localStorage.getItem('favorites'));
    let response = await api(art, page);
    response = response.map(obj => {
      if (list.some(({ id }) => id === obj.id)) {
        obj.favorite = true;
        return obj;
      }
      obj.favorite = false;
      return obj;
    });
    console.log(response);
    setData(response);
    setLoading("");
  } 

  return (
    <>
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
    </>
  );  
}
