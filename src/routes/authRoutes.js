import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerUserValidationSchema } from '../validation/registerUserValidationSchema.js';
import {
  loginUserController,
  logoutUserController,
  refreshSessionController,
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

authRouter.post('/auth/logout', logoutUserController);

authRouter.post('/auth/refresh', refreshSessionController);

export default authRouter;
