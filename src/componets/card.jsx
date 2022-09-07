export default (props) => {
  const {title, types, authors, description, fulltextUrls} = props.obj;

  return (
    <div>
      <h1>{title}</h1>
      {types.map(type => (<p>{type}</p>))}
      <p>Authors: </p>
      {authors.map(author => (<p>{author}</p>))}
      <textarea>{description}</textarea>
      {fulltextUrls.map(url => (<a href={url}>{url}</a>))}
    </div>
  ); 
}
