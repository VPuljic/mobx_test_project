import { makeAutoObservable } from "mobx";

class Store {
  data = [];
  query = "";

  constructor() {
    makeAutoObservable(this);
  }

  setMoviesList = (data) => {
    this.data = data;
  };

  setQuery(query) {
    this.query = query;
  }
}

export default new Store();
