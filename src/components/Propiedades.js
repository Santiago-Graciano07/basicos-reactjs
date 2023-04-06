import React from "react";
import PropTypes from "prop-types";

const Propiedades = function(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.number}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"} </li>
                <li>{props.arregloNumeros}</li>
                <li>{props.arregloNumeros.map((element) => props.funcion(element))} </li>
                <li>{props.reactElement} </li>
                <li>{props.reactComponent} </li>
            </ul>
            {/* <h4>Arreglo</h4>
            <ol>
                {props.arreglo.map((number) =>
                    <li>{number}</li>
                )}    
            </ol> */}
        </div>
    )
}


Propiedades.defaultProps = {
    porDefecto: "Desta las props"
}

Propiedades.propTypes = {
    number: PropTypes.number,  // la propiedad solo va a recibir numeros
}


export default Propiedades;

