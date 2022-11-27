import {RelojAct} from "../components/relojAct"
import CrearTabla, { Datos2 } from "../components/tabla";
import Contador from "../components/contador"


var reloj = RelojAct();
var data = Datos2();
var n = data.length;

var i = 0;




function index(){
  
    
    return(           
        <body>       
            <div className="container2">
                <div className="reloj">{reloj}</div>
                <div className="titulo">Próximas Actividades</div>
                <div className="tituloTabla">

                        <div className="codTitu">Codigos</div>
                        <div className="asignTitu">Asignaturas</div>
                        <div className="tipoTitu">Tipo</div>
                        <div className="fechaTitu">Fecha</div>
                </div>
                <div className="tabla1">
                    <div className="codigo2">{CrearTabla(data,n)}</div>
                
                </div>

            </div>
            
        </body>      
        
    )
    

}
export default index;

/*<div className="codigo2">{data[i].codigo}</div>
<div className="asignatura2">{data[i].asignatura}</div>
<div className="tipo2">{data[i].tipo}</div>
<div className="fecha2">{data[i].fecha}</div>*/
//<div className="horaAct">{reloj()}</div>
//<div className="codigo2">Codigo</div>
//<div className="asignatura2">Asignatura</div>
/*
<div className="codigo2">BAIN053</div>
<div className="asignatura2">Calculo en varias variables</div>
<div className="tipo2">prueba</div>
<div className="fecha2">10/10/22</div>



function CrearTabla(datos,n){
        var data = datos;
        for(var i=0; i<n;i++){
            <div className="container2">
                <div className="codigo2">{data[i].codigo}</div>
                <div className="asignatura2">{data[i].asignatura}</div>
                <div className="tipo2">{data[i].tipo}</div>
                <div className="fecha2">{data[i].fecha}</div>
            </div>
            console.log(data[i].codigo)
            console.log(data[i].asignatura)
            console.log(data[i].tipo)
            console.log(data[i].fecha)
        }
    }








<div className="tituloTabla">

                        <div className="codTitu">Codigos</div>
                        <div className="asignTitu">Asignaturas</div>
                        <div className="tipoTitu">Tipo</div>
                        <div className="fechaTitu">Fecha</div>
                </div>



*/

