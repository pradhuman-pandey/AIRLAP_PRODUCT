import {Schema, model} from 'mongoose';

const productSchema = new Schema(
    {
      name: {type: String},
      description: {type: String},
      price: {type: Number},
    },
    {timestamps: {createdAt: 'created', updatedAt: 'updated'}},
);

const Product = model('product', productSchema);
export default Product;
