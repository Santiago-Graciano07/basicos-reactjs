//import React, {Component} from "react";

/**
 * Componente basado en clases
 * se necesita importar React, {Component} para luego extender
 * por default debe tener su metodo render
 * @param {*} props 
 * @returns 
 */
/* class Componente extends Component{
    render(){
        return <h2>{this.props.msg}</h2>
    }
} */


/**
 * Comoponente funciona
 * No se necesita importar React, {Component}
 * @param {*} props 
 * @returns 
 */
/* function Componente(props) {
    return <h1>{this.props.msg}</h1>
} */


//función no declarada (función expresada)
const Componente = (props) => <h1>{props.msg}{props.persona}</h1>

export default Componente