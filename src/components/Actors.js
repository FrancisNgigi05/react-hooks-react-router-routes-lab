import React from "react";

function Actors( { actors } ) {
  const actorsDisplayed = actors.map(({name, movies}, index) => {
    return (
      <div key={index}>
        <div>{name}</div>
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}> {movie} </li>
            )
          })}
        </ul>
      </div>
    );
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDisplayed}
    </div>);
}

export default Actors;