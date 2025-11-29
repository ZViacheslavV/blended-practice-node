import { Router } from 'express';
import {
  createProductController,
  getAllProducts,
  getProductByIdController,
} from '../controllers/productsController.js';

const productRouter = Router();

productRouter.get('/products', getAllProducts);
productRouter.get('/products/:productId', getProductByIdController);
productRouter.post('/products', createProductController);

export default productRouter;
