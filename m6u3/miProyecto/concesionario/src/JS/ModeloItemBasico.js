import React from "react";
import '../CSS/modeloItemBasico.css';

import { NavLink } from "react-router-dom"


function ModeloItemBasico(props) {

    const item = props.item;


    return (
        <div class="modeloItem__container">
            <div class="auto">
                <div className="titulo">
                    <h1>{item.nombre}</h1>
                    <div dangerouslySetInnerHTML={{ __html: item.imagen_ver }}></div>
                </div>
                <div className="precio">
                    <h1>USD {item.precio}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: item.imagen }}></div>
            </div>
            <NavLink className="navlink" to="/modelos/descubra-mas" state= {item}>DESCUBRA MÁS</NavLink>


        </div>


    )
}

export default ModeloItemBasico