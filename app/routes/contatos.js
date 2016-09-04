module.exports = function(app){
	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(controller.listarContatos)
		.post(controller.salverContato);

	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removerContato);

	return app;
}