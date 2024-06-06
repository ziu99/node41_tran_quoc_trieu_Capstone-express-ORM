module.exports = (sequelize, DataTypes) => {
  const LuuAnh = sequelize.define('luu_anh', {
    luu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hinh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ngay_luu: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  LuuAnh.associate = function(models) {
    LuuAnh.belongsTo(models.nguoi_dung, { foreignKey: 'nguoi_dung_id' });
    LuuAnh.belongsTo(models.hinh_anh, { foreignKey: 'hinh_id' });
  };

  return LuuAnh;
};
