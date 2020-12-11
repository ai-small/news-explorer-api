const signInRouter = require('express').Router();
const { login } = require('../controllers/login');
const { signInValidator } = require('../validation/signInValidator');

signInRouter.post('/', signInValidator, login);

module.exports = signInRouter;
