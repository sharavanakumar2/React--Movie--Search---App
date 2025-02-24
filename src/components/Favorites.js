import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="border rounded p-2">
              <Link to={`/movie/${movie.imdbID}`}>
                <img
                  src={movie.Poster === 'N/A' ? 'placeholder.jpg' : movie.Poster}
                  alt={movie.Title}
                  className="w-full h-64 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
                <p>{movie.Year}</p>
              </Link>
              <button
                onClick={() => removeFromFavorites(movie.imdbID)}
                className="mt-2 bg-red-500 text-white p-1 rounded w-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;