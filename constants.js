const userNotFoundMessage = 'Пользователь не найден!';
const userDuplicateEmailMessage = 'Пользователь с таким e-mail уже существует';
const pageNotFoundMessage = 'Запрашиваемый ресурс не найден';

const authIsSuccessMessage = 'Авторизация прошла успешно';
const unauthorizedMessage = 'Необходима авторизация';
const headerLostsMessage = 'Некорректный заголовок или заголовок отсутствует. Авторизация завершилась неуспешно';
const invalidEmailOrPasswordMessage = 'Неправильные почта или пароль';

const articlesNotFoundMessage = 'У вас пока нет сохраненных статей';
const articleNotFoundMessage = 'Статья не найдена';
const articleCanNotDeleteMessage = 'Нельзя удалить чужую статью!';

const serverErrorMessage = 'На сервере произошла ошибка';

const requiredFields = {
  keyword: 'Поле "keyword" должно быть заполнено',
  title: 'Поле "title" должно быть заполнено',
  text: 'Поле "text" должно быть заполнено',
  date: 'Поле "date" должно быть заполнено',
  source: 'Поле "source" должно быть заполнено',
  link: 'Поле "link" должно быть заполнено',
  image: 'Поле "image" должно быть заполнено',
  email: 'Поле "email" должно быть заполнено',
  password: 'Поле "password" должно быть заполнено',
  name: 'Поле "name" должно быть заполнено',
};

const validationFailedMessages = {
  castErrorMessage: 'Такой id не найден. Проверьте запрос',
  badLinkMessage: 'Не валидный url-адрес',
  badObjectIdMessage: 'Не валидный id',
  badEmailMessage: 'Не валидный e-mail',
  passwordTooShortMessage: 'Слишком короткий пароль',
  badPasswordMessage: 'Проверьте пароль',
  spacesPasswordMessage: 'Пароль не может состоять из пробелов',
  badUserName: 'Имя пользователя должно содержать от 2 до 30 символов',
};

module.exports = {
  userNotFoundMessage,
  userDuplicateEmailMessage,
  pageNotFoundMessage,
  authIsSuccessMessage,
  unauthorizedMessage,
  headerLostsMessage,
  articlesNotFoundMessage,
  articleNotFoundMessage,
  articleCanNotDeleteMessage,
  serverErrorMessage,
  requiredFields,
  validationFailedMessages,
  invalidEmailOrPasswordMessage,
};
