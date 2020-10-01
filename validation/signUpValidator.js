const { celebrate, Joi } = require('celebrate');
const { passwordValidator } = require('./customValidators');
const {
  validationFailedMessages,
  requiredFields,
} = require('../constants');

const signUpValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2 })
      .messages({
        'string.empty': requiredFields.email,
        'string.email': validationFailedMessages.badEmailMessage,
        'any.required': requiredFields.email,
      }),
    password: Joi.string()
      .required()
      .min(8)
      .custom(passwordValidator)
      .messages({
        'string.empty': requiredFields.password,
        'any.required': requiredFields.password,
        'string.min': validationFailedMessages.passwordTooShortMessage,
        'any.custom': validationFailedMessages.spacesPasswordMessage,
      }),
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .trim()
      .messages({
        'string.empty': requiredFields.name,
        'any.required': requiredFields.name,
        'string.min': validationFailedMessages.badUserName,
        'string.max': validationFailedMessages.badUserName,
      }),
  }),
});

module.exports = { signUpValidator };
