require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');
// const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
// const { requestLogger, errorLogger } = require('./middlewares/logger');
// const celebrateErrorHandler = require('./middlewares/celebrateErrorHandler');
// const { headerValidator } = require('./validation/headerValidator');

const app = express();
const { PORT = 3000, DATABASE_URL } = process.env;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(requestLogger);

app.use('/', routes);

// app.use(errorLogger);

// app.use(celebrateErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер запущен, port: ${PORT}, database-url: ${DATABASE_URL}`);
});
