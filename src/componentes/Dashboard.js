import React, {useState} from 'react'
import './Dashboard.css'
import image2 from './imagens/image2.svg'
import Ellipse1 from './imagens/Ellipse1.svg'
import Polygon1 from './imagens/Polygon1.svg'
import Ponto from './imagens/Ponto.svg'
import circulo from './imagens/Circulo.svg'
import retangulo from './imagens/Rectangle.svg'
import seta from './imagens/Arrow.svg'
import coracao from './imagens/Coracao.svg'
import coracaoverde from './imagens/Coracaoverde.svg'



export default function Dashboard(){
    const [favorite,setFavorite]=useState(false)


    return(
        <div className='dashboard'>
            <img className='img' src = {image2} />
            <p className='p'>Playlist</p>
            <p className='p1'>Daily Mix 1</p>
            <p className='p2'>Red Hot Chili Peppers, Coldplay e mais</p>
            <p className='p3'>Spotify - 50 músicas</p>
            <p className='p4'>1h 7min</p>
            <img className='img1' src = {Ellipse1} />
            <img className='img2' src = {Polygon1} />
            <p className='p5'>#TÍTULO</p>
            <p className='p6'>ÁLBUM</p>
            <div className='borda'></div>
            <img className='img3' src = {Ponto} />
            <img className='img4' src = {Ponto} />
            <img className='img5' src = {Ponto} />
            <img className='img6' src = {circulo} />
            <img className='img7' src = {retangulo} />
            <img className='img8' src = {seta} />
            <img className='img9' src={favorite?coracaoverde:coracao}
                    onClick={()=>setFavorite(!favorite)}
                />
            
        </div>
    );
}