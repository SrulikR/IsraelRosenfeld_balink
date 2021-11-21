const db = require('../models/memberDb')
const animalsController = require('./animalsController');
const personsController = require('./personsController');
const controller={};


controller.create = async function(req, res, next) {
    
    //console.log(req.body.id_person, req.body.id_animal)
    
    //check if ther exist this person and this animal
    if(await personsController.isExist(req.body.id_person) == true && await animalsController.isExist(req.body.id_animal) == true ){
        db.create(req.body).
        then(result => 
            res.send(result.command + " a membership success!")
        )
        .catch(err => res.send("error:" + err.message))
    }
    else (res.send("id person\\animal not exsit:"))
}
   
controller.getById = function(req, res, next) {
    if (!req.params.id)
    return res.send("there are not an id in your request to get you data");
    //send id from the person owner
   result = db.getById(req.params.id).
   then(result => 
    {
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