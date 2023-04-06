import React, {Component} from "react";
import data from  "../helpers/data.json";


function ElementoLista (props) {
    return (
        <li>
            <a href={props.elementos.url}>{props.elementos.name}</a>
        </li>
    )

}

class RenderizadoElementos extends Component {

    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera","Verano","Otoño","Invierno"]
        }
    }

    render(){
        return (
            <div>
                <h1>Renderizado Elementos</h1>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((element,index) => (
                            <li key={index}>{element}</li>)
                        )
                    }
                </ol>
                <h3>Lista rrameworks de frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((element) => (
                           <ElementoLista key= {element.id} elementos={element}/> 
                        ))
                    }
                </ul>
            </div>
        )
    }

}

export default RenderizadoElementos;