// MovieSearchApp/src/services/omdbApi.js
const API_KEY = 'a0a3117f'; // Replace with your actual API key

export const searchMovies = async (searchTerm, page = 1, type = '') => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${API_KEY}&type=${type}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};