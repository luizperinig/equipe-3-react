import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import Play from './imagens/Play.svg'
import coracao from './imagens/coracaoNormal.svg'
import coracaoverde from './imagens/coracao_preenchido.svg'
import download from './imagens/download.svg'
import image2 from './imagens/image2.svg'
import pontos from './imagens/pontos.svg'
import relogio from './imagens/clock.svg'
import lixeira from './imagens/delete.svg'




export default function Dashboard({musicas}){
    const [favorite,setFavorite]=useState(false)
    const [like,setLike]=useState(false) 
    
 

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
            <div className="bottom">
                <div>
                    <p>#TÍTULO</p>
                    <p>ÁLBUM</p>
                    <img className='relogio' src={relogio} alt=''/>
                </div>    
            </div> 
            <hr className='line'></hr>
            <table className='user'>
                   <tbody>
                        {musicas.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td className='songName'>{user.name}<br/>{user.banda}</td>
                            <td className='albumName'>{user.album}</td>
                            <td>
                                <img className='img10' src={like?coracaoverde:coracao} alt=''
                                onClick={()=>setLike(!like)}/>
                                <img className='img11' src={lixeira} alt=''/>
                            </td>
                        </tr>
                        ))}
                    </tbody>
            </table> 
            

        </div>
    );
}
