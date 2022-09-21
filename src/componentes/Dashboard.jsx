import React, {useState} from 'react'
import './Dashboard.css'
import Play from './imagens/Play.svg'
import coracao from './imagens/Coracao.svg'
import coracaoverde from './imagens/Coracaoverde.svg'
import download from './imagens/download.svg'
import image2 from './imagens/image2.svg'
import pontos from './imagens/pontos.svg'


export default function Dashboard(){
    const [favorite,setFavorite]=useState(false)


    return(
        <div className='dashboard'>
            <div className="top">
                <img id='img' src = {image2} alt='' />
                <div>
                    <p>Playlist</p>
                    <h1>Daily Mix 1</h1>
                    <p>Red Hot Chili Peppers, Coldplay e mais</p>
                    <p>Spotify - 50 músicas <span>1h 7min</span> </p>
                </div>
            </div>
            <div className="mid">
                <img className='img1' src = {Play} alt=''/>
                <img className='img9' src={favorite?coracaoverde:coracao} alt=''
                        onClick={()=>setFavorite(!favorite)}
                    />
                <img className='img1' src = {download} alt=''/>
                <img className= 'img3' src={pontos} alt=''/>
            </div>

        </div>
    );
}
