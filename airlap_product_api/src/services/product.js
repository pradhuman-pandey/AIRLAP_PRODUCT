import {Product} from '../models';

export async function createProductService(payload) {
  const newProduct = new Product(payload);
  const data = await newProduct.save();
  return data;
}


export async function getAllProductService() {
  const allProducts = await Product.find();
  return allProducts;
}

export async function productDetailService(id) {
  const productDetail = await Product.findOne({_id:id});
  return productDetail;
}

export async function updateProductService(id, payload) {
  const data = await Product.findOneAndUpdate(id, payload);
  return data;
}

export async function deleteProductService(id) {
  const data = await Product.findByIdAndDelete(id);
  return data;
}
