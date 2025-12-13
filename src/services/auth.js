import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';
import { Session } from '../models/session.js';

const createSession = (userId) => ({
  userId,
  accessToken: crypto.randomBytes(30).toString('base64'),
  refreshToken: crypto.randomBytes(30).toString('base64'),
  accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
  refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
});

export const registerUser = async (payload) => {
  const existingUser = await User.findOne({ email: payload.email });

  if (existingUser) throw createHttpError(409, 'Email in use');

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await User.create({ ...payload, password: hashedPassword });

  return user;
};

export const loginUser = async (payload) => {
  const existingUser = await User.findOne({ email: payload.email });

  if (!existingUser) throw createHttpError(401, 'Credentials are invalid');

  const validPassword = await bcrypt.compare(
    payload.password,
    existingUser.password,
  );

  if (!validPassword) throw createHttpError(401, 'Credentials are invalid');

  await Session.findOneAndDelete({ userId: existingUser._id });

  const session = await Session.create(createSession(existingUser._id));

  return [session, existingUser];
};
