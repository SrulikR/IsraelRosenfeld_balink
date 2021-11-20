const postgres = require('postgres')
//url to my local DB
const sql = postgres('postgres://postgres:@localhost:5432/balink')
//url from db uploadd to heroku, bud not allowed use SSL without a pay program 
//const sql = postgres('postgres://"URL",{ssl:true});


async function createPerson(data){ 
  const persons = await sql`
  insert into persons ${
    sql(data, 'firstname','lastname','phonenumber','city','country')
  }
`  
  return persons;
}

async function getPersonById (id){ 
  //console.log(id);
  const person = await sql`
  select * from persons
  where id = ${id}`;
  
  //console.log(person);
  return person;
}

async function getAllPerson (){ 
  const persons = await sql`
  select * from persons ORDER BY id ASC`;
  
  return persons;
}

async function deletePersonById (id){ 
const person = await sql`
  DELETE
  from persons
  where id = ${id}`;

  return person
}

module.exports = {getPersonById, getAllPerson, deletePersonById, createPerson };