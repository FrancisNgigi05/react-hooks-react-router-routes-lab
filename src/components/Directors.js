import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((oneDirector) => {
    return (
      <div>
        <h2>Name: {oneDirector.name}</h2>
        <p>Movies:</p>
        <ul>
          {oneDirector.movies.map((movie, index) => {
            return (
              <li key={index}>
                {movie}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      { director}
    </div>
  );
}

export default Directors;
