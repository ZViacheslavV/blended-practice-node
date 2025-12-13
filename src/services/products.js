import { ProductModel } from '../models/product.js';

export const getProducts = async ({ filter = {} }) =>
  ProductModel.find({ userId: filter.userId });

export const getProductById = (productId, userId) =>
  ProductModel.findOne({ _id: productId, userId });

export const createProduct = (payload) => ProductModel.create(payload);

export const updateProduct = (productId, payload, userId) =>
  ProductModel.findOneAndUpdate({ _id: productId, userId }, payload, {
    new: true,
  });

export const deleteProduct = (productId, userId) =>
  ProductModel.findOneAndDelete({ _id: productId, userId });
