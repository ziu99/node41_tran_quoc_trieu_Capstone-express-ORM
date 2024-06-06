const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.nguoi_dung = require('./nguoi_dung')(sequelize, Sequelize);
db.hinh_anh = require('./hinh_anh')(sequelize, Sequelize);
db.binh_luan = require('./binh_luan')(sequelize, Sequelize);
db.luu_anh = require('./luu_anh')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
