import mongoose from 'mongoose';

const MilkSchema = new mongoose.Schema(
  {
    product_type: { type: String, required: true },
	  quantity: { type: Number, required: true },
    quantity_unit: { type: String, required: true, default: 'Ltr' },
    price: { type: Number, required: true },
    price_unit: { type: String, required: true, default: 'Rs' },
    buyer_id: { type: mongoose.Schema.Types.ObjectId, required: false },
    seller_id: { type: mongoose.Schema.Types.ObjectId, required: false }
  },
  {
	  timestamps: true,
  }
);
const Milk = mongoose.model('Milk', MilkSchema);

export default Milk;
