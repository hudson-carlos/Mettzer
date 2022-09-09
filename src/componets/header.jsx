import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
    <Link to="/">
      <h4>home</h4>
    </Link>    
    <Link to="/favorites">
      <h4>favorites</h4>
    </Link>
    </header>  
  );
}
