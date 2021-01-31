// const jwt = require('jsonwebtoken');
// const { NODE_ENV, JWT_SECRET } = require('../config');
// const User = require('../models/user');
const { logoutSuccessMessage } = require('../constants');

const logout = (req, res) => {
  res
    .clearCookie('jwt', token, {
      maxAge: 3600000 * 24 * 7,
      httpOnly: true,
      sameSite: 'none',
      // secure: true,
    })
    .status(200)
    .send({ message: logoutSuccessMessage });
};

module.exports = { logout };
