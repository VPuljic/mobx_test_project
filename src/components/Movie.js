import React from "react";

const Movie = (props) => (
  <div>
    <h1>{props.Title}</h1>
    <h6>{props.Year}</h6>
    <p>{props.imdbID}</p>
    <img src={props.Poster} alt="movie poster" />
  </div>
);

export default Movie;
