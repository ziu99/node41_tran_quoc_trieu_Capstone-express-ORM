module.exports = (sequelize, DataTypes) => {
  const BinhLuan = sequelize.define('binh_luan', {
    binh_luan_id: {
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
    ngay_binh_luan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    noi_dung: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  BinhLuan.associate = function(models) {
    BinhLuan.belongsTo(models.nguoi_dung, { foreignKey: 'nguoi_dung_id' });
    BinhLuan.belongsTo(models.hinh_anh, { foreignKey: 'hinh_id' });
  };

  return BinhLuan;
};
