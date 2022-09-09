import { useEffect, useState } from 'react';
import Card from '../componets/card';
// import Pagination from "../componets/pagination";

export default function favorites() {
  const [favorite, setFavorite] = useState([]);

    useEffect(() => {
      const list = JSON.parse(localStorage.getItem('favorites'));
      setFavorite(list); 
    });

  return (
    <main>
      {favorite.map(artigo => (<Card obj={artigo}  />))}
    </main>  
  );
}
