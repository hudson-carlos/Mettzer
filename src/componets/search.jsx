import { useContext } from "react";
import { TodoContext } from "../provider";

export default function Search() {
  const {art, setArt} = useContext(TodoContext)

  return (
    <header>
      <input 
        type="text" 
        value={art} 
        onChange={({currentTarget}) => setArt(currentTarget.value)}
      />
    </header>
  );  
}
