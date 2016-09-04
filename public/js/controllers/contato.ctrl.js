angular.module('agenda').controller('contatoCtrl', function($scope, $routeParams, $http){

	$scope.salvar = function(contato){
		$http.post('/contatos', contato).success(function(data){
			$scope.contato = data;
		});
	}
});