import { useContext } from "react";
import { TodoContext } from "../provider";
import api from "../api";

export default function Search() {
  const {
    art,
    setArt,
    setData,
  } = useContext(TodoContext);

  async function getApi() {
    const response = await api(art, 1);
    setData(response);
    console.log(response);
  } 

  return (
    <header>
      <input 
        type="text" 
        value={art} 
        onChange={({currentTarget}) => setArt(currentTarget.value)}
      />
      <button onClick={getApi} >Search</button>
    </header>
  );  
}
