
module.exports = {
  private: async (req, res, next) => {
    let token = req.session.sessionUser
    if(!req.session.sessionUser){
      res.redirect('/user/login');
      return;
    }
    if(token == ''){
      res.redirect('/user/login');
      return;
    }
    next();
  }
}