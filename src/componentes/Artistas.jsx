import React from 'react'
import './Artistas.css'
import CardMusicas from './CardMusicas.jsx';

//requests
import createArtist from '../requests/CreateArtist.js'

export default function Artistas(){


    return(
        <div className='artistas'>
            <h1>Artistas</h1>
            <div className='cardCollection'>
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            <CardMusicas />
            </div>
        </div>    
    );
}
            
            
            

        
        
