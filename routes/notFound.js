const NotFoundError = require('../errors/notFoundError');
const { pageNotFoundMessage } = require('../constants');

function notFound() {
  throw new NotFoundError(pageNotFoundMessage);
}

module.exports = notFound;
