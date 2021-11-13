var express = require('express');
var router = express.Router();
const controller = require('../controllers/animalsController')

/* CREATE animal */
  router.post('/create', function(req, res, next) {
    controller.create(req.body, res);
})

/* GET animal by id. */
router.get('/get/:id?', function(req, res, next) {
  controller.getById(req, res);
})

/* GET all animal listing. */
 router.get('/all', function(req, res, next) {
   controller.getAll(req, res);
   //res.json({persons: [{name: 'Timmy'},{name: 'Timmy2'}]});
  });
  
  
  /* UPDATE animal by id. */
  router.put('/update', function(req, res, next) {
    controller.update(req.body, res);
})
  
  /* DELETE animal by id. */
  router.delete('/delete', function(req, res, next) {
    controller.delete(req.body, res);
})


module.exports = router;
