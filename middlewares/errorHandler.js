const { validationFailedMessages, userDuplicateEmailMessage, serverErrorMessage } = require('../constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  if (err.message.includes('не является валидной ссылкой')) {
    res.status(400).send({ message: validationFailedMessages.badLinkMessage });
    return;
  }

  if (err.name === 'CastError') {
    res.status(400).send({ message: validationFailedMessages.castErrorMessage });
    return;
  }

  if (err.code === 11000) {
    res.status(409).send({ message: userDuplicateEmailMessage });
    return;
  }

  res.status(statusCode).send({
    message: statusCode === 500
      ? serverErrorMessage
      : message,
  });

  next();
};
