import AppRouter from './components/AppRouter';
import './App.css';
import { useState } from 'react';


function App() {
  const [stats, setStats] = useState({clicks: 0, balance: 0, 
                            increase: 1, itemstobuy: 0});
  const handleClick = () => {
    // Tehdään kopio stats-tilamuuttujasta.
    let newstats = {...stats}
    // Kasvatetaan napautusten lukumäärää yhdellä.
    newstats.clicks = newstats.clicks + 1;
    //Kasvatetaan sitruunoiden määrää kasvatusarvolla.
    newstats.balance = newstats.balance + newstats.increase;
    // Tallennetaan päivitetty stats-muuttuja.
    setStats(newstats); 
    }

  return (
    <AppRouter stats={stats} handleClick={handleClick} />
  )
}

export default App