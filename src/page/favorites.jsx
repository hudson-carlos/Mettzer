import { useEffect, useState } from 'react';
import Card from '../componets/card';
import Header from '../componets/header';
export default () => {
  const [favorite, setFavorite] = useState([]);
  const [page, setPage] = useState(0);

    useEffect(() => {
      let list = JSON.parse(localStorage.getItem('favorites'));
      list = pagination(list)
      setFavorite(list) 
    }, []);

    function pagination(list) {
      let listPagination = [];
      let quantity = 10;

      while (list.length > 0) {
        const arr2 = list.splice(0, quantity);
        listPagination.push(arr2);
      }
      return listPagination;
  }

  return (
    <main>
      <Header />
      {favorite.map(article => (
        <Card obj={article} listArticle={favorite[page]} setListArticle={setFavorite} />
      ))}
      <button onClick={() => {if (page > 1) setPage(page - 1)}}>Previous</button>
      <span>{page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </main>  
  );
}
