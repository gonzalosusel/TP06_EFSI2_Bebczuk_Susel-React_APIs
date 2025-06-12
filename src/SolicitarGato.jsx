import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./SolicitarGato.css";

export default function SolicitarGato(){
    const [gatoUrl, setGatoUrl] = useState("");
    const generarImagen = async() => setGatoUrl((await axios("https://api.thecatapi.com/v1/images/search"))["data"][0]["url"]);

    useEffect(() => {generarImagen()}, []);
    
    return (<>
        {gatoUrl && <img className="imgGato" src={gatoUrl}/>}
        <br/><button className="botonGato" onClick={generarImagen}>Generar imagen</button>
    </>);
}