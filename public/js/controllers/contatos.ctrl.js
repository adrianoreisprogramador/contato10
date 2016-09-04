angular.module('agenda').controller('contatosCtrl', function($scope, $http){
	$scope.title = 'Contatos';
	$scope.contato = {};
	$scope.contatos = [];

	$scope.remover = function(contato){
		$http.delete('/contatos/' + contato._id).success(function(data){
			console.log(data);
			carregarContato();
		})
		.error(function(error){
			console.log(error);
		});
	}

	var carregarContato = function(){
		$http.get('/contatos').then(success, error);
	}

	var success = function(success){
		$scope.contatos = success.data;
	}

	var error = function(error){
		console.log('error');
		console.log(error);
	}

	carregarContato();
});