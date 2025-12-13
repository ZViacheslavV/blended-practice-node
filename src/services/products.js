import { ProductModel } from '../models/product.js';

export const getProducts = ({ filter = {} }) => {
  ProductModel.find({ userId: filter.userId });
};

export const getProductById = (productId, userId) =>
  ProductModel.findOne({ _id: productId, userId });

export const createProduct = (payload) => ProductModel.create(payload);

export const updateProduct = (productId, payload) =>
  ProductModel.findOneAndUpdate({ _id: productId }, payload, { new: true });

export const deleteProduct = (productId) =>
  ProductModel.findOneAndDelete({ _id: productId });
