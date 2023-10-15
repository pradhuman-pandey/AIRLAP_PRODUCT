import fs from 'fs';
import multer from 'multer';
import {STATUS_CODES} from 'http';

import {
  createProductService,
  deleteProductService,
  getAllProductService,
  productDetailService,
  updateProductService,
} from '../services';

import {productCreateSchema, productUpdateSchema} from '../validators';

export async function createProduct(request, response) {
  try {
    const validatedData = await productCreateSchema.validateAsync(request.body);
    const data = await createProductService(validatedData, request.user);
    return response.status(201).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}

export async function uploadNewProductImage(request, response) {
  try {
    if (!request.file) {
      return response.status(400).json({message: 'No file uploaded'});
    }
    const imageUrl = `${request.protocol}://${request.get('host')}/uploads/${request.file.filename}`;
    response.status(200).json({imageUrl});
  } catch (error) {
    return response.status(400).json(e);
  }
}

export async function listProducts(request, response) {
  try {
    const data = await getAllProductService();
    response.status(200).json(data);
  } catch (error) {
    return response.status(400).json(error);
  }
}


export async function productDetails(request, response) {
  try {
    const {id} = request.params;
    const data = await productDetailService(id);
    if (!data) {
      return response.status(404).json({detail: STATUS_CODES[404]});
    }
    response.status(200).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}


export async function updateProductDetails(request, response) {
  const {id} = request.params;
  const data = await productDetailService(id);
  if (!data) {
    return response.status(404).json({detail: STATUS_CODES[404]});
  }
  try {
    const validatedData = await productCreateSchema.validateAsync(
        request.body,
    );
    const data = await updateProductService(register._id, validatedData);
    return response.status(200).json(data);
  } catch (e) {
    return response.status(400).json(e);
  }
}


export async function destroyProduct(request, response) {
  const {id} = request.params;
  const register = await productDetailService(id, request.user);
  if (!register) return response.status(404).json({detail: STATUS_CODES[404]});
  const data = await deleteProductService(register._id);
  return response.status(204).json(data);
}
