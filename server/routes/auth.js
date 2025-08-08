import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const hashed = await bcrypt.hash(senha, 10);
    const user = await User.create({ nome, email, senha: hashed });
    res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Credenciais inválidas' });
    const valid = await bcrypt.compare(senha, user.senha);
    if (!valid) return res.status(400).json({ error: 'Credenciais inválidas' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, nome: user.nome, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
