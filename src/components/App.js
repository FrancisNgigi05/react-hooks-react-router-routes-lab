import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movies, actors, directors } from "../data";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  // console.log(movies);

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/actors" element={<Actors actors={actors} />} />
          <Route path="/directors" element={<Directors directors={directors} />}/>
        </Routes>
    </BrowserRouter>    
  );
}

export default App;