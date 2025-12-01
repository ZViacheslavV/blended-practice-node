import { ProductModel } from '../models/product.js';

export const getProducts = /* async */ () => /* await */ ProductModel.find();

export const getProductById = (productId) =>
  ProductModel.findOne({ _id: productId });

export const createProduct = (payload) => ProductModel.create(payload);

export const updateProduct = (productId, payload) =>
  ProductModel.findOneAndUpdate({ _id: productId }, payload, { new: true });

export const deleteProduct = (productId) =>
  ProductModel.findOneAndDelete({ _id: productId });
