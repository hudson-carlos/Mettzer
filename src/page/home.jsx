import { useContext } from "react";
import Search from "../componets/search"
import { TodoContext } from "../provider";
import Card from '../componets/card';

export default function Home() {
  const { 
    data,
    loading,
    setLoading,
  } = useContext(TodoContext);

  function loadingCard() {
    if (loading) return <h1>Loading...</h1>;
    return data.map(artigo => (<Card obj={artigo}  />)); 
  }

  return (
    <main>
      <Search />
      {loadingCard()}
    </main>  
  );
}
