import React from "react";

function Directors( { directors } ) {

  const directorsDisplayed = directors.map(({ name, movies }, index) => {
    return (
      <div key={index}>
        <div>{name}</div>
        <ul>
          {movies.map((m, index) => {
            return (
              <li key={index}>{m}</li>   
            )
          })}
        </ul>
      </div>

    );
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDisplayed}
    </div>
  );
}

export default Directors;
