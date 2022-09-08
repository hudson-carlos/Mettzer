import { useContext, useState } from "react";
import { TodoContext } from "../provider";

export default (props) => {
  const [favorite, setfavorite] = useState(false);
  const { data, setData } = useContext(TodoContext)
  const { id, title, types, authors, description, fulltextUrls } = props.obj;

  function likeOrDisliked(article, like) {
    const newData = data.map(obj => {
      if (obj.id === article.id) obj.favorite = like;
      return obj;    
    });
    setData(newData);
    setfavorite(like);
  }

  function addLocalStorage() {
    let list = JSON.parse(localStorage.getItem('favorites'));
    const article = { id, title, types, authors, description, fulltextUrls };     
      
    if (list.some(({ id }) => id === article.id )) {
      list = list.filter(({ id }) => id !== article.id);
      localStorage.setItem("favorites", JSON.stringify(list));
      likeOrDisliked(article, false);
    } 

    else {
      list.push(article);
      localStorage.setItem("favorites", JSON.stringify(list));
      likeOrDisliked(article, true)
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      {types.map(type => (<p>{type}</p>))}
      <p>Authors: </p>
      {authors.map(author => (<p>{author}</p>))}
      <textarea>{description}</textarea>
      {fulltextUrls.map(url => (<a href={url}>{url}</a>))}
      <p onClick={addLocalStorage}>{(favorite) ? 'like' : 'disliked'}</p>
    </div>
  ); 
}
