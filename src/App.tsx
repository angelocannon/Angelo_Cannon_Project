import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import CharactersPage from './pages/CharacterPage';
import QuotesPage from './pages/QuotesPage';
import Navigation from './pages/Navigation';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>

    </Router>
  );
}


export default App;
