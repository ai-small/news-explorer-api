const check = require('validator');
const ValidationError = require('../errors/validationError');
const UnauthorizedError = require('../errors/unauthorizedError');
const { validationFailedMessages, headerLostsMessage } = require('../constants');

const passwordValidator = (password) => {
  if (check.isEmpty(password, { ignore_whitespace: true })) {
    throw new ValidationError(validationFailedMessages.spacesPasswordMessage);
  }

  return password;
};

const urlValidator = (link) => {
  if (!check.isURL(link)) {
    throw new ValidationError(validationFailedMessages.badLinkMessage);
  }

  return link;
};

const authValidator = (authorization) => {
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(headerLostsMessage);
  }
  return authorization;
};

module.exports = { passwordValidator, urlValidator, authValidator };
