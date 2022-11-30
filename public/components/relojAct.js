export function RelojAct(){
    relog()
    setTimeout(relog,1000)
}

function relog(){
    var hora = new Date();
    var hrs = hora.getHours();
    var min = hora.getMinutes();
    var sgs = hora.getSeconds();
    var horaImprimible = hrs + " : " + min + " : " + sgs
    return horaImprimible
}




    /*
    f(hrs<10){
        hrs="0"+hrs;
    }
    if(min<10){
        min="0"+min;
    }
    if(sgs<10){
        sgs = "0"+sgs;
    }
     var now = hrs +":"+min+":"+sgs;
     return now
    */


