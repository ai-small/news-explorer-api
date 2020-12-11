const { celebrate, Joi } = require('celebrate');
const { authValidator } = require('./customValidators');
const { headerLostsMessage } = require('../constants');

module.exports.headerValidator = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string()
      .required()
      .custom(authValidator)
      .messages({
        'any.required': headerLostsMessage,
        'any.custom': headerLostsMessage,
      }),
  }).unknown(true),
});
