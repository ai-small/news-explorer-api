require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const celebrateErrorHandler = require('./middlewares/celebrateErrorHandler');
const {
  PORT,
  DATABASE_URL,
  MONGOOSE_CONFIG,
  limiter,
} = require('./config');

const app = express();

mongoose.connect(DATABASE_URL, MONGOOSE_CONFIG);

app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);
app.use('/', routes);
app.use(errorLogger);

app.use(celebrateErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
});
