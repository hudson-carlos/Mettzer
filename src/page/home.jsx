import { useContext, useEffect } from "react";
import Search from "../componets/search"
import { TodoContext } from "../provider";
import Card from '../componets/card';
import Pagination from "../componets/pagination";
import Header from "../componets/header";

export default function Home() {
  const { 
    data,
    setData,
    loading,
  } = useContext(TodoContext);

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem('favorites'));
    if (!list) localStorage.setItem("favorites", JSON.stringify([]));
  });

  function pagination() {
    
  }

  function loadingCard() {
    if (loading) return <h1>{loading}</h1>;
    return (
      <>  
        {data.map(article => (
          <Card obj={article} listArticle={data} setListArticle={setData} />
        ))}
        {(!data.length) ? null : <Pagination />} 
      </>
    );
  }

  return (
    <main>
      <Header />
      <Search />
      {loadingCard()}
    </main>  
  );
}
