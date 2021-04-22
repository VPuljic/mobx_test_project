import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import MoviesStore from "./store/MoviesStore";

const Root = (
  <Provider MoviesStore={MoviesStore}>
    <App />
  </Provider>
);
ReactDOM.render(Root, document.getElementById("root"));
