const postgres = require('postgres')
//url to my local DB
const sql = postgres('postgres://postgres:@localhost:5432/balink')
//url from db uploadd to heroku, bud not allowed use SSL without a pay program 
//const sql = postgres('postgres://ubwlddlbzpzxcw:6580abc448d29d2fc9025f281155452000189a312b43a68316ba6b2359255440@ec2-3-225-30-189.compute-1.amazonaws.com:5432/d1cvcek1ikpc1m',{ssl:true});

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
