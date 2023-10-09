const dbInfo = require('../database/db_info');

module.exports = {
  findInfos: async (req, res) =>{
    const infos = dbInfo;
    res.render('pages/informacoes', await {infos});
  },

  infosPage: async (req, res) => {
    res.render(`pages/info/${req.params.page}`);
  }
}