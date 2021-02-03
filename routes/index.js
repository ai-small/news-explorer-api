const router = require('express').Router();
const signUpRouter = require('./signup');
const signInRouter = require('./signin');
const auth = require('../middlewares/auth');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const logoutRouter = require('./logout');
const notFound = require('./notFound');

router.use('/signin', signInRouter);
router.use('/signup', signUpRouter);

router.use(auth);

router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.use('/logout', logoutRouter);

router.use(notFound);

module.exports = router;
