import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantidade: Number
});

const userSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
  carrinho: [cartItemSchema]
});

export default mongoose.model('User', userSchema);
