import React, { Component } from "react";
import { observer } from "mobx-react";

import Header from "./components/Header";
import Search from "./components/Search";
import MoviePage from "./pages/moviePage";
import movieStore from "./store/moviesStore";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
