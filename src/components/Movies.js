import { useState, useRef } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const page = useRef(1);

  async function fetchAll() {
    const res = await fetch(
      `http://www.omdbapi.com/?s=action&page=${page.current}&apikey=d1a81ec8
`
    );
    const newMovies = await res.json();
    setMovies((movies) => [
      ...newMovies.Search.map((m) => ({ ...m, score: 0 })),
      ...movies,
    ]);
    page.current++;
  }

  function _addToFavorite(movie) {
    setMovies((movies) => {
      const moviesCopy = [...movies];
      const idx = moviesCopy.indexOf(movie);
      moviesCopy.splice(idx, 1, { ...movie, inFavorite: true });
      return moviesCopy;
    });
  }

  function _like(movie) {
    setMovies((movies) => {
      const moviesCopy = [...movies];
      const idx = moviesCopy.indexOf(movie);
      moviesCopy.splice(idx, 1, { ...movie, score: movie.score + 1 });
      return moviesCopy;
    });
  }

  function _dislike(movie) {
    setMovies((movies) => {
      const moviesCopy = [...movies];
      const idx = moviesCopy.indexOf(movie);
      moviesCopy.splice(idx, 1, { ...movie, score: movie.score - 1 });
      return moviesCopy;
    });
  }

  const addToFavorite = useRef(_addToFavorite);
  const like = useRef(_like);
  const dislike = useRef(_dislike);

  return {
    movies,
    favorite: movies.filter((m) => m.inFavorite),
    like: like.current,
    dislike: dislike.current,
    addToFavorite: addToFavorite.current,
    fetchAll,
  };
};
