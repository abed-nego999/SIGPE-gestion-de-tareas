'use strict';
module.exports = (express, next) => {
  var sigpes = require('../controllers/sigpesController');

  var router = express.Router();

  // Routes
  router.route('/sigpes')
    .get(sigpes.list_all_sigpes)
    .post(sigpes.create_a_sigpe);

  router.route('/sigpes/:sigpeId')
    .get(sigpes.read_a_sigpe)
    .put(sigpes.update_a_sigpe)
    .delete(sigpes.delete_a_sigpe);

  router.route('/public')
    .get(express.static('../../public'));
  return router;
};