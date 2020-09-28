const router = require('express').Router();
const signUpRouter = require('./signup');
const signInRouter = require('./signin');
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const notFound = require('./notFound');

router.use('/signin', signInRouter);
router.use('/signup', signUpRouter);

// router.use(headerValidator, auth);
router.use(auth);

router.use('/users', usersRouter);
router.use('/articles', articlesRouter);

router.use(notFound);

module.exports = router;
