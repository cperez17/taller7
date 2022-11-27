

angular.module('prototipoApp')
.controller('MiembrosCtrl',function($scope,$http){
    $http.get('http://localhost:3000/datos.json').success(function(data){
        $scope.miembros = data
    
})
$scope.gridOption={
    data: 'miembros'
};
});






/*
export function Datos(){
    var myArray = [
        {codigo:'BAIN085', asignatura:'Calculo en varias variables', tipo:'Prueba', fecha:{dia:11,mes:10,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN023', asignatura:'Geometria', tipo:'Prueba', fecha:{dia:13,mes:10,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN042', asignatura:'Algebra lineal', tipo:'Prueba', fecha:{dia:17,mes:10,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN012', asignatura:'Calculo en una variable', tipo:'Prueba', fecha:{dia:21,mes:10,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN019', asignatura:'Metodos para ingenieria', tipo:'Prueba', fecha:{dia:23,mes:10,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN052', asignatura:'Estadistica', tipo:'Prueba', fecha:{dia:12,mes:12,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN072', asignatura:'Ecuaciones diferenciales', tipo:'Prueba', fecha:{dia:05,mes:10,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN072', asignatura:'Ecuaciones diferenciales', tipo:'Prueba', fecha:{dia:31,mes:11,año:22},hora:{hrs:17,min:00,sgs:00}},
        {codigo:'BAIN072', asignatura:'Ecuaciones diferenciales', tipo:'Prueba', fecha:{dia:30,mes:12,año:22},hora:{hrs:17,min:00,sgs:00}},
    ];
    return myArray;
}*/
