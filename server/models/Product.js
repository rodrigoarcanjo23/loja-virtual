import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  preco: Number,
  src: String,
  alt: String
});

export default mongoose.model('Product', productSchema);
