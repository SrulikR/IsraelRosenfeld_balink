const postgres = require('postgres')
//url to my local DB
const sql = postgres('postgres://postgres:@localhost:5432/balink')
//url from db uploadd to heroku, bud not allowed use SSL without a pay program 
//const sql = postgres('postgres://"URL",{ssl:true});

async function create(data){ 
  const member = await sql`
  insert into memberships ${
    sql(data, 'id_person','id_animal')
  }
`;
  return member;
}

async function getById (id){ 
  const member = await sql`
  select * from memberships
  where id_person = ${id}`;
  return member;
}

async function getAll (){ 
  const member = await sql`
  select * from memberships ORDER BY id ASC`;  
  return member;
}

module.exports ={create, getById, getAll}
