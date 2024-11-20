import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      });
  }, []);

  const filterChange = (event) => {
    const filterValue = event.target.value.toUpperCase();
    const arr = countries.filter(
      (country) =>
        country.name &&
        country.name.common &&
        country.name.common.toUpperCase().includes(filterValue)
    );
    filterCountries(arr, event.target.value);
  };

  const filterCountries = (arr, filter) => {
    if (arr.length > 10 && filter !== "") {
      setFilteredCountries([
        { name: { common: "Too many matches, specify another filter" } },
      ]);
    } else if (arr.length > 0 && arr.length <= 10) {
      setFilteredCountries(arr);
    } else {
      setFilteredCountries([]);
    }
  };

  const handleClick = (country) => {
    setFilteredCountries([country]);
    console.log(filteredCountries);
  };

  return (
    <div>
      <Filter filter={filterChange} />
      <Countries countries={filteredCountries} handleClick={handleClick} />
    </div>
  );
};

export default App;
