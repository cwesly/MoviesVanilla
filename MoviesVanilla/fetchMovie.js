export const fetchMovies = async () =>{
    const response = await fetch(url, options)
    const data = await response.json()
    return data.results;
}


const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTkzNDYzMTAwYzc2YzhlNWZkMWMyOTNlYWJhY2ExMyIsInN1YiI6IjY1ZmYyNDgyNjA2MjBhMDE2MzI4YzAwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OoB7SltPOegJXHPfduVZbuwmfFhkkXW6hAt6ov3VY8w'
  }
};