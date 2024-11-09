import './App.css';
import { useState } from 'react';
import Balance from './components/Balance';
import Booster from './components/Booster';
import Header from './components/Header';
import Lemon from './components/Lemon';


function App() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);  // kasvattaa napautusten määrää yhdellä
  }

  return (
    <>
      <div>
        <Header>lemon clicker</Header>
        <Balance total={clicks} />
        <Lemon onClick={handleClick} />
        <Booster value = "3.2" />
      </div>  
    </>
  )
}

export default App