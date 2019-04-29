'use strict';
module.exports = (express) => {
  var sigpes = require('../controllers/sigpesController');

  var router = express.Router();

  // todoList Routes
  router.route('/')
    .get(sigpes.list_all_sigpes)
    .post(sigpes.create_a_sigpe);

  router.route('/:sigpeId')
    .get(sigpes.read_a_sigpe)
    .put(sigpes.update_a_sigpe)
    .delete(sigpes.delete_a_sigpe);

    return router;
};