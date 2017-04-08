var app = angular.module('app',[]);
app.controller('JugadoresControlador',['$scope', function ($scope){
 		$scope.jugadores=[
 					{nombre:"Cristiano Ronaldo", numero:"7", posicion:"Delantero"},
 					{nombre:"Luka Modric", numero:"19", posicion:"Mediocentro"},
 					{nombre:"Sergio Ramos", numero:"4", posicion:"Defensa"},
 					{nombre:"Keylor Navas", numero:"1", posicion:"Portero"},
 					];

	$scope.Save = function(){
 		$scope.jugadores.push({
 			nombre:$scope.nuevoJugador.nombre,
 			numero:$scope.nuevoJugador.numero,  
 			posicion:$scope.nuevoJugador.posicion
 	});

 	$scope.formVisibility=false;
 	console.log($scope.formVisibility);	

 }; 

 	$scope.formVisibility=false;

 	$scope.ShowForm = function(){
 		$scope.formVisibility=true;
 		console.log($scope.formVisibility);
 	};

}]);


 //El scope permite vincular modelos, vistas y controladores
 //Cada app angular tiene un scope raiz 



