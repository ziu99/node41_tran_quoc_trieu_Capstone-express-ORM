module.exports = (sequelize, DataTypes) => {
  const NguoiDung = sequelize.define('nguoi_dung', {
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mat_khau: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ho_ten: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tuoi: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    anh_dai_dien: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  NguoiDung.associate = function(models) {
    NguoiDung.hasMany(models.hinh_anh, { foreignKey: 'nguoi_dung_id' });
    NguoiDung.hasMany(models.binh_luan, { foreignKey: 'nguoi_dung_id' });
    NguoiDung.belongsToMany(models.hinh_anh, { through: models.luu_anh, foreignKey: 'nguoi_dung_id' });
  };

  return NguoiDung;
};
