import React from "react";

const Card = ({ country }) => {
  console.log(country);
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h5>{country.translations.fra.common}</h5>
        <h5>{country.capital}</h5>
        <h5>Pop: {country.population.toLocaleString()}</h5>
      </div>
    </li>
  );
};

export default Card;
