import { useState } from 'react';

export default function AlunniRow(props) {
    const a = props.alunno;
    const caricaAlunni = props.caricaAlunni;

    const [inConferma, setInConferma] = useState(false);
    const [modifica, setModifica] = useState(false);
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");

    async function cancellaAlunno() {
        await fetch(`http://localhost:8080/alunni/${a.id}`, { method: 'DELETE' });
        caricaAlunni();
    }

    async function editaAlunno() {
        await fetch(`http://localhost:8080/alunni/${a.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nome, cognome: cognome })
        });
        setModifica(false);
        caricaAlunni();
    }

    return (
        <tr>
            {modifica ? (
                <>
                    <td>{a.id}</td>
                    <td>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={cognome}
                            onChange={(e) => setCognome(e.target.value)}
                        />
                    </td>
                    <td>
                        Sei sicuro?
                        <button onClick={editaAlunno}>Sì</button>
                        <button onClick={() => setModifica(false)}>No</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{a.id}</td>
                    <td>{a.nome}</td>
                    <td>{a.cognome}</td>
                    <td>
                        <button onClick={() => {
                            setNome(a.nome);
                            setCognome(a.cognome);
                            setModifica(true);
                        }}>Edit</button>
                        {!inConferma ? (
                            <button onClick={() => setInConferma(true)}>Delete</button>
                        ) : (
                            <>
                                Sei sicuro?
                                <button onClick={cancellaAlunno}>Sì</button>
                                <button onClick={() => setInConferma(false)}>No</button>
                            </>
                        )}
                    </td>
                </>
            )}
        </tr>
    );
}
