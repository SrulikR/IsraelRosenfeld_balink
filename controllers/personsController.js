const db = require('../models/personDb')
const controller={};


controller.create = function(req, res, next) {
    result = db.createPerson(req)
    .then(result => {
        console.log(result);
        res.send(result.command + " success!");})
}

controller.getById = function(req, res, next) {
    if (!req.params.id)
    return res.send("there are not an id in your request to get you data");
   result = db.getPersonById(req.params.id).
   then(result => result.count >0 ? res.send(result[0]): result[count])
   .catch(err=> res.send("error by id, there not exist"))
}

controller.getAll = function(req, res, next) {
    db.getAllPerson().
    then(result =>
        res.send(result)
    )
    .catch(err=> console.log("error by all, there not exist"))
}

controller.delete = function(req, res, next) {
    if (!req.params.id)
    return res.send("there are not an id in your request to be delete");
    let id = req.id;
    result = db.getPersonById(id).
    then(result => {
        if(result.count > 0)
        db.deletePersonById(id).
        then(result => {res.send(result.command +" "+ id + " success!");})
        else res.send(id +" there are not exist to be delete")
        }
    )    
    .catch(err=> res.send("Error exist trough deleted"))
}

module.exports = controller;