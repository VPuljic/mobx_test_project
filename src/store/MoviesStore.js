import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Header from "./components/Header";
import "./App.css";

@inject("MoviesStore")
@observer
class App extends Component {
  constructor(props) {
    super(props);
    props.MoviesStore.addMovies();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          {MoviesStore.movies.data.map((Name, imbdID) => (
            <li key={imbdID}>
              <h4>Movie name: {movies.Name}</h4>
              <img src={movies.Poster} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
