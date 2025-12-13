import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerUserValidationSchema } from '../validation/registerUserValidationSchema.js';
import { registerUserController } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post(
  'auth/register',
  celebrate(registerUserValidationSchema),
  registerUserController,
);

export default authRouter;
