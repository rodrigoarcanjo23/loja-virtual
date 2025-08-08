import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantidade: Number
});

const orderSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itens: [orderItemSchema],
  total: Number,
  criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
