import React from "react";
import { observer } from "mobx-react";
import Store from "../store/moviesStore";
import {moviesService} from "../services/moviesService"

const MoviePage = observer(() => {
  return (
    <div>
      <button
        onClick={async () => {
        const data = await moviesService();
          Store.setMoviesList(data);
        }}
      >
        Fetch
      </button>
      {Store.data.map((movie) => (
        <h4 key={movie.imbdID}>
          <li>title: {movie.Title}</li>
          <li>year: {movie.Year}</li>
          <img src={movie.Poster} alt="movie poster"></img>

        </h4>
      ))}
    </div>
  );
});

export default MoviePage;
