const { nguoi_dung } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(mat_khau, 10);
    const user = await nguoi_dung.create({ email, mat_khau: hashedPassword, ho_ten, tuoi, anh_dai_dien });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, mat_khau } = req.body;
  try {
    const user = await nguoi_dung.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(mat_khau, user.mat_khau);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user.nguoi_dung_id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await nguoi_dung.findByPk(req.user.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { ho_ten, tuoi, anh_dai_dien } = req.body;
  try {
    await nguoi_dung.update({ ho_ten, tuoi, anh_dai_dien }, { where: { nguoi_dung_id: req.user.userId } });
    res.json({ message: 'Profile updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
