import './App.css';
import Balance from './components/Balance';
import Booster from './components/Booster';
import Header from './components/Header';
import Lemon from './components/Lemon';


function App() {

  return (
    <>
      <div>
        <Header>lemon clicker</Header>
        <Balance total="157" />
        <Lemon />
        <Booster value = "3.2" />
      </div>  
    </>
  )
}

export default App