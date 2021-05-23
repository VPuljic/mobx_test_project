import { makeAutoObservable } from "mobx";

class Store {
  data = [];
  query = "";

  constructor() {
    makeAutoObservable(this);
  }

  setMoviesList = (data) => {
    this.data = new data();
  };

  setQuery = (query) => {
    this.query = new query();
  };
}

export default new Store();
