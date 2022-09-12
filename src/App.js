import React from 'react'
import Navbar from './componentes/Navbar.js'
import Dashboard from './componentes/Dashboard.js'

import "./App.css"


export default function App(){
  return(
    <div className='Container'>
      <Navbar />
      <Dashboard />
    </div>
  );
}