import React, { useState } from "react";
import MoviesList from "./moviesList/index.jsx";
import Style from "../static/css/styles.css";
import { MovieProvider } from "../store/index.jsx";
import NavBar from "./navbar/index.jsx";
import Admin from "./dashboard/index.jsx";
const Index = () => {
  return (
    <div>
      <MovieProvider>
        <NavBar />
        <Admin />
        <MoviesList />
      </MovieProvider>
    </div>
  );
};

export default Index;
