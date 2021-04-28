import { observable, computed, action } from "mobx";

class Store {
  @observable Title;
  @observable Year;
  @observable Poster;
  @observable imdbID;

  constructor() {
    (this.Title = null),
      (this.Year = null),
      (this.Poster = null),
      (this.imdbID = false);
  }
}

let movieStore = new Store();

export default movieStore;
