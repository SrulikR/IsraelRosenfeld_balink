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

controller.delete = async function(req, res, next) {
    if (!req.id)
        return res.send("there are not an id in your request to be delete");
    let id = req.id;
    if(await this.isExist(id) == true){
        db.deleteAnimalById(id).
        then(result => { res.send(result.command + " " + id + " success!"); })
        .catch(() => res.send("Error exist trough deleted"));
    }
    else{
        res.send(id + " there are not exist to be delete");
    }
}

controller.isExist = async function(id) { 
   return new Promise((resolve, reject) => {
       db.getAnimalById(id).
       then(result => (result.count > 0 ?  resolve(true): reject(false)))
    })
    .catch(() =>  ("error by id, there not exist"))
}

module.exports = controller;