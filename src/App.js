import React from "react";
import Header from "./components/Header";
import MoviePage from "./pages/moviePage.jsx";
import SearchPage from "./pages/searchPage.jsx";
import { observer } from "mobx-react";

const App = observer(() => {
  return (
    <div>
      <Header />
      <SearchPage />
      <MoviePage />
    </div>
  );
});

export default App;
