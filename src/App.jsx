import AppRouter from './components/AppRouter';
import items from './config/items.js';
import round from './utils/round';
import './App.css';
import { useState } from 'react';


function App() {
  const [storeitems,setStoreitems] = useState(items);
  const [stats, setStats] = useState({clicks: 0, balance: 0, 
                            increase: 1, itemstobuy: 0});
  const handleClick = () => {
    // Tehdään kopio stats-tilamuuttujasta.
    let newstats = {...stats}
    // Kasvatetaan napautusten lukumäärää yhdellä.
    newstats.clicks = newstats.clicks + 1;
    //Kasvatetaan sitruunoiden määrää kasvatusarvolla.
    newstats.balance = round(newstats.balance + newstats.increase,1);
    // Tallennetaan päivitetty stats-muuttuja.
    setStats(newstats); 
    }

  const handlePurchase = (id) => {
    const index = storeitems.findIndex(storeitem => storeitem.id == id); // etsii tunnistetta vastaavan tuotteen indeksin taulukosta.
    if (stats.balance >= storeitems[index].price) {
      let newstoreitems = [...storeitems]; // tekee kopion tilamuuttujasta
      let newstats = {...stats}; // tekee kopion tilamuuttujasta
      newstoreitems[index].qty++;
      newstats.balance = round(newstats.balance - newstoreitems[index].price,1);
      // Lasketaan uusi tuotteen hinta
      newstoreitems[index].price =
        Math.floor(newstoreitems[index].baseprice * Math.pow(1.15,newstoreitems[index].qty));
      
      // lasketaan uusi kasvatusarvo
      let increase = 1;
      let upgrades = 0;
      for (let i=0; i<storeitems.length; i++) {
        upgrades = upgrades + storeitems[i].qty;
        increase = increase + storeitems[i].multiplier*storeitems[i].qty;
      }
      newstats.increase = increase;
      newstats.upgrades = upgrades;
      // uusi osio loppuu
      
      setStoreitems(newstoreitems); // tallentaa tilamuuttujalle uuden arvon
      setStats(newstats); // sama kuin yllä
    }
  }

  return (
    <AppRouter stats={stats} 
    storeitems={storeitems}
    handleClick={handleClick} 
    handlePurchase={handlePurchase}/>
  )
}

export default App