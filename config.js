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

const CORS_CONFIG = {
  origin: [
    'http://localhost:8080',
    'https://nws-explorer.tk',
    'https://www.nws-explorer.tk',
    'https://ai-small.github.io',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  optionsSuccessStatus: 200,
  allowedHeaders: [
    'Content-Type',
    'origin',
    'Authorization',
    'cookie',
  ],
  credentials: true,
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
  CORS_CONFIG,
  limiter,
};
