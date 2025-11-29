import {
  createProduct,
  getProductById,
  getProducts,
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
