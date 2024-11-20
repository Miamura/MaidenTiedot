import React from "react";
import Country from "./Country";

const Countries = ({ countries, handleClick }) => {
  if (
    countries.length === 1 &&
    countries[0].name.common !== "Too many matches, specify another filter"
  ) {
    const country = countries[0];
    return <Country country={country} />;
  } else {
    return (
      <div>
        {countries.map((country) => {
          if (
            country.name.common === "Too many matches, specify another filter"
          ) {
            return <p key="too-many-matches">{country.name.common}</p>;
          } else {
            return (
              <p key={country.cca3}>
                {country.name.common}{" "}
                <button onClick={() => handleClick(country)}>Show</button>
              </p>
            );
          }
        })}
      </div>
    );
  }
};

export default Countries;
