import { useState } from 'react';

export default function AlunniRow(props){
    const a = props.alunno;
    const caricaAlunni = props.caricaAlunni;
    const[inConferma, setinConferma] = useState(false);
    async function cancellaAlunno(b)
    {
        await fetch(`http://localhost:8080/alunni/${a.id}`,{method: 'DELETE'});
        caricaAlunni();
    }
    return(
        <tr>
            <td>{a.id}</td>
            <td>{a.nome}</td>
            <td>{a.cognome}</td>
            <td>
                {!inConferma ? 
                (<button onClick={() => {setinConferma(true)}}>Delete</button>
                ):(
                 <>sei sicuro?
                    <button onClick={cancellaAlunno}>Si</button> 
                    <button onClick={() => {setinConferma(false)}}>No</button> 
                </>   
                )}
            </td>
        </tr>
    );
}