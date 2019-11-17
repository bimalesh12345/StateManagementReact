import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: "Avengers", price: "400", id: 1 },
    { name: "Bahubali", price: "400", id: 2 },
    { name: "Housefull 4", price: "400", id: 3 },
    { name: "War", price: "400", id: 4 }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
