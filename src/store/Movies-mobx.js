import React from "react";
import { observable, action } from "mobx";

export const MoviesStore = () => {
  let page = 1;
  const store = observable({
    movies: [],
    get favorite() {
      return store.movies.filter((m) => m.inFavorite);
    },
    fetchAll: action(async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?s=action&page=${page}&apikey=d1a81ec8`
      );
      const newMovies = await res.json();
      store.movies.unshift(
        ...newMovies.Search.map((m) => ({ ...m, score: 0 }))
      );
      page++;
    }),
    addToFavorite: action((movie) => {
      movie.inFavorite = true;
    }),
    like: action((movie) => {
      movie.score++;
    }),
    dislike: action((movie) => {
      movie.score--;
    }),
  });

  return store;
};

export default React.createContext();
