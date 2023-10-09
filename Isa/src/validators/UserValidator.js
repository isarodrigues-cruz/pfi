const { checkSchema } = require('express-validator');

module.exports = {
  editUsers: checkSchema({
    token: {
      notEmpty: true
    },
    nome:{
      trim: true,
      notEmpty: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    senha: {
      notEmpty: true,
      isLength: {
        options: {min: 8}
      },
      errorMessage: 'Senha inválida'
    },
    data_nascimento: {
      notEmpty: true,
      isLength: {
        options:{
          min: 10
        }
      },
      errorMessage: 'Data de nascimento inválida'
    }
  })
}