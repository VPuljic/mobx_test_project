import movieStore from "../store/moviesStore";

export function getMoviesService() {
  const fetchedPromise = fetch(
    "http://www.omdbapi.com/?s=action&page=1&apikey=d1a81ec8"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      movieStore.Title = jsonResponse.Title;
      movieStore.Year = jsonResponse.Year;
      movieStore.Poster = jsonResponse.Poster;
      movieStore.imdbID = jsonResponse.imdbID;

      return movieStore;
    });
}

export function showMoviesService() {
  if (movieStore.Title) {
    movieStore.showFlag = true;
  }
  return movieStore;
}
