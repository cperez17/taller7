import Head from "next/head"
import {RelojAct} from "../components/relojAct"

var hora = RelojAct();
var hora2 = setTimeout("RelojAct()",1000);



export default function index(){
    
    

    return(
        <div className="container">
            <Head>
                <title>INFO104 Cuenta Regresiva</title>
            </Head>
            <div className="horaAct">{hora2}</div>
            <main>
                
                <h1 className="title">Proximas Actividades</h1>
                
                
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


