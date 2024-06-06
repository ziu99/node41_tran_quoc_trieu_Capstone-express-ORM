const { hinh_anh } = require('../models');

exports.createImage = async (req, res) => {
  const { ten_hinh, duong_dan, mo_ta } = req.body;
  try {
    const image = await hinh_anh.create({ ten_hinh, duong_dan, mo_ta, nguoi_dung_id: req.user.userId });
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getImageById = async (req, res) => {
  try {
    const image = await hinh_anh.findByPk(req.params.id);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateImage = async (req, res) => {
  const { ten_hinh, duong_dan, mo_ta } = req.body;
  try {
    await hinh_anh.update({ ten_hinh, duong_dan, mo_ta }, { where: { hinh_id: req.params.id, nguoi_dung_id: req.user.userId } });
    res.json({ message: 'Image updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    await hinh_anh.destroy({ where: { hinh_id: req.params.id, nguoi_dung_id: req.user.userId } });
    res.json({ message: 'Image deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
