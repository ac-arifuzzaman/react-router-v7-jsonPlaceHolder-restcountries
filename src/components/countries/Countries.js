import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const cuntries = useLoaderData();
  return (
    <div>
      <h1>This is form Countries: {cuntries.length}</h1>
      {cuntries.map((country) => (
        <li key={country.cca3}>
          <Link to={`/country/${country.name.common}`}>
            {country.name.common}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Countries;
