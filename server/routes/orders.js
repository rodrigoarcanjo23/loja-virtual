import express from 'express';
import auth from '../middleware/auth.js';
import Order from '../models/Order.js';
import User from '../models/User.js';

const router = express.Router();
router.use(auth);

router.get('/', async (req, res) => {
  const orders = await Order.find({ usuario: req.userId }).populate('itens.produto');
  res.json(orders);
});

router.post('/', async (req, res) => {
  const user = await User.findById(req.userId).populate('carrinho.produto');
  const total = user.carrinho.reduce((acc, item) => acc + item.quantidade * item.produto.preco, 0);
  const order = await Order.create({
    usuario: req.userId,
    itens: user.carrinho,
    total
  });
  user.carrinho = [];
  await user.save();
  res.status(201).json(order);
});

export default router;
