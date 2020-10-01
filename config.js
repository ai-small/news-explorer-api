const rateLimit = require('express-rate-limit');

const { PORT = 3000, DATABASE_URL, JWT_SECRET = 'dev-secret' } = process.env;

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
  PORT,
  DATABASE_URL,
  JWT_SECRET,
  MONGOOSE_CONFIG,
  limiter,
};
