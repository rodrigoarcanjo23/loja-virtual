import express from 'express';
import auth from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();
router.use(auth);

router.get('/', async (req, res) => {
  const user = await User.findById(req.userId).populate('carrinho.produto');
  res.json(user.carrinho);
});

router.post('/', async (req, res) => {
  const { produtoId, quantidade = 1 } = req.body;
  const user = await User.findById(req.userId);
  const index = user.carrinho.findIndex((item) => item.produto.equals(produtoId));
  if (index > -1) {
    user.carrinho[index].quantidade += quantidade;
  } else {
    user.carrinho.push({ produto: produtoId, quantidade });
  }
  await user.save();
  const populated = await user.populate('carrinho.produto');
  res.json(populated.carrinho);
});

router.delete('/:produtoId', async (req, res) => {
  const { produtoId } = req.params;
  const user = await User.findById(req.userId);
  user.carrinho = user.carrinho.filter((item) => !item.produto.equals(produtoId));
  await user.save();
  const populated = await user.populate('carrinho.produto');
  res.json(populated.carrinho);
});

export default router;
