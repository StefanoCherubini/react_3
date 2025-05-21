import { useState } from 'react';

export default function InserimentoAlunni(props) {
    const [inConferma, setInConferma] = useState(false);
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");

    const caricaAlunni = props.caricaAlunni;

    async function aggiungiAlunno() {
        await fetch(`http://localhost:8080/alunni`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nome, cognome: cognome })
        });
        setInConferma(false);
        setNome("");
        setCognome("");
        caricaAlunni();
    }

    return (
        <>
            {!inConferma ? (
                <button onClick={() => setInConferma(true)}>Aggiungi alunno</button>
            ) : (
                <form onSubmit={aggiungiAlunno}>
                    <h2>Inserisci il nome</h2>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <h2>Inserisci il cognome</h2>
                    <input
                        type="text"
                        value={cognome}
                        onChange={(e) => setCognome(e.target.value)}
                        required
                    />
                    <button type="submit">Sì</button>
                    <button type="button" onClick={() => setInConferma(false)}>Annulla</button>
                </form>
            )}
        </>
    );
}
