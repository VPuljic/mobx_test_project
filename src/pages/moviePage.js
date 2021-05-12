import React from "react";
import { observer } from "mobx-react";
import Store from "../store/moviesStore";

const MoviePage = observer(() => {
  return (
    <div>
      {Store.data.map((movie) => (
        <h4 key={movie.imbdID}>
          {movie.Title}
          {movie.imbdID}
        </h4>
      ))}
    </div>
  );
});

export default MoviePage;
