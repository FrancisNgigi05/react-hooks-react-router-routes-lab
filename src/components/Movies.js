import React, {useState} from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((oneMovie) => {
    return (
      <div>
      <h2> Name: {oneMovie.title} </h2>
      <p>Time: {oneMovie.time}</p>
      <p>Genres:</p>
        <ul>
          { oneMovie.genres.map((genre, index)=> {
            return (
              <li key={index}> {genre} </li>
            )
          }) }
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Movies Page</h1>
      { movie }
    </div>
  )
}

export default Movies;
