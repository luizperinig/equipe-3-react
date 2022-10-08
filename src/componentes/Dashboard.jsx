import React, {useState} from 'react'
import './Dashboard.css'

// requests
import createUser from '../requests/createUser';

//icons
import play from './imagens/Play.svg'
import heart from './imagens/emptyHeart.svg'
import greenHeart from './imagens/filledHeart.svg'
import download from './imagens/download.svg'
import playlistImage from './imagens/playlistImage.svg'
import dots from './imagens/dots.svg'
import clock from './imagens/clock.svg'

import Row from './Row.jsx'


export default function Dashboard(){
    const[favorite,setFavorite] = useState(false)
 
    const[musicArray, setMusicArray] = useState([
        {id: "1", name: "The Zephyr Song", band: "Red Hot Chili Pepers", album: "By The Way"},
        {id: "2", name: "Talk", band: "Coldplay", album: "X&Y"},
        {id: "3", name: "Cidade Negra", band: "Firmamento", album: "Cidade Negra Acústico MTV"}
    ]);

    function create(){
        createUser()
            .then((res) => console.log('Certo'))
            .catch((err) => {
                console.log(err);
            });
    }

    function removeRow(id){
        let newArray = musicArray.filter(item  => item.id !== id);

        setMusicArray(newArray);
    }

    return(
        <div className='dashboard'>
            <div className="top">
                <img id='img' src = {playlistImage} alt='' />
                <div>
                    <p>Playlist</p>
                    <h1>Daily Mix 1</h1>
                    <p>Red Hot Chili Peppers, Coldplay e mais</p>
                    <p>Spotify - 50 músicas <span>1h 7min</span> </p>
                </div>
            </div>
            <div className="mid">
                <img onClick={create} className='img1' src = {play} alt=''/>
                <img className='img9' src={favorite?greenHeart:heart} alt=''
                        onClick={()=>setFavorite(!favorite)}
                    />
                <img className='img1' src = {download} alt=''/>
                <img className= 'img3' src={dots} alt=''/>
            </div>
            <div className="bottom">
                <div>
                    <p>#TÍTULO</p>
                    <p id = 'p1'>ÁLBUM</p>
                    <img className='clock' src={clock} alt=''/>
                </div>    
            </div> 
            <hr className='line'></hr>
            <table className='user'>
                   <tbody>
                        {musicArray.map(item => (
                            <Row musicID={item.id} musicName={item.name} musicBand={item.band} 
                            musicAlbum={item.album}
                            deleteRow={() => removeRow(item.id)}/>
                        ))}
                    </tbody>
            </table> 
        </div>
    );
}
