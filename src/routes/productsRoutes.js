import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/products', getAllProductsController);
productsRouter.get('/products/:productId', getProductByIdController);
productsRouter.post('/products', createProductController);
productsRouter.patch('/products/:productId', updateProductController);
productsRouter.delete('/products/:productId', deleteProductController);

export default productsRouter;
