'use strict';
module.exports = (app) => {
  var sigpes = require('../controllers/sigpesController');

  var router = app.Router();

  // todoList Routes
  router.route('/sigpes')
    .get(sigpes.list_all_sigpes)
    .post(sigpes.create_a_sigpe);

    router.route('/sigpes/:sigpeId')
    .get(sigpes.read_a_sigpe)
    .put(sigpes.update_a_sigpe)
    .delete(sigpes.delete_a_sigpe);

    return router;
};