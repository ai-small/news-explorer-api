const { castErrorMessage } = require('../constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  // console.log(err.message, err.code, err.name);

  if (err.name === 'ValidationError') {
    res.status(400).send({ message: err.message });
    return;
  }

  if (err.name === 'CastError') {
    res.status(400).send({ message: castErrorMessage });
    return;
  }

  // if (err.message.includes('of null')) {
  //   res.status(404).send({ message: 'Card not found' });
  //   return;
  // }

  if (err.code === 11000) {
    res.status(409).send({ message: err.message });
    return;
  }

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });

  next();
};
