import React from 'react'
import Navbar from './Navbar.jsx'
import './Artistas.css'
import CardMusicas from './CardMusicas.jsx';

export default function Artistas(){

    return(
        <div className='artistas'>
            <h1>Artistas</h1>
            <div className='cardCollection'>
            <CardMusicas/>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            
            

            </div>
            
            

        </div>
        
    );
}