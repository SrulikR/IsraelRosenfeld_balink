var express = require('express');
var router = express.Router();
const controller = require('../controllers/membersController')

/* CREATE membership*/
  router.post('/create', function(req, res, next) {
    controller.create(req, res);
})

/* GET membership by id. */
router.get('/get/:id?', function(req, res, next) {
  controller.getById(req, res);
})

/* GET all memberships listing. */
 router.get('/all', function(req, res, next) {
   controller.getAll(req, res);
  });

module.exports = router;