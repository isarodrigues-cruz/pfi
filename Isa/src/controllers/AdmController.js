module.exports = {
  userSection: (req, res) => {
    if(req.session.sessionUser){
      res.render('pages/login', {isUser: true});
      return;
    }
    
    res.render('pages/login', {isUser: false});
      return;
  }
}