require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const signUpRouter = require('./routes/signup');
// const signInRouter = require('./routes/signin');
const router = require('./routes/index');
// const cardsRouter = require('./routes/cards');
// const notFound = require('./routes/notFound');
// const auth = require('./middlewares/auth');
// const errorHandler = require('./middlewares/errorHandler');
// const { requestLogger, errorLogger } = require('./middlewares/logger');
// const celebrateErrorHandler = require('./middlewares/celebrateErrorHandler');
// const { headerValidator } = require('./validation/headerValidator');

const app = express();
const { PORT = 3000 } = process.env;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

mongoose.connect('mongodb://localhost:27017/news-explorer-db', {
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

app.use('/', router);

// app.use(errorLogger);

// app.use(celebrateErrorHandler);
// app.use(errorHandler);

app.listen(PORT, () => {

});
