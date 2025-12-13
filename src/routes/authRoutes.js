import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerUserValidationSchema } from '../validation/registerUserValidationSchema.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/authController.js';
import { loginUserValidationSchema } from '../validation/loginUserValidationSchema.js';

const authRouter = Router();

authRouter.post(
  '/auth/register',
  celebrate(registerUserValidationSchema),
  registerUserController,
);

authRouter.post(
  '/auth/login',
  celebrate(loginUserValidationSchema),
  loginUserController,
);

export default authRouter;
