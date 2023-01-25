import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
  const details = useLoaderData()[0];
  console.log(details);
  return (
    <div>
      <h1>{details.name.common}</h1>
      <img src={details.flags.png} alt="" />
    </div>
  );
};

export default CountryDetails;
