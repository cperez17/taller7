import Head from "next/head"
import datos from "../components/tabla"
import { useEffect } from "react";




const Visualizador = () =>{

    

    return(
        <div className="container">
            <Head>
                <title>INFO104 Cuenta Regresiva</title>
            </Head>
            <main>
                
                <h1 className="title">Proximas Actividades</h1>
                <div className="horaActual">HH:MM:SS</div>
                
                <div className="codigoProximo">BAIN083</div>
                <div className="tipoProximo">PS2</div>
                
                <div className="fechaProxima">Tiempo restante: 1 dia, 18:30:56</div>
                <div className="frase">Queda Poquito</div>
                
                <div className="codigo">Codigo</div>
                <div className="asignatura">Asignatura</div>
                <div className="tipo">Actividad</div>
                <div className="fecha">Fecha</div>

                
                <div className="codigoVariante">
                    <table className="datos">
                        <tr>
                            <td>Bain 083</td>
                            <td>Calculo en Varias Variable</td>
                            <td>Prueba</td>
                            <td>15 / 11 / 22, 17:30 hrs</td>
                        </tr>
                        <tr>
                            <td>Bain 087</td>
                            <td>Metodos numericos</td>
                            <td>Prueba</td>
                            <td>30 / 11 / 22, 17:30 hrs</td>
                        </tr>
                        
                        
                    </table>
                    
                </div>
      
            </main>
            
            
            
            
            
    </div>
    );
};
export default Visualizador;

