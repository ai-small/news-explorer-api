const { celebrate, Joi } = require('celebrate');
const { urlValidator } = require('./customValidators');
const { requiredFields, validationFailedMessages } = require('../constants');

const createArticleValidator = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string()
      .required()
      .trim()
      .messages({
        'any.required': requiredFields.keyword,
        'string.empty': requiredFields.keyword,
      }),
    title: Joi.string()
      .required()
      .trim()
      .messages({
        'any.required': requiredFields.title,
        'string.empty': requiredFields.title,
      }),
    text: Joi.string()
      .required()
      .trim()
      .messages({
        'any.required': requiredFields.text,
        'string.empty': requiredFields.text,
      }),
    date: Joi.string()
      .required()
      .messages({
        'any.required': requiredFields.date,
        'string.empty': requiredFields.date,
      }),
    datetime: Joi.string()
      .required()
      .messages({
        'any.required': requiredFields.datetime,
        'string.empty': requiredFields.datetime,
      }),
    source: Joi.string()
      .required()
      .trim()
      .messages({
        'any.required': requiredFields.source,
        'string.empty': requiredFields.source,
      }),
    link: Joi.string()
      .required()
      .custom(urlValidator)
      .messages({
        'any.required': requiredFields.link,
        'string.empty': requiredFields.link,
        'any.custom': validationFailedMessages.badLinkMessage,

      }),
    image: Joi.string()
      .required()
      .custom(urlValidator)
      .messages({
        'any.required': requiredFields.image,
        'string.empty': requiredFields.image,
        'any.custom': validationFailedMessages.badLinkMessage,
      }),
  }),
});

const articleIdValidator = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string()
      .hex()
      .length(24)
      .messages({
        'string.hex': validationFailedMessages.badObjectIdMessage,
        'string.length': validationFailedMessages.badObjectIdMessage,
      }),
  }),
});

module.exports = { createArticleValidator, articleIdValidator };
