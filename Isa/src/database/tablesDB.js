const sql = require('./db');

async function createTableUser(){
  sql`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      senha VARCHAR(255) NOT NULL,
      token VARCHAR(255) NOT NULL
    );
    `
}



createTableUser();