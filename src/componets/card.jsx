export default ({obj, listArticle, setListArticle}) => {
  const { id, title, types, authors, description, fulltextUrls, favorite } = obj;
  
  function likeOrDisliked(like) {
    const newData = listArticle.map(obj => {
      if (id === obj.id) obj.favorite = like;
      return obj;    
    });
    setListArticle(newData);
  }

  function addLocalStorage() {
    let list = JSON.parse(localStorage.getItem('favorites'));

    
    if (list.some(({ id }) => id === obj.id )) {
      likeOrDisliked(false);
      list = list.filter(({ id }) => id !== obj.id);
      localStorage.setItem("favorites", JSON.stringify(list));
    } 

    else {
      likeOrDisliked(true)
      list.push(obj);
      localStorage.setItem("favorites", JSON.stringify(list));
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
      <p onClick={addLocalStorage}>{(favorite) ? 'Disliked': 'Like'}</p>
    </div>
  ); 
}
