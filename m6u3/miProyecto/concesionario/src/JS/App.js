import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.js';
import { Routes, Route } from "react-router-dom";
import Home from './Home.js';

import Mundo from './Mundo.js';
import Modelos from './Modelos.js';
import Contacto from './Contacto.js';
import Footer from './Footer.js';
import ModeloItemExt from "./ModeloItemExt";


function App() {


  return (

 
    <div className='App'>
        <Nav />
        <Routes>
          <Route path='modelos' element={<Modelos />} />
          <Route path='compra' element={<Home />} />
          <Route path='propietarios' element={<Home />} />
          <Route path='mundo' element={<Mundo />} />
          <Route path='/' element={<Home />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='/modelos/descubra-mas' element={<ModeloItemExt/>} />
        </Routes>

        {<Footer />}
      
    </div>

  );
}

export default App;
