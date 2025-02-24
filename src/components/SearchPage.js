import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../services/omdbApi';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movieType, setMovieType] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchMovies(searchTerm, currentPage, movieType);
        if (data.Response === 'True') {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setMovies([]);
          setTotalPages(1);
          setError(data.Error);
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchMovies();
    } else {
      setMovies([]);
      setTotalPages(1);
    }
  }, [searchTerm, currentPage, movieType]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTypeChange = (e) => {
    setMovieType(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 w-full"
        />
        <select value={movieType} onChange={handleTypeChange} className="border p-2 w-full mt-2">
          <option value="">All Types</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">{error}</p>}
      {movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
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
            </div>
          ))}
        </div>
      )}
      {movies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default SearchPage;