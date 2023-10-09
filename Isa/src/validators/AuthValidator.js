const { checkSchema } = require('express-validator');

module.exports = {
  signin: checkSchema({
    inEmail: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    inPassword: {
      notEmpty: true,
      isLength: {
        options: {min: 8}
      },
      errorMessage: 'Senha inválida, precisa ter pelo menos 8 caracteres'
    },
  }),
  signup: checkSchema({
    inName:{
      trim: true,
      notEmpty: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    inEmail: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    inPassword: {
      notEmpty: true,
      isLength: {
        options: {min: 8}
      },
      errorMessage: 'Senha inválida'
    }
  })
}