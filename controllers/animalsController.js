const db = require('../models/animalDb')
const controller={};


controller.create = function(req, res, next) {
    result = db.createAnimal(req)
    .then(result => {
        res.send(result.command + " success!");})
}

controller.getById = function(req, res, next) {
    if (!req.params.id)
    return res.send("there are not an id in your request to get you data");
    result = db.getAnimalById(req.params.id).
   then(result => {
   // console.log("im in get animal id",result[0]);
      result.count >0 ? res.send(result[0]): res.send({"msg" :"there are not exist"})
    })
   .catch(err=> res.send("error by id, there not exist"))
}

controller.getAll = function(req, res, next) {
    db.getAllAnimal().
    then(result =>
        res.send(result)
    )
    .catch(err=> console.log("error by all, there not exist"))
}

controller.update = function(req, res, next) {
    if (!req.id)
    return res.send("there are not an id in your request to be update");
    let id = req.id;
    result = db.getAnimalById(id).
    then(result => {
        //console.log(result);
        if(result.count > 0)
        db.updateAnimalById(req).
        then(result => {res.send(result.command +" "+ id + " success!");})
        else res.send(id +" there are not exist to be updated")
        }
    )    
    .catch(err=> res.send("Error exist trough updated"))
}

controller.delete = function(req, res, next) {
    if (!req.id)
    return res.send("there are not an id in your request to be delete");
    let id = req.id;
    result = db.getAnimalById(id).
    then(result => {
        if(result.count > 0)
        db.deleteAnimalById(id).
        then(result => {res.send(result.command +" "+ id + " success!");})
        else res.send(id +" there are not exist to be delete")
        }
    )    
    .catch(err=> res.send("Error exist trough deleted"))
}

controller.isExist = function(id) { 
    db.getAnimalById(id).
    then(result => result.count >0 ? true: false)
    .catch(err =>  {return ("error by id, there not exist")})
}

module.exports = controller;