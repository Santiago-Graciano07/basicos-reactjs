import React, {Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props)
    }

     //fase de desmontaje
    /**
     * Se ejecuta cuando el componente ya no exista, en otras palabras tendria 
     * que eliminarlo
     */
     componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }

    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}

export default class CicloVida extends Component {

    /**
     * Si tengo un constructor, el estado tiene que estar declarado
     * dentro de este
     * @param {*} props 
     */
    constructor(props){
        super(props)
        console.log(0, "El componente se inicializa, aun no esta en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false
        };
        this.temporizador = null
    }

    componentDidMount(){
        console.log(1,"El componente ya se encuentra en el DOM");
    }

    //fase de actualización
    /**
     * componentDidUpdate me permite pasar las propiedades previas del estado previo,
     * por si necesito trabajar con esos valores antes de actualzar el nuevo estado, por lo
     * tanto puede recibir dos parametros
     * prevProps: prosp previas
     * prevState: estado previo
     */
    componentDidUpdate(prevProps,prevState){
        console.log(2,"El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }


    tictic = () => {
       this.temporizador = setInterval(() => {
           this.setState({
                hora: new Date().toLocaleTimeString()
           })
       }, 1000);
    }

    iniciar =() => {
        this.tictic()
        this.setState({
            visible:true
        })
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible:false
        })
    }

    render(){
        console.log(4,"El componente se dibuja (o redubuja por algun cambio en el dom)");
        return(
            <>
                <h2>Ciclo vida de los componentes</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}