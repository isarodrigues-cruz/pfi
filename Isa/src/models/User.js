const sql = require('../database/db');

const User = {
  insertUser: async (nome, email, senha, token) =>{
    await sql`
    INSERT INTO usuarios (nome, email, senha, token)
    VALUES (${nome}, ${email}, ${senha}, ${token});
    `
  },
  updateUser: async  (nome, senha, token) => {
    await sql`
    UPDATE usuarios SET
    nome = ${nome},
    senha = ${senha},
    WHERE token = ${token}
    `
  },
  deleteUser: async (token) => {
    await sql`
    DELETE FROM usuarios
    WHERE token = ${token};
    `
  },
  findUserToken: async (token) => {
    let res;
    await sql`
    SELECT * FROM usuarios
    WHERE token=${token};
    `.then((usuario) => {
      res = usuario.map((val) => val)[0];
    });
    return res;
  },
  findUserEmail: async (email) => {
    let res;
    await sql`
    SELECT * FROM usuarios
    WHERE email=${email};
    `.then((usuario) => {
      res = usuario.map((val) => val)[0];
    });
    return res;
  }
}


module.exports = User;