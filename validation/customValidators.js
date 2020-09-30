const check = require('validator');
const ValidationError = require('../errors/validationError');
const UnauthorizedError = require('../errors/unauthorizedError');
const {
  badLinkMessage,
  unauthorizedMessage,
  spacesPasswordMessage,
} = require('../constants');

const passwordValidator = (password) => {
  if (check.isEmpty(password, { ignore_whitespace: true })) {
    throw new ValidationError(spacesPasswordMessage);
  }

  return password;
};

const urlValidator = (link) => {
  if (!check.isURL(link, { protocols: ['http', 'https'], require_protocol: true })) {
    throw new ValidationError(badLinkMessage);
  }

  return link;
};

const authValidator = (authorization) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(unauthorizedMessage);
  }
  return authorization;
};

module.exports = { passwordValidator, urlValidator, authValidator };
