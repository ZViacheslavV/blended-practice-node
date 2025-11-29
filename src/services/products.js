import { ProductModel } from '../models/product.js';

export const getProducts = /* async */ () => /* await */ ProductModel.find();

export const getProductById = (productId) =>
  ProductModel.findOne({ _id: productId });

export const createProduct = (payload) => ProductModel.create(payload);
