import { useContext } from "react";
import Search from "../componets/search"
import { TodoContext } from "../provider";
import Card from '../componets/card';
import Pagination from "../componets/pagination";

export default function Home() {
  const { 
    data,
    loading,
  } = useContext(TodoContext);

  function loadingCard() {
    if (loading) return <h1>{loading}</h1>;
    return (
      <>  
        {data.map(artigo => (<Card obj={artigo}  />))}
        {(!data.length) ? null : <Pagination />} 
      </>
    );
  }

  return (
    <main>
      <Search />
      {loadingCard()}
    </main>  
  );
}
