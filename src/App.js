import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import { observer, useLocalStore } from "mobx-react";

import MoviesStoreContext, { MoviesStore } from "./store/Movies-mobx";

const Ratings = observer(function Ratings({ score }) {
  return <div>{["⭐", "⭐", "⭐", "⭐", "⭐"].splice(0, score)}</div>;
});

const Movie = observer(function Movie({ movie }) {
  const { addToFavorite, like, dislike } = useContext(MoviesStoreContext);
  console.log("render", movie);

  return (
    <div>
      {addToFavorite && (
        <>
          <button onClick={() => addToFavorite(movie)}>Add to Favorite</button>
          <button onClick={() => like(movie)}>Like</button>
          <button onClick={() => dislike(movie)}>Dislike</button>
        </>
      )}
      <div>{movie.Title}</div>
      <img src={movie.Poster} />
      {like && <Ratings score={movie.score} />}
    </div>
  );
});

const Movies = observer(function Movies() {
  const { movies } = useContext(MoviesStoreContext);

  return (
    <div className="movies">
      {movies.map((m) => (
        <Movie key={m.imdbID} movie={m} />
      ))}
    </div>
  );
});

const Favorite = observer(function Favorite() {
  const { favorite } = useContext(MoviesStoreContext);

  return (
    <div className="favorite">
      {favorite.map((m) => (
        <Movie key={m.imdbID} movie={m} />
      ))}
    </div>
  );
});

const App = observer(function App() {
  const store = useLocalStore(MoviesStore);
  const { fetchAll } = store;

  return (
    <MoviesStoreContext.Provider value={store}>
      <div className="App">
        <Header />
        <button onClick={fetchAll}>Search</button>
        <Movies />
        <Favorite />
      </div>
    </MoviesStoreContext.Provider>
  );
});

export default App;
