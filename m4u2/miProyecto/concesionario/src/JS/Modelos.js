import React from 'react';
import '../CSS/modelos.css'
import StelvioTI from '../IMAGES/AR_Menu_StelvioTi.png'
import GiuliaTI from '../IMAGES/AR_Menu_Giulia_Ti.png'
import StelvioQV from '../IMAGES/AR-Menu-Stelvio_QV.png'
import GiuliaQV from '../IMAGES/AR-Menu-Giulia_QV.png'
import QV from '../IMAGES/icon_QV.png'

function Modelos() {
       return (
              <main className="mod__contenedor">

                     <div className="autos">
                            <div class="auto">
                                   <h1> STELVIO</h1>
                                   <img src={StelvioTI} alt="stelvio" />
                                   <a href="">DESCUBRA MÁS</a>
                            </div>
                            <div className="auto">
                                   <h1> GIULIA</h1>
                                   <img src={GiuliaTI} alt="stelvio" />
                                   <a href="">DESCUBRA MÁS</a>
                            </div>
                            <div className="auto">
                                   <div className="titulo">
                                          <h1> STELVIO QV </h1> <img src={QV} alt="" />
                                   </div>
                                   <img src={StelvioQV} alt="stelvio" />
                                   <a href="">DESCUBRA MÁS</a>
                            </div>
                            <div className="auto">
                                   <div className="titulo">
                                          <h1> GIULIA QV </h1> <img src={QV} alt="" />
                                   </div>
                                   <img src={GiuliaQV} alt="stelvio" />
                                   <a href="">DESCUBRA MÁS</a>
                            </div>
                     </div>
              </main>
       );
}

export default Modelos;