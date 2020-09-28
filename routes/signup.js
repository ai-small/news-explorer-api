const signUpRouter = require('express').Router();
const { createUser } = require('../controllers/createUser');
// const { signUpValidator } = require('../validation/signUpValidator');

// signUpRouter.post('/', signUpValidator, createUser); Добавить валидацию!
signUpRouter.post('/', createUser);

module.exports = signUpRouter;
