const signInRouter = require('express').Router();
const { login } = require('../controllers/login');
// const { signInValidator } = require('../validation/signInValidator');

// signinRouter.post('/', signInValidator, login); VALIDATION!
signInRouter.post('/', login);

module.exports = signInRouter;
