import React,{useState} from 'react'
import Navbar from './componentes/Navbar.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import "./App.css"



export default function App(){
    const data = [
      {id: "1", name: "The Zephyr Song", banda: "Red Hot Chili Pepers", album: "By The Way"},
      {id: "2", name: "Talk", banda: "Coldplay", album: "X&Y"},
      {id: "3", name: "Cidade Negra", banda: "Firmamento", album: "Cidade Negra Acústico MTV"},
  ];
  
  return(
    <div className='Container'>
      <Navbar />
      <Dashboard musicas = {data}/>
    </div>
  );
}