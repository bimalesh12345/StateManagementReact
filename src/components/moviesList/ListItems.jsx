import React, { useState } from "react";

const Index = ({ moviename, movieprice }) => {
  return (
    <li>
      <span>
        <strong>{moviename}</strong>
      </span>
      <span>{movieprice}</span>
    </li>
  );
};

export default Index;
