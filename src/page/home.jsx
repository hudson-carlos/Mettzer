import { useContext } from "react";
import Search from "../componets/search"
import { TodoContext } from "../provider";
import Card from '../componets/card';

export default function Home() {
  const { data } = useContext(TodoContext);

  return (
    <main>
      <Search />
      {data.map(artigo => (<Card obj={artigo}  />))}
    </main>  
  );
}
