import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from '../controllers/productsController.js';

const productRouter = Router();

productRouter.get('/products', getAllProductsController);
productRouter.get('/products/:productId', getProductByIdController);
productRouter.post('/products', createProductController);
productRouter.patch('/products/:productId', updateProductController);
productRouter.delete('/products/:productId', deleteProductController);

export default productRouter;
