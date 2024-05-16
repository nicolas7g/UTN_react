import React from 'react'
import '../CSS/mundo.css'

function Mundo() {
    return (
        <main className="mundo__contenedor">
            <div className="cards">
                <div className="card">
                    <h1> BRAND ALFA ROMEO</h1>
                    <ul>
                        <li>Novedades</li>
                        <li>Historia</li>
                        <li>Alfa Romeo Museo</li>

                    </ul>

                </div>
                <div className="card">
                    <h1> SPONSORSHIP / F1</h1>
                    <ul>
                        <li>Alfa Romeo F1 Team</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Mundo