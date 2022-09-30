import  React, {useState} from 'react'

// icons
import greenHeart from './imagens/filledHeart.svg'
import heart from './imagens/emptyHeart.svg'
import trash from './imagens/delete.svg'

import './Row.css'

export default function Row(props){
    const [like, setLike] = useState(false);
    
    return(
        <tr key={props.musicID}>
            <td>{props.musicID}</td>
            <td className='songName'>{props.musicName}<br/>{props.musicBand}</td>
            <td className='albumName'>{props.musicAlbum}</td>
            <td>
                <img className='cursor_pointer' src={like?greenHeart:heart} alt=''
                onClick={()=>setLike(!like)}/>
                <img className='cursor_pointer' src={trash} alt=''
                onClick={() => props.deleteRow()}/>
            </td>
        </tr>
    )
}
