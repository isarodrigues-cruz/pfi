const User = require('../models/User');
const { validationResult, matchedData } = require('express-validator');

module.exports ={
  getStates: async (req, res) =>{
    res.json({states: "Super"});
  },
  info: async (req, res) =>{
    let token = req.session.sessionUser
    const user = await User.findUserToken(token);
    res.json({
      "nome": user.nome,
      "email": user.email,
      "senha": "********",
      "data nascimento": user.data_nascimento
    });
  },
  editInfo: async (req, res) =>{
    let token = req.session.sessionUser

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.json({error: errors.mapped()});
      return;
    }

    const data = matchedData(req);
    const user = await User.updateUser(data.nome, data.senha, data.data_nascimento, token);
    res.json({user});
  },
  dropUser: async (req, res) =>{
    let token = req.session.sessionUser

    const user = await User.deleteUser(token);
    res.json({user});
  }
}