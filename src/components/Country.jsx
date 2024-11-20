import React from "react";
import Weather from "./Weather";
import "./FlagWeather.css";

const Country = ({ country }) => {
  const capital =
    country.capital && Array.isArray(country.capital)
      ? country.capital[0]
      : "N/A";

  return (
    <div>
      <h2>{country.name.common}</h2>

      <div className="country-container">
        <div className="flag-container">
          {country.flags && country.flags.png ? (
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
          ) : (
            <p>No flag available</p>
          )}
        </div>

        <div className="details-container">
          <div className="detail-item">
            <h3>Capital:</h3>
            <p>{capital}</p>
          </div>
          <div className="detail-item">
            <h3>Area:</h3>
            <p>{country.area}</p>
          </div>
          <div className="detail-item">
            <h3>Population:</h3>
            <p>{country.population}</p>
          </div>
          <div className="detail-item">
            <h3>Languages:</h3>
            <ul>
              {country.languages ? (
                Object.values(country.languages).map((language, index) => (
                  <li key={index}>{language}</li>
                ))
              ) : (
                <li>No languages available</li>
              )}
            </ul>
          </div>
        </div>

        <div className="weather-container">
          <Weather capital={capital} />
        </div>
      </div>
    </div>
  );
};

export default Country;
