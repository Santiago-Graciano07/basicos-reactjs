import React, {useState,useEffect} from "react";

export default function ScrollHooks () {
    const [scrollY, setScrollY] = useState(0);
    /**
     * Se pueden tener tantos useEffect como se quieran
     */
    useEffect(() => {
        console.log("moviendo el scroll");

        const detectarScroll = () => {
            setScrollY(window.pageYOffset)
        }

        window.addEventListener("scroll", detectarScroll)

        //desuscribe o cancela el evento
        return () => {
            window.removeEventListener("scroll", detectarScroll)
            console.log("fase de desmontaje");
        }
        
    },[scrollY])

    useEffect(() => {
        console.log("fase de montaje");
    },[])
    
    useEffect(() => {
        console.log("fase de actualizacion");
    })

    useEffect(() => {
        console.log("fase de desmontaje");
    })


    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px </p>
        </>
    )
}