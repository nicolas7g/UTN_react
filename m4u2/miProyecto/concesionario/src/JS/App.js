import '../CSS/App.css';
import React from 'react';
import Nav from './Nav.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js';
//import Compra from './Compra.js';
//import Propietarios from './Propietarios.js';
//import Mundo from './Mundo.js';
import Modelos from './Modelos.js';
import Contacto from './Contacto.js';
import Footer from './Footer.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Nav />}
        <Routes>
          <Route path='modelos' element={<Modelos />} />
          {/*<Route path='compra' element={<Compra />} />*/}
          {/*<Route path='propietarios' element={<Propietarios />} />*/}
          {/*<Route path='mundo' element={<Mundo />} />*/}
          <Route path='/' element={<Home />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>
        
      </BrowserRouter>


      {<Footer />}
      
    </div>
  );
}

export default App;
