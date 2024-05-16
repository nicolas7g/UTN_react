import React from "react";
import '../CSS/modeloItemExt.css';
import { useLocation } from "react-router-dom"

function ModeloItemExt() {


    const location = useLocation();
    const item = location.state || {};

    console.log(item);

    return (
        <main className="mod__contenedor_ext">

            <div className="auto_ext">
                <div className="titulo_ext">
                    <h1>{item.nombre}</h1>
                    <div dangerouslySetInnerHTML={{ __html: item.imagen_ver }}></div>
                </div>
                <div className="precio_ext">
                    <h4>USD {item.precio}</h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: item.imagen }}></div>
                <p className="motor">Motor: {item.motor} </p>
                <p className="desc">{item.desc} </p>

            </div>


        </main>

    )
}

export default ModeloItemExt