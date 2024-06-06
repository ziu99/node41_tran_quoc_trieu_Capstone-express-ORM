module.exports = (sequelize, DataTypes) => {
  const HinhAnh = sequelize.define('hinh_anh', {
    hinh_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ten_hinh: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duong_dan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mo_ta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  HinhAnh.associate = function(models) {
    HinhAnh.belongsTo(models.nguoi_dung, { foreignKey: 'nguoi_dung_id' });
    HinhAnh.hasMany(models.binh_luan, { foreignKey: 'hinh_id' });
    HinhAnh.belongsToMany(models.nguoi_dung, { through: models.luu_anh, foreignKey: 'hinh_id' });
  };

  return HinhAnh;
};
