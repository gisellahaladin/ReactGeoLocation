import { useState, useEffect } from 'react';

const IpAddress = ({ setCountryCode, setPosition }) => {
  const [ip, setIp] = useState(null);
  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setIp(data.ip);
        setCountryCode(data.location.country);
        console.log(data.location);
        setPosition([data.location.lat, data.location.lng]);
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
