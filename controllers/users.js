const User = require('../models/user');
const NotFoundError = require('../errors/notFoundError');
const { userNotFoundMessage } = require('../constants');

const getUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => new NotFoundError(userNotFoundMessage))
    .then((user) => res.status(200).send({
      email: user.email,
      name: user.name,
    }))
    .catch(next);
};

module.exports = { getUser };
