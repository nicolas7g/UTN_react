import { useEffect, useState } from "react";
import axios from 'axios';
import '../CSS/modelos.css'
import ModeloItemBasico from './ModeloItemBasico';



function Modelos() {

       const [loading, setLoading] = useState(false);
       const [modelos, setModelos] = useState([]);


       useEffect(() => {
              const cargarModelos = async () => {
                     setLoading(true);
                     const response = await axios.get('http://localhost:3000/api/modelos');
                     setModelos(response.data);
                     setLoading(false);
              };

              cargarModelos();

       }, []);

       return (
              <main className="mod__contenedor">
                     
                     <div className="autos">
                            {
                                   loading ? (<p>Cargando...</p>) : (
                                          modelos.map(item => <ModeloItemBasico key={item.id} item={item}/>
                                        )

                                   )

                            }
                     </div>
              </main>
       );
}

export default Modelos;