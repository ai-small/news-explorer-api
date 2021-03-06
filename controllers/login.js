const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../config');
const User = require('../models/user');
const { authIsSuccessMessage } = require('../constants');

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );

      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        })
        .status(200)
        .send({ message: authIsSuccessMessage, name: user.name, email: user.email })
        .end();
    })
    .catch(next);
};

module.exports = { login };
