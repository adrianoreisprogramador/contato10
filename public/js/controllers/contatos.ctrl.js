angular.module('agenda').controller('contatosCtrl', function($scope, $resource){
	
	var Contatos = $resource('/contatos/:id');

	$scope.title = 'Contatos';
	$scope.contato = {};
	$scope.contatos = [];

	$scope.remover = function(contato){
		Contatos.delete({id: contato._id}, carregarContato, error);
	}

	var carregarContato = function(){
		Contatos.query(success, error);
	}

	var success = function(contato){
		$scope.contatos = contato;
	}

	var error = function(error){
		console.log('error');
		console.log(error);
	}

	carregarContato();
});