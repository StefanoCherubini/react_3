 export default function Contatore(props){

    const contatore = props.contatore;
    const ac = props.ac;
    
    return (
        <div>
            <button onClick={ac}>Cliccami</button>
            <h4>{contatore}</h4>
        </div>
    );
    
}