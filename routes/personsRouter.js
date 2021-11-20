var express = require('express');
var router = express.Router();
const controller = require('../controllers/personsController')

/* CREATE person */
  router.post('/create', function(req, res, next) {
    controller.create(req.body, res);
})

/* GET person by id. */
router.get('/get/:id?', function(req, res, next) {
  //console.log("beforeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",req.params, req.body, res);
  controller.getById(req, res);
 // console.log("afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", res);
})

/* GET all persons listing. */
 router.get('/all', function(req, res, next) {
   controller.getAll(req, res);
   //res.json({persons: [{name: 'Timmy'},{name: 'Timmy2'}]});
  });
  
  
  /* DELETE person by id. */
  router.delete('/delete', function(req, res, next) {
    controller.delete(req.body, res);
})


module.exports = router;
