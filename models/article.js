const mongoose = require('mongoose');
const validator = require('validator');
const { requiredFields } = require('../constants');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: [true, requiredFields.keyword],
  },
  title: {
    type: String,
    required: [true, requiredFields.title],
  },
  text: {
    type: String,
    required: [true, requiredFields.text],
  },
  date: {
    type: String,
    required: [true, requiredFields.date],
  },
  source: {
    type: String,
    required: [true, requiredFields.source],
  },
  link: {
    type: String,
    required: [true, requiredFields.links],
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
      message: (props) => `${props.value} не является валидной ссылкой!`,
    },
  },
  image: {
    type: String,
    required: [true, requiredFields.links],
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
      message: (props) => `${props.value} не является валидной ссылкой!`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
