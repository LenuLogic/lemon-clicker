import './App.css';
import Balance from './components/Balance';
import Lemon from './components/Lemon';


function App() {

  return (
    <>
      <div>
        <Balance total="157" />
        <Lemon />
      </div>  
    </>
  )
}

export default App