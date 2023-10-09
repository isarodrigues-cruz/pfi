const User = require('../models/User');
const { validationResult, matchedData } = require('express-validator');
const { randomUUID } = require('crypto');


module.exports ={
  signin: async (req, res) =>{
    const errors = validationResult(req);
    const listError = [];

    if(!errors.isEmpty()){
      let msgList = []
      errors.errors.forEach(value => {
        var obj = {"msg": value.msg}
        if(msgList.indexOf(value.msg) == -1){
          listError.push(obj)
          msgList.push(value.msg)
        }
      });
      res.render("pages/login",{erros: listError})
      return;
    }

    const data = matchedData(req);
    const isUser = await User.findUserEmail(data.inEmail);
    if(isUser == undefined || !isUser){
      listError.push({"msg": 'E-mail inválido'})
      res.render("pages/login",{erros: listError})
      return;
    }

    const match = (data.inPassword == isUser.senha)? true: false;
    if(!match){
      listError.push({"msg": 'Senha não corresponde'}) 
      res.render("pages/login",{erros: listError})
      return;
    }

    req.session.sessionUser = isUser.token;
    res.redirect('/');
  },
  signup: async (req, res) =>{
    let errors = validationResult(req);
    const listError = [];

    if(!errors.isEmpty()){
      let msgList = []
      errors.errors.forEach(value => {
        var obj = {"msg": value.msg}
        if(msgList.indexOf(value.msg) == -1){
          listError.push(obj)
          msgList.push(value.msg)
        }
      });
      res.render("pages/cadastro",{erros: listError})
      return;
    }
    const data = matchedData(req);
    const isUser = await User.findUserEmail(data.inEmail);

    if(isUser == undefined || !isUser){
      const token = randomUUID();
      await User.insertUser(data.inName, data.inEmail, data.inPassword, token);
      req.session.sessionUser = isUser.token;
      console.log('Sessaõ: ', req.session.sessionUser)
      res.render('pages/index');
      return;

    }else{
      listError.push({"msg": 'Email já cadastrado, insira um novo'})
      res.render("pages/cadastro",{erros: listError})
      return;
    }
  }
}