/*function Datos2(){
    var myArray = [
        {codigo:'BAIN085', 
        asignatura:'Calculo en varias variables',
        tipo:'Prueba',
        evaluacion:{fecha:{PS1:{dia:11,mes:10,año:22},hora:{hrs:17,min:00,sgs:00},
                           PS2:{dia:17,mes:10,año:22},hora:{hrs:17,min:00,sgs:00},
                           }}
                        },
        {codigo:'BAIN072', 
        asignatura:'Ecuaciones diferenciales', 
        tipo:'Prueba', 
        evaluacion:{fecha:{PS1:{dia:05,mes:10,año:22},hora:{hrs:17,min:00,sgs:00},
                           PS2:{dia:31,mes:11,año:22},hora:{hrs:17,min:00,sgs:00},
                           PS3:{dia:30,mes:12,año:22},hora:{hrs:17,min:00,sgs:00}}}
                        }
    ];
    return myArray;
}*/
export function Datos2(){
    var myArray = {};
    myArray=[
        {'codigo':'BAIN085', 
        'asignatura':'Calculo en varias variables',
        'tipo':'Prueba',
        'evaluacion':{'fecha':{'PS1':{'dia':11,'mes':10,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           'PS2':{'dia':17,'mes':10,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           }}
                        },
        {'codigo':'BAIN072', 
        'asignatura':'Ecuaciones diferenciales', 
        'tipo':'Prueba', 
        'evaluacion':{'fecha':{'PS1':{'dia':05,'mes':10,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           'PS2':{'dia':31,'mes':11,'año':22},'hora':{'hrs':17,'min':00,'sgs':00},
                           'PS3':{'dia':30,'mes':12,'año':22},'hora':{'hrs':17,'min':00,'sgs':00}}}
                        }
    ];
    return myArray;
}
