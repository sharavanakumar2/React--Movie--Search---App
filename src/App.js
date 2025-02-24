import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './index.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;