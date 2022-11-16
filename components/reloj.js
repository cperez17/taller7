function relojActual(){

    tiempoActual = new Date()
    hora = tiempoActual.getHours
    minutos = tiempoActual.getMinutes()
    segundos = tiempoActual.getSeconds()
        
    /* Esto es para que la hora se imprima asi 12:08:02 en en vez de
    asi 12:8:2 */
    hora_0 = new String(hora)
    minutos_0 = new String(minutos)
    segundo_0 = new String(segundos)
    if(hora_0.length == 1){
        hora = "0" + hora
    }
    if(minutos_0.length == 1){
        minutos = "0" + minutos
    }
    if(segundo_0.length == 1){
        segundos = "0" + segundos
    }
    //----------------------------------------------
    HHMMSS = hora + ":" + minutos + ":" + segundos

    setTimeout(relojActual, 1000) //se refresca cada 1 segundo
}
relojActual();

    
