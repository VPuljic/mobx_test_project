//const api = "http://www.omdbapi.com/?s=action&page=1&apikey=d1a81ec8";

export async function moviesService(query) {
  const response = await fetch(
    "http://www.omdbapi.com/?s=" + query + "&page=1&apikey=d1a81ec8"
  );

  const data = await response.json();
  return data;
}
