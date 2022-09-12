import React from 'react'
import './Dashboard.css'
import image2 from './imagens/image2.png'
import elipse1 from './imagens/Ellipse1.svg'
import coracao2 from './imagens/coracao2.svg'
import polygon from './imagens/Polygon1.svg'

export default function Dashboard(){
    return(
        <div className='dashboard'>
            <img className='img' src={image2}/>
            <div id='d1'>Playlist</div>   
            <div id='d2'>Daily Mix</div>
            <div id='d3'>Red Hot Chili Peppers, Coldplay e mais</div>
            <div id='d4'>Spotify - 50 músicas</div> 
            <div id='d5'>1h 7min</div> 
            <div id='d6'>
                <img classname='img2' src={elipse1}/>
                <img className='img3' src={polygon}/>
                <img className='img4' src={coracao2}/>
            </div>
            
        </div>
    );
}