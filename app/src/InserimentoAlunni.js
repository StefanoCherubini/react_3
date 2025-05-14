import { useState } from 'react';

export default function InserimentoAlunni(props){
    const[inConferma, setinConferma] = useState(false);
    const[nome, setNome] = useState("");
    const[cognome, setCognome] = useState("");

    const caricaAlunni = props.caricaAlunni;


    async function aggiungiAlunno(){
        await fetch(`http://localhost:8080/alunni`,{
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({nome: nome,cognome: cognome})
        })
        caricaAlunni();
    }
    return(
        <>
            {!inConferma ? 
                (<button onClick={() => {setinConferma(true)}}>Aggiungi alunno </button>
                ):(
                <>
                 <form>
                    <h2>Inserisci il nome</h2>
                    <input type="text" onChange={(e) => {setNome(e.target.value)}}></input>
                    <h2>Inserisci il cognome</h2>
                    <input type="text" onChange={(e) => {setCognome(e.target.value)}}></input>
                    <button onClick = {aggiungiAlunno}>Si</button> 
                    <button onClick={() => {setinConferma(false)}}>Annulla</button> 
                 </form>
                </>   
            )}
        </>
    );
}