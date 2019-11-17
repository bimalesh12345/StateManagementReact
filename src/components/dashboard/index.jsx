import React, { useState, useContext } from "react";
import { MovieContext } from "../../store/index.jsx";
const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };
  const addMovies = e => {
    e.preventDefault();

    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: movies.length + 1 }
    ]);
  };
  return (
    <div className="addmovies">
      <form onSubmit={addMovies}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Enter movie name"
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={updatePrice}
          placeholder="Enter price"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Admin;
