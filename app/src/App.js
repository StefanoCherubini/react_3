import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Contatore from './Contatore';


function App() {
  const [contatore, setContatore]= useState(0);

  const ac = function(){
    setContatore(contatore + 1);
  } 
  return (
    <div className="App">
      <header className="App-header">
        <Contatore contatore={contatore} ac={ac}/>
        <Contatore contatore={contatore} ac={ac}/>
      </header>
    </div>
  );
}

export default App;
