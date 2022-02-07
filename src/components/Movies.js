import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesList = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Title: {movie.title}</h2>
      <h3>Time: {movie.time} minutes</h3>
      <ul><h3>Genres:</h3>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1>Movies Page</h1>
    <div>{moviesList}</div>
  </div>
  )}

export default Movies;
