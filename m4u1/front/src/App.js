import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import HomePage from './pages/HomePage.js';
import ContactoPage from './pages/ContactoPage.js';
import NosotrosPage from './pages/NosotrosPage.js';
import NovedadesPage from './pages/NovedadesPage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element= {<HomePage/>}/>
          <Route path='nosotros' element= {<NosotrosPage/>}/>
          <Route path='contacto' element= {<ContactoPage/>}/>
          <Route path='novedades' element= {<NovedadesPage/>}/>
        </Routes>
      
      </BrowserRouter>
     
      <Footer/>
    </div>
  );
}

export default App;
