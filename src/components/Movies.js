import React from "react";

function Movies({ movies }) {
  // console.log(movies);

  const moviesDisplayed = movies.map(( { title, time, genres=[] }, index ) => {
    return (
      <div key={index}>
        <div>{title}</div>
        <div>{time}</div>
        <ul>
        {genres.map((genre, index) => {
          return (
            <li key={index}>{genre}</li>
          )
        })}
        </ul>
      </div>
    )
  })

  return(
    <div>
      <h1>Movies Page</h1>
      {moviesDisplayed}
    </div>
  );
}

export default Movies;