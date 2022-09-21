import React,{useState} from 'react'
import Navbar from './componentes/Navbar.jsx'
import Dashboard from './componentes/Dashboard.jsx'
import "./App.css"


export default function App(){
  return(
    <div className='Container'>
      <Navbar />
      <Dashboard />
    </div>
  );
}