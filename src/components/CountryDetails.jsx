import { useState, useEffect } from 'react';

const CountryDetails = ({ countryCode, setPosition }) => {
  const [countryDetails, setCountryDetails] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then(res => res.json())
      .then(data => {
        setCountryDetails(data[0]);
        setPosition(data[0].latlng);
      });
  }, []);

  return <div>{countryCode && <img src={countryDetails?.flags?.png} alt="" />}</div>;
};

export default CountryDetails;
