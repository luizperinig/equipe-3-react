import React,{useState} from 'react'
import Navbar from './componentes/Navbar.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import "./App.css"



export default function App(){
    const data = [
      {id: "1", name: "Musica 1", banda: "banda 1", album: "album 1"},
      {id: "2", name: "Musica 2", banda: "banda 2", album: "album 2"},
      {id: "3", name: "Musica 3", banda: "banda 3", album: "album 3"},
  ];
  
  return(
    <div className='Container'>
      <Navbar />
      <Dashboard musicas = {data}/>
    </div>
  );
}