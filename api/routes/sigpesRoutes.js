'use strict';
module.exports = (app) => {
  var sigpes = require('../controllers/sigpesController');

  // todoList Routes
  app.route('/sigpes')
    .get(sigpes.list_all_sigpes)
    .post(sigpes.create_a_sigpe);

  app.route('/sigpes/:sigpeId')
    .get(sigpes.read_a_sigpe)
    .put(sigpes.update_a_sigpe)
    .delete(sigpes.delete_a_sigpe);

  app.get('/SIGPE_gestion_tareas.js', (req, res) => {
    res.render('/SIGPE_gestion_tareas.js');
  });
};