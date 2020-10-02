const bcrypt = require('bcryptjs');
const User = require('../models/user');

const createUser = (req, res, next) => {
  const {
    email,
    password,
    name,
  } = req.body;

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => res.status(201).send({
      name: user.name,
      email: user.email,
    }))
    .catch(next);
};

module.exports = { createUser };
