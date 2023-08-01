import './App.css';
import StarShipCard from './components/StarShipCard';

import { useState, useEffect } from 'react';

function App() {

  const [starShips, setStarships] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://swapi.dev/api/starships/');
      // const data = await res.json().results;
      const data = await res.json()
      setStarships(data);
    }
    fetchData();
  }, []);

  console.log(starShips);

  return (
    <div className="App">
      <h1>Star Wars App</h1>
      <StarShipCard />
    </div>
  );
}

export default App;
