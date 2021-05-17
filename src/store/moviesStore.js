import { makeAutoObservable } from "mobx";
import { moviesService } from "../services/moviesService";

class Store {
  data = [];
  query = "";

  constructor() {
    makeAutoObservable(this);
  }
  async fetchMovies() {
    const data = await moviesService();
    this.setMoviesList(data);
  }

  setMoviesList(data) {
    this.data = data;
  }

  setQuery(query) {
    this.query = query;
  }
}

export default new Store();
