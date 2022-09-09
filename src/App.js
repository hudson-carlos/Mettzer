import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Favorites from './page/favorites';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
