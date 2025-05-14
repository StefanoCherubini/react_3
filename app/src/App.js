import './App.css';
import { useState } from 'react';
import AlunniRow from './AlunniRow';
import InserimentoAlunni from './InserimentoAlunni';

function App() {
  const [alunni, setAlunni] = useState([]);
  const [loading, setLoading] = useState(false);


  async function caricaAlunni(){
    setLoading(true);
    const response = await fetch("http://localhost:8080/alunni",{method: "GET"});
    const data = await response.json();
    setAlunni(data);
    setLoading(false);
  }

  return (
    <div className="App">
      {loading &&
      <div> caricamento in corso ...</div>
      }
      {!loading &&
        <div>
              {alunni.length === 0 ? 
                  (<button onClick={caricaAlunni}> carica alunni</button>
                  ):(
                    <table border="1">
                      {alunni.map(function(a){
                        return(
                         <AlunniRow alunno={a} caricaAlunni={caricaAlunni} />
                        )
                        })}
                    </table>
                  )}
                <InserimentoAlunni caricaAlunni={caricaAlunni} />
        </div>
      }
          
    </div>
            
  );
}

export default App;
