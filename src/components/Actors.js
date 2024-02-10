import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((oneActor) => {
    return (
      <div>
        <h2>Name: {oneActor.name}</h2>
        <p>Movies:</p>
        <ul>
          {oneActor.movies.map((movie, index) => {
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
      <h1>Actors Page</h1>
      { actor }
    </div>
  );
}

export default Actors;
