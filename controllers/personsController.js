const db = require('../models/personDb')
const controller={};


controller.create = function(req, res, next) {
    result = db.createPerson(req)
    .then(result => {
        console.log(result);
        res.send(result.command + " success!");})
}

controller.getById = function(req, res) {
    if (!req.params.id)
    return res.send("there are not an id in your request to get you data");
   db.getPersonById(req.params.id).
   then(result => result.count >0 ? res.send(result[0]): result[count])
   .catch(()=> res.send("error by id, there not exist"))
}

controller.getAll = function(req, res, next) {
    db.getAllPerson().
    then(result =>
        res.send(result)
    )
    .catch(()=> console.log("error by all, there not exist"))
}

controller.delete = async function(req, res, next) {
    if (!req.id)
        return res.send("there are not an id in your request to be delete");
    let id = req.id;
    if(await this.isExist(id) == true){
        db.deletePersonById(id).
        then(result => { res.send(result.command + " " + id + " success!"); })
        .catch(() => res.send("Error exist trough deleted"));
    }
    else{
        res.send(id + " there are not exist to be delete");
    }
}


controller.isExist = async function(id) { 
   return new Promise((resolve, reject) => {
       db.getPersonById(id).
       then(result => (result.count > 0 ?  resolve(true): reject(false)))
    })
    .catch(() =>  ("error by id, there not exist"))
}

module.exports = controller;