import React, { useState, useContext } from "react";

import { MovieContext } from "../../store/index.jsx";

const NavBar = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="movielist">
      <span className="sitename"> My Movies</span>
      <span>List of Movies : {movies.length}</span>
    </div>
  );
};

export default NavBar;
