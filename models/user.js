const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { requiredFields, invalidEmailOrPasswordMessage } = require('../constants');
const UnauthorizedError = require('../errors/unauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, requiredFields.email],
    unique: true,
    validate: {
      validator(email) {
        return validator.isEmail(email, { allow_utf8_local_part: false });
      },
      message: (props) => `${props.value} не является валидным e-mail адресом!`,
    },
  },
  password: {
    type: String,
    required: [true, requiredFields.password],
    unique: true,
    select: false,
  },
  name: {
    type: String,
    required: [true, requiredFields.name],
    minlength: [2, 'Минимальная длина поля name - 2 символа'],
    maxlength: [30, 'Максимальная длина поля name - 30 символов'],
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(invalidEmailOrPasswordMessage));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(invalidEmailOrPasswordMessage));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
