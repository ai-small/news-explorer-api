const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const UnauthorizedError = require('../errors/unauthorizedError');
const { unauthorizedMessage } = require('../constants');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError(unauthorizedMessage);
  }
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError(unauthorizedMessage));
  }
  req.user = payload;
  return next();
};
