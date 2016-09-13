module.exports = function(app){
	var controller = {};
	var contatos = [
		{_id: 1, nome: 'contato1', email:'cont1@email.com'},
		{_id: 2, nome: 'contato2', email:'cont2@email.com'},
		{_id: 3, nome: 'contato3', email:'cont3@email.com'},
		{_id: 4, nome: 'contato4', email:'cont4@email.com'},
		{_id: 5, nome: 'contato5', email:'cont5@email.com'},
		{_id: 6, nome: 'contato6', email:'cont6@email.com'}
	];

	var _id = 6;

	controller.listarContatos = function(req, res, next){
		res.json(contatos);
	}

	controller.obtemContato = function(req, res, next){
		var idContato = req.params.id;

		var contato = contatos.filter(function(contato){
			return idContato == contato._id;
		})[0];

		contato ? res.json(contato) :
			res.status(404).send('Contato não encontrado');
	}

	controller.removerContato = function(req, res, next){
		var idContato = req.params.id;

		contatos = contatos.filter(function(contato){
			return idContato != contato._id;
		});

		res.end();
	}	

	controller.salverContato = function(req, res, next){
		var contato = req.body;

		contato = contato._id ?
		 atualizar(contato) : 
		 adicionar(contato);

		 res.json(contato);
	}

	var atualizar = function(contatoAlterar){
		contatos = contatos.map(function(contato){
			if(contato._id == contatoAlterar._id){
				contato = contatoAlterar;
			}
			return contato;
		})

		return contatoAlterar
	}
	
	var adicionar = function(contatoNovo){
		contatoNovo._id = ++_id;
		contatos.push(contatoNovo);
		return contatoNovo;
	}

	return controller;
}