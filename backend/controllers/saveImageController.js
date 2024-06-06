const { luu_anh } = require('../models');

exports.saveImage = async (req, res) => {
  const { hinh_id } = req.body;
  try {
    const save = await luu_anh.create({ nguoi_dung_id: req.user.userId, hinh_id, ngay_luu: new Date() });
    res.status(201).json(save);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSavedImagesByUserId = async (req, res) => {
  try {
    const savedImages = await luu_anh.findAll({ where: { nguoi_dung_id: req.user.userId } });
    res.json(savedImages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
