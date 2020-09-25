const router = require('express').Router();
const usersRouter = require('./users');

// app.use('/signin', signInRouter);
// app.use('/signup', signUpRouter);

// app.use(headerValidator, auth);

router.use('/', usersRouter);

// app.use('/cards', cardsRouter);
// app.use(notFound);

module.exports = router;