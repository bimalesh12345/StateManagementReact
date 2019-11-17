import React, { useState, useContext } from "react";
import MoviesListItem from "./ListItems.jsx";
import { MovieContext } from "../../store/index.jsx";

const Index = () => {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);
  return (
    <div className="movieslist">
      <ul>
        <li
          style={{
            fontSize: "20px",
            backgroundColor: "#1f1f1f",
            color: "#fff"
          }}
        >
          <span>Name</span>
          <span>Price</span>
        </li>
        {movies.map(movie => (
          <MoviesListItem
            moviename={movie.name}
            movieprice={movie.price}
            key={movie.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Index;
