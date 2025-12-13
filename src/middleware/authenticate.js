import createHttpError from 'http-errors';
import { Session } from '../models/session.js';
import { User } from '../models/user.js';

export const authenticate = async (req, res, next) => {
  const { accessToken, sessionId } = req.cookies;
  if (!accessToken) return next(createHttpError(401, 'Missing access token'));

  const session = await Session.findById(sessionId);
  if (!session) return next(createHttpError(401, 'Session not found'));

  if (session.accessTokenValidUntil < new Date())
    return next(createHttpError(401, 'Access token expired'));

  const user = await User.findById(session.userId);
  if (!user)
    return next(
      createHttpError(401, 'No session associated with this token found'),
    );

  req.user = user;

  next();
};
