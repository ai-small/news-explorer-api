const rateLimit = require('express-rate-limit');

const {
  NODE_ENV,
  PORT = 3000,
  DATABASE_URL = 'mongodb://localhost:27017/news-explorer-db',
  JWT_SECRET = 'dev-secret',
} = process.env;

const MONGOOSE_CONFIG = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = {
  NODE_ENV,
  PORT,
  DATABASE_URL,
  JWT_SECRET,
  MONGOOSE_CONFIG,
  limiter,
};
