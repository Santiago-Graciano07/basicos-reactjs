import React, {Component} from "react";


function EstadoHijo(props){
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

class Estado extends Component {

    //si necesito que tenga un estado, se puede definir en el constructor
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }

        /* setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000); */
    }
    
    render(){
        return (
            <div>
                <h1>El State</h1>
                <p>contador: {this.state.contador}</p>
                <EstadoHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }

}

export default Estado;