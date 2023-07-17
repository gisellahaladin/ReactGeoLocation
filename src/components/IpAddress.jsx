import { useState, useEffect } from 'react';

const IpAddress = ({ setCountryCode }) => {
  const [ip, setIp] = useState(null);
  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setIp(data.ip);
        setCountryCode(data.location.country);
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <div>
      {ip && (
        <>
          <h2>{ip}</h2>
        </>
      )}
    </div>
  );
};

export default IpAddress;
