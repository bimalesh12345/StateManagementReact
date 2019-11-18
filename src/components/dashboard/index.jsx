import React, { useState, useContext } from "react";
import { MovieContext } from "../../store/index.jsx";
const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const [nameerror, setnameError] = useState(0);
  const [priceerror, setpriceError] = useState(0);
  const updateName = e => {
    setnameError(0);
    setName(e.target.value);
  };
  const updatePrice = e => {
    setpriceError(0);
    setPrice(e.target.value);
  };
  const addMovies = e => {
    e.preventDefault();
    if (name == "") {
      setnameError(1);
      return;
    } else if (price == "") {
      setpriceError(1);
      return;
    }

    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: movies.length + 1 }
    ]);
    setPrice("");
    setName("");
  };
  return (
    <div className="addmovies">
      <form onSubmit={addMovies}>
        <input
          type="text"
          className={nameerror == "1" ? "error" : ""}
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Enter movie name"
        />
        <input
          type="text"
          className={priceerror == "1" ? "error" : ""}
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
