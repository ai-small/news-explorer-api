const { celebrate, Joi } = require('celebrate');
const { passwordValidator } = require('./customValidators');
const {
  requiredFields,
  validationFailedMessages,
} = require('../constants');

const signInValidator = celebrate({
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
      .messages({
        'string.empty': requiredFields.password,
        'any.required': requiredFields.password,
        'string.min': validationFailedMessages.badPasswordMessage,
      })
      .custom(passwordValidator),
  }),
});

module.exports = { signInValidator };
