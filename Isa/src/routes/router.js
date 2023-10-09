const express = require('express');
const router = express.Router();

const Auth = require('../middlewares/Auth');
const AuthValidator = require('../validators/AuthValidator');
const Useralidator = require('../validators/UserValidator');

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const AdmController = require('../controllers/AdmController');
const InfoController = require('../controllers/InfoController');

router.get("/", (req, res) => {
  res.render('pages/index');
});

router.get("/home", (req, res) => {
  res.render('pages/home');
}); 

router.get("/informacoes", Auth.private, InfoController.findInfos);

router.get("/informacoes/:page", Auth.private, InfoController.infosPage);

router.get("/user/cadastro", (req, res) => {
  res.render('pages/cadastro');
});
router.post("/user/cadastro", AuthValidator.signup, AuthController.signup);

router.get("/user/login", AdmController.userSection);
router.post("/user/login", AuthValidator.signin, AuthController.signin);
 
router.get("/user/me", Auth.private, UserController.info);
router.put("/user/me", Auth.private, Useralidator.editUsers, UserController.editInfo);
router.delete("/user/me", Auth.private, UserController.dropUser);


module.exports = router;