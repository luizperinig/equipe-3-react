import React, {useState} from 'react'
import './Dashboard.css'
import image2 from './imagens/image2.png'
import coracao2 from './imagens/coracao2.svg'
import polygon from './imagens/Polygon1.svg'
import coracaoVerde from './imagens/coracaoVerde.svg'

export default function Dashboard(){
    const [favorite,setFavorite]=useState(false)


    return(
        <div className='dashboard'>
            <img className='img' src={image2}/>
            <div id='d1'>Playlist</div>   
            <div id='d2'>Daily Mix</div>
            <div id='d3'>Red Hot Chili Peppers, Coldplay e mais</div>
            <div id='d4'>Spotify - 50 músicas</div> 
            <div id='d5'>1h 7min</div> 
            <div  id='d6'>
                <img className='img3' src={polygon}/>
                <img className='img4' src={favorite?coracaoVerde:coracao2}
                    onClick={()=>setFavorite(!favorite)}
                />
                
            </div>
           <div id='d7'></div>
           <div id='d8'></div> 
           <div id='d9'></div>
           <div id='d10'></div>
           <div id='d11'></div> 
           <div id='d12'></div>
            <div>
                <p className='p1'>#TÍTULO</p>
                <p className='p2'>ÁLBUM</p>
                
            </div>
            <div id='d13'></div>
        </div>
    );
}