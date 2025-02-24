// MovieSearchApp/src/components/MovieDetails.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/omdbApi';
import { FavoritesContext } from '../contexts/FavoritesContext';
import LoadingSpinner from './LoadingSpinner';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === id);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(id);
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(movie);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return null;

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster === 'N/A' ? 'placeholder.jpg' : movie.Poster}
          alt={movie.Title}
          className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Ratings:</strong></p>
          <ul>
            {movie.Ratings.map((rating, index) => (
              <li key={index}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
          <p><strong>Metascore:</strong> {movie.Metascore}</p>
          <p><strong>imdbRating:</strong> {movie.imdbRating}</p>
          <p><strong>imdbVotes:</strong> {movie.imdbVotes}</p>
          <p><strong>DVD:</strong> {movie.DVD}</p>
          <p><strong>BoxOffice:</strong> {movie.BoxOffice}</p>
          <p><strong>Production:</strong> {movie.Production}</p>
          <p><strong>Website:</strong> {movie.Website}</p>

          <button
            onClick={handleFavoriteToggle}
            className={`mt-4 p-2 rounded ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <Link to="/" className="block mt-4 text-blue-500">Back to Search</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;