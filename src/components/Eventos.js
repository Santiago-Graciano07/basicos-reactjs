import React,{Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        console.log(this);
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e){
        this.setState({
            contador: this.state.contador - 1
        })
    }


    render(){
        return (
            <div>
                <h2>Eventos en componente de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export class EventosES7 extends Component{
    state = {
        contador: 0
    }

    sumar = (e) => (
        this.setState({
            contador: this.state.contador + 1
        })
    )

    restar = (e) => (
        this.setState({
            contador: this.state.contador - 1
        })
    )

    render(){
        return (
            <div>
                <h2>Eventos en componente de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

/* function Boton (props) {
    return (
        <button onClick={props.myOnClick}>Boton desde componente</button>
    )
} */

const Boton = (props) => (
    <button onClick={props.myOnClick}>Boton desde componente</button>
)



export class MasSobreEventos extends Component {
    handleClick = (e) => (
        console.log(e)
    )
    handleClickParametros = (e,mensaje) => {
        console.log(e)
        console.log(mensaje)
    }


    render(){
        return(
            <div>
                <h3>Mas sobre eventos</h3>
                <button onClick={this.handleClick}>Saludar</button>
                <button onClick={(e) => this.handleClickParametros(e,"hola desde boton")}>Saludar 1</button>

                {/* Eventos personalizados
                    tipico error */}
                {/* <Boton  
                onClick ={(e) =>
                    this.handleClickParametros(e,"mensaje desde evento")} /> */}

                <Boton  
                    myOnClick ={(e) =>
                        this.handleClickParametros(e,"mensaje desde evento")} 
                />
            </div>
        )
    }
}