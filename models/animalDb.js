const postgres = require('postgres')
//url to my local DB
const sql = postgres('postgres://postgres:@localhost:5432/balink')
//url from db uploadd to heroku, bud not allowed use SSL without a pay program 
//const sql = postgres('postgres://"URL",{ssl:true});

async function createAnimal(data){ 
  const animal = await sql`
  insert into animals ${
    sql(data, 'name','species')
  }
`  
  return animal;
}

async function getAnimalById (id){ 
const animal = await sql`
  select * from animals
  where id = ${id}`;
  return animal;
}

async function getAllAnimal (){ 
  const animal = await sql`
  select * from animals ORDER BY id ASC`;  
  return animal;
}

async function updateAnimalById (data){ 
const animal = await sql`
  UPDATE animals
	SET name=${data.name}, species=${data.species}
  where id = ${data.id}`;
  return animal
}

async function deleteAnimalById (id){ 
const animal = await sql`
  DELETE
  from animals
  where id = ${id}`;
  return animal
}

module.exports = {createAnimal, getAnimalById, getAllAnimal, updateAnimalById, deleteAnimalById };