'use strict';
module.exports = function(app) {
  var sigpes = require('../controllers/sigpesController');

  // todoList Routes
  app.route('/sigpes')
    .get(sigpes.list_all_sigpes)
    .post(sigpes.create_a_sigpe);


  app.route('/sigpes/:sigpeId')
    .get(sigpes.read_a_sigpe)
    .put(sigpes.update_a_sigpe)
    .delete(sigpes.delete_a_sigpe);
};