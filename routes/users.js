const usersRouter = require('express').Router();
const { getUser } = require('../controllers/users');
// const { getUserByIdValidator, updateUserValidator, updateAvatarValidator } =
// require('../validation/usersRoutesValidation');

usersRouter.get('/me', getUser);
// usersRouter.get('/:id', getUserByIdValidator, getUserById);

// usersRouter.patch('/me', updateUserValidator, updateUser);
// usersRouter.patch('/me/avatar', updateAvatarValidator, updateAvatar);

module.exports = usersRouter;
