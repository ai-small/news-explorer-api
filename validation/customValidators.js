const check = require('validator');
const ValidationError = require('../errors/validationError');
const { validationFailedMessages } = require('../constants');

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

module.exports = { passwordValidator, urlValidator };
