import { Joi, Segments } from 'celebrate';

export const registerUserValidationSchema = {
  [Segments.BODY]: Joi.object({
    userName: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    //   .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{12,}$/),
  }),
};
