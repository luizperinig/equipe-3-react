import React,{useState, useEffect} from "react";
import './CardMusicas.css'
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
            <div >
                <img className="img" src="https://i.scdn.co/image/ab6761610000f178027d7f808590b06dd08f7e0f" alt=''/>
            </div>
            <p>Royal Blood</p>
            <p className="paragrafo">Artista</p>
        </div>
    );
}