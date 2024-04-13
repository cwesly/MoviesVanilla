import { fetchMovies } from "./fetchMovie";
const baseUrlImg = "https://image.tmdb.org/t/p/w500/"
const getMovies = async () =>{
    const movies = await fetchMovies()
    console.log(movies);
    movies.forEach(movie => {
        printMovies(movie)
    });
}
getMovies()
const conteiner = document.querySelector(".conteiner")
const printMovies = (movie) => {
    const movieTitle = document.createElement("p")
    movieTitle.innerText = movie.title
    conteiner.appendChild(movieTitle)

    const movieImage = document.createElement("img")
    movieImage.src = `${baseUrlImg}${movie.poster_path}`
    conteiner.appendChild(movieImage)
}