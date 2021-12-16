import { useEffect, useState } from "react";

const TableCountries = () => {
  const [countries, setCountries] = useState()

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {console.log(data);setCountries(data);});
  },[]);

  const handleButton = () => {
    alert("Hola!!");
  };

  return (
    countries?
    <table>
      <tr>
        <th>Nombre</th>
        <th>Capital</th>
        <th>Region</th>
      </tr>
      {countries.map((countrie) => {
        return (
          <tr>
            <td>{countrie.name.common}</td>
            <td>{countrie.capital}</td>
            <td>{countrie.region}</td>
            <button onClick={handleButton}>Click</button>
          </tr>
        );
      })}
    </table>:
    null
  );
};

export default TableCountries;
