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
      setStarships(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Star Ships</h1>
      <StarShipCard starShips={starShips}/>
    </div>
  );
}

export default App;
