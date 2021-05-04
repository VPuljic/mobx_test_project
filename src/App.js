import React, { Component } from "react";
import Header from "./components/Header";
import MoviePage from "./pages/moviePage";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <MoviePage />
      </div>
    );
  }
}

export default App;
