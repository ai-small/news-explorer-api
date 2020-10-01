const { castErrorMessage, userDuplicateEmailMessage } = require('../constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  if (err.name === 'CastError') {
    res.status(400).send({ message: castErrorMessage });
    return;
  }

  if (err.code === 11000) {
    res.status(409).send({ message: userDuplicateEmailMessage });
    return;
  }

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });

  next();
};
