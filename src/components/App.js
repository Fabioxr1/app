import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";

import dataLocal from "../data";

const App = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState(dataLocal);
  const [local, setLocal] = useState("Stai lavorando con il file Locale");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const removeTerm = () => {
    setTerm("");
  };

  const filterOn = (term) => {
    setTerm(term);
  };

  useEffect(() => {
    axios
      .get("http://207.154.193.65/")
      .then((response) => {
        setData(response.data);
        setLocal("Stai lavorando con il file remoto");
      })
      .catch((error) => {});
  }, []);

  const item = data.filter(
    (data) => data.name.toLowerCase().indexOf(term) > -1
  );

  if (!item) {
    return <div>Loading....</div>;
  }
  console.log(local);
  return (
    <div className="container">
      <div className="input-wrapper">
        <label htmlFor="product-search" id="input-label">
          Product Search
        </label>
        <i className="fas fa-search"></i>
        <input
          onChange={(event) => onInputChange(event)}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search..."
          value={term}
        />
        <i className="fas fa-times" onClick={removeTerm}></i>
      </div>
      {/* <div className="results-wrapper"> */}
      <ItemList data={item} filterOn={filterOn} />
      {/* </div> */}
    </div>
  );
};

export default App;
