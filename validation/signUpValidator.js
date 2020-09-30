const { celebrate, Joi } = require('celebrate');
const { passwordValidator } = require('./customValidators');
const {
  badEmailMessage,
  requiredFields,
  passwordTooShortMessage,
  spacesPasswordMessage,
} = require('../constants');

const signUpValidator = celebrate({
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
      .custom(passwordValidator)
      .messages({
        'string.empty': requiredFields.password,
        'any.required': requiredFields.password,
        'string.min': passwordTooShortMessage,
        'any.custom': spacesPasswordMessage,
      }),
    name: Joi.string()
      .required()
      .trim()
      .messages({
        'string.empty': requiredFields.name,
        'any.required': requiredFields.name,
      }),
  }),
});

module.exports = { signUpValidator };
