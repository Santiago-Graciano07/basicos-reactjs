import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6,EventosES7,MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import PotenciaNumero from './components/PotenciaNumero';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks  from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section>
          <Componente msg="Enviando mensaje ..." persona="Santiago" />
          <hr/>
          <Propiedades 
          cadena= "Cadena de texto" 
          number={777} 
          booleano={true} 
          arreglo= {["blanco","morado","azul","verde"]}
          arregloNumeros= {[1,2,3,4]}
          objeto= {{nombre:"santiago", apellido: "Graciano"}}
          funcion= {(num) => (num*num)}
          reactElement= {<i>Elemento de react</i>}
          reactComponent = {<Componente msg="Soy un componente pasado como Props"/>}
          />
          <hr />
          <Estado/>
          <hr />
          <RenderizadoCondicional/>
          <hr />
          <RenderizadoElementos/>
          <hr />
          <EventosES6/>
          <hr />
          <EventosES7/>
          <hr />
          <MasSobreEventos/>
          <hr />
          <ComunicacionComponentes/>
          <hr />
          <CicloVida/>
          <hr />
          <AjaxApis/>
          <hr />
          <ContadorHooks/>
          <hr />
          <PotenciaNumero/>
          <hr />
          <ScrollHooks/>
          <hr />
          <RelojHooks/>
          <hr />
          <AjaxHooks/>
          <hr />
          <HooksPersonalizados/>
          <hr />
          <Referencias/>
          <hr />
          <Formularios/>
        </section>
      </header>
    </div>
  );
}

export default App;
