import React, {useState} from "react";

export default function PotenciaNumero(props){
    const NUMERO_INICIAL = 2;

    const [numero, setNumero] = useState(NUMERO_INICIAL);
    const [contador, setContador] = useState(0);

    const aumentarContador = () => (
        setContador(contador + 1)
    )

    const multiplicar = () => {
        setNumero(numero * 2)
        aumentarContador()
    }

    return(
       <>
       <h3>El número {NUMERO_INICIAL} multiplicado {contador}
       {contador === 1 ? " vez por 2 " : " veces por 2 es"} </h3>
       <nav>
           <button onClick={multiplicar}>Multiplicar</button>
       </nav>
       <h2>{numero}</h2>
    
       </> 
    )
}