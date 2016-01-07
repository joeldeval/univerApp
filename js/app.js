var app = angular.module('universidadApp',['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	$scope.menuSuperior = 'parciales/menu.html';
	// $scope.telefonoMask = "99-99-99-99-99";
	$scope.telefonoMask = "9999-9999";

	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mProfesores = "";
		$scope.mAlumnos    = "";

		$scope[Opcion] = "active";

	}

}]);

// filtro personalizado de telefono
app.filter('telefono8', function () {
    return function(numero) {
      return numero.substring(0,4) + "-" + numero.substring(4);
    }
});

app.filter('telefono10', function () {
    return function(numero) {
      return numero.substring(0,2) + "-" + numero.substring(2,4) + "-" + numero.substring(4,6) + "-" + numero.substring(6,8) + "-" + numero.substring(8);
    }
});
