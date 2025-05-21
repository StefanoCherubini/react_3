import { useState } from 'react';

export default function AlunniRow(props){
    const a = props.alunno;
    const caricaAlunni = props.caricaAlunni;
    const[inConferma, setinConferma] = useState(false);
    const[nome, setNome] = useState("");
    const[modifica, setModifica] = useState(false);
    const[cognome, setCognome] = useState("");

    async function cancellaAlunno()
    {
        await fetch(`http://localhost:8080/alunni/${a.id}`,{method: 'DELETE'});
        caricaAlunni();
    }

    async function editaAlunno()
    {
        await fetch(`http://localhost:8080/alunni/${a.id}`,
        {method: 'PUT',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify({nome: nome,cognome: cognome})
    })
        caricaAlunni();
    }

    return(
        <tr>

            {modifica ? (
                  <>
                    <td>{a.id}</td>
                    <td><input type="text" onChange={(e) => {setNome(e.target.value)}}></input></td>
                    <td><input  type="text" onChange={(e) => {setCognome(e.target.value)}}></input></td>
                    <td>
                    sei sicuro?
                    <button onClick={editaAlunno}>Si</button> 
                    <button onClick={() => {setModifica(false)}}>No</button> 
                    </td>
                  </>      
                        
            ):(
                <>
                    <td>{a.id}</td>
                    <td>{a.nome}</td>
                    <td>{a.cognome}</td>
                    <td>
                    <button onClick={() => {setModifica(true)}}>Edit</button>
                    {!inConferma ? 
                        (<button onClick={() => {setinConferma(true)}}>Delete</button>
                         ):(
                            <>sei sicuro?
                             <button onClick={cancellaAlunno}>Si</button> 
                             <button onClick={() => {setinConferma(false)}}>No</button> 
                            </>   
                    )}
                    </td>
                 </>      
            )}

           
            
        </tr>
    );
}