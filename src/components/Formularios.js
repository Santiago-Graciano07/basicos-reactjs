import React, { useState } from 'react';

/**
 * Para los formularios se puede manerjar una variable de estado por cada input,
 * pero no es lo mas optimo pensando en formularios que tengan muchas preguntas,
 * para esto se puede manejar una segunda opción que es con una unica variable de
 * estado: -> ver segundo codigo
 */

/* export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("el formulario se ha enviado")
    }

    return (
        <>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <p>Elije tu sabor JS favorito</p>
            <label htmlFor="vanilla">Vanilla</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vanilla" 
                value="vanilla" 
                onChange={(e) => setSabor(e.target.value)}
                defaultChecked
            />
            <label htmlFor="react">React</label>
            <input 
                type="radio" 
                name="sabor" 
                id="react" 
                value="react" 
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor="angular">Angular</label>
            <input 
                type="radio" 
                name="sabor" 
                id="angular" 
                value="angular" 
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor="vue">Vue</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vue" 
                value="vue" 
                onChange={(e) => setSabor(e.target.value)}
            />
            <label htmlFor="svelte">Svelte</label>
            <input 
                type="radio" 
                name="sabor" 
                id="svelte" 
                value="svelte" 
                onChange={(e) => setSabor(e.target.value)}
            />

            <p>Elige tu lenguaje de programación favorito</p>
            <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                <option value="">---</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
            </select>
            <br />

            <label htmlFor="terminos">Acepto terminos y condiciones</label>
            <input 
                type="checkbox" 
                name="terminos" 
                onChange={(e) => setTerminos(e.target.checked)}
            />
            <br />

            <input type="submit" value="Enviar" />


        </form>
        </>
    )
} */

export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("el formulario se ha enviado")
    }

    return (
        <>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={form.nombre}
                onChange={handleChange}
            />

            <p>Elije tu sabor JS favorito</p>
            <label htmlFor="vanilla">Vanilla</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vanilla" 
                value="vanilla" 
                onChange={handleChange}
                defaultChecked
            />
            <label htmlFor="react">React</label>
            <input 
                type="radio" 
                name="sabor" 
                id="react" 
                value="react" 
                onChange={handleChange}
            />
            <label htmlFor="angular">Angular</label>
            <input 
                type="radio" 
                name="sabor" 
                id="angular" 
                value="angular" 
                onChange={handleChange}
            />
            <label htmlFor="vue">Vue</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vue" 
                value="vue" 
                onChange={handleChange}
            />
            <label htmlFor="svelte">Svelte</label>
            <input 
                type="radio" 
                name="sabor" 
                id="svelte" 
                value="svelte" 
                onChange={handleChange}
            />

            <p>Elige tu lenguaje de programación favorito</p>
            <select name="lenguaje" onChange={(handleChange)} defaultValue="">
                <option value="">---</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
            </select>
            <br />

            <label htmlFor="terminos">Acepto terminos y condiciones</label>
            <input 
                type="checkbox" 
                name="terminos" 
                onChange={handleChecked}
            />
            <br />

            <input type="submit" value="Enviar" />


        </form>
        </>
    )
}