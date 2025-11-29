import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProducts,
  getProductByIdController,
  updateProductController,
} from '../controllers/productsController.js';

const productRouter = Router();

productRouter.get('/products', getAllProducts);
productRouter.get('/products/:productId', getProductByIdController);
productRouter.post('/products', createProductController);
productRouter.patch('/products/:productId', updateProductController);
productRouter.delete('/products/:productId', deleteProductController);

export default productRouter;
