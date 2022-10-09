import React,{useState, useEffect} from "react";
import './CardMusicas.jsx'
import axios from 'axios'


export default function CardMusicas(){

    const [Artistas, setArtistas] = useState([])

    useEffect(()=>{
        axios.get('endereço da api')
            .then(res=>{
                const dadosArtistas=res.data
                setArtistas(dadosArtistas)
            })
    })


    return(
        <div className="card">
            <div></div>
            <p>Engenheiros</p>
            <p className="paragrafo">Artista</p>
        </div>
    );
}