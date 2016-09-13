angular.module('agenda').controller('contatoCtrl', function($scope, $routeParams, $resource, $location){

	var Contato = $resource('/contatos/:id');

	$scope.contato = new Contato();
	
	var init = function(id){
		if(!id)
			return;

		Contato.get({id: id}, 
			function(contato){
				$scope.contato = contato;
			},
			function(error){
				$scope.message = "Não foi possivel obter contato";
				console.log(error);
			});
	}

	$scope.salvar = function(contato){
		$scope.contato.$save()
			.then(function(){
				$scope.message = "Salvo com sucesso";
				$scope.contato = new Contato();
			})
			.catch(function(error){
				$scope.message = "Não foi possivel salver";
				console.log(error);
			});
	}

	init($routeParams.id);
});