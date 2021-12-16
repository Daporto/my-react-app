import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

import '../styles/countries.css'
const Countries = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };

  return countries ? (
    <div className="container">
      <h1>All countries</h1>
      <br />
      {sliceIntoChunks(countries, 3).map((row,index1) => (
        <div className="row" key={`row-${index1}`}>
          {row.map((countrie, index2) => (
            <div className="col" key={`${index1},${index2}`}>
              <CountryCard
                name={countrie.name.common}
                capital={countrie.capital ? countrie.capital[0] : "N/A"}
                population={countrie.population}
                flag={countrie.flags.png}
                googleMaps={countrie.maps.googleMaps}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : null;
};

export default Countries;
