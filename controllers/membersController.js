const db = require('../models/memberDb')
const animalController = require('./animalsController');
const personsController = require('./personsController');
const controller={};


controller.create =  function(req, res, next) {

    db.create(req.body).
    then(result => 
        res.send(result.command + "a membership success!")
    )
    .catch(err => res.send("error:" + err.message))

}
   
controller.getById = function(req, res, next) {
    if (!req.params.id)
    return res.send("there are not an id in your request to get you data");
    //send id from the person owner
   result = db.getById(req.params.id).
   then(result => 
    {
        //console.log(result);
        if(result.count > 0){
            let list = { "id": req.params.id};
            list = {...list,"id_animal":result.map((x=> x.id_animal))};

           // console.log(list);
            res.send(list)
        }else throw new Error("not exist");
    })
   .catch(err => res.send("error by id, there not exist"))
}

controller.getAll = function(req, res, next) {
    db.getAll().
    then(result =>res.send(result))
    .catch(err=> console.log("error by all, there not exist"))
}

module.exports = controller;