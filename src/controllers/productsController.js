import createHttpError from 'http-errors';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../services/products.js';

export const getAllProducts = async (req, res) => {
  const products = await getProducts();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) throw createHttpError(404, 'Product not found');

  res.json({
    status: 200,
    message: 'Successfully found product by id!',
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.json({
    status: 201,
    message: 'Successfully created product!',
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await updateProduct(productId, req.body);

  if (!product) throw createHttpError(404, 'Product not found');

  res.json({
    status: 200,
    message: 'Successfully updated product!',
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) throw createHttpError(404, 'Product not found');

  res.json({
    status: 200,
    message: 'Successfully deleted product!',
    data: product,
  });
};
