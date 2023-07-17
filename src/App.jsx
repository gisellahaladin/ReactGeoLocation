import { useState, useEffect } from 'react';

import './App.css';
import IpAddress from './components/IpAddress';
import CountryDetails from './components/CountryDetails';
import MapLocation from './components/MapLocation';

function App() {
  const [position, setPosition] = useState(null);
  const [countryCode, setCountryCode] = useState('');
  return (
    <>
      <IpAddress setCountryCode={setCountryCode} />
      {countryCode && <CountryDetails setPosition={setPosition} countryCode={countryCode} />}
      {position && <MapLocation position={position} />}
    </>
  );
}

export default App;
