const { celebrate, Joi } = require('celebrate');
const { passwordValidator } = require('./customValidators');
const {
  requiredFields,
  badEmailMessage,
  badPasswordMessage,
} = require('../constants');

const signInValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2 })
      .messages({
        'string.empty': requiredFields.email,
        'string.email': badEmailMessage,
        'any.required': requiredFields.email,
      }),
    password: Joi.string()
      .required()
      .min(8)
      .messages({
        'string.empty': requiredFields.password,
        'any.required': requiredFields.password,
        'string.min': badPasswordMessage,
      })
      .custom(passwordValidator),
  }),
});

module.exports = { signInValidator };
