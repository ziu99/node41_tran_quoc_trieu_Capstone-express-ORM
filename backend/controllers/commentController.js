const { binh_luan } = require('../models');

exports.createComment = async (req, res) => {
  const { noi_dung, hinh_id } = req.body;
  try {
    const comment = await binh_luan.create({ noi_dung, nguoi_dung_id: req.user.userId, hinh_id, ngay_binh_luan: new Date() });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCommentsByImageId = async (req, res) => {
  try {
    const comments = await binh_luan.findAll({ where: { hinh_id: req.params.id } });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
