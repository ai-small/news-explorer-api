const userNotFoundMessage = 'Пользователь не найден!';
const pageNotFoundMessage = 'Запрашиваемый ресурс не найден';

const authIsSuccessMessage = 'Авторизация прошла успешно';
const unauthorizedMessage = 'Необходима авторизация';

const articlesNotFoundMessage = 'У вас пока нет сохраненных статей';
const articleNotFoundMessage = 'Статья не найдена';
const articleCanNotDeleteMessage = 'Нельзя удалить чужую статью!';

const castErrorMessage = 'Такой id не найден. Проверьте запрос';

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

const badLinkMessage = 'Не валидный url-адрес';
const badObjectId = 'Не валидный id';
const badEmailMessage = 'Не валидный e-mail';

const passwordTooShortMessage = 'Слишком короткий пароль';
const badPasswordMessage = 'Проверьте пароль';
const spacesPasswordMessage = 'Пароль не может состоять из пробелов';

module.exports = {
  userNotFoundMessage,
  pageNotFoundMessage,
  authIsSuccessMessage,
  unauthorizedMessage,
  articlesNotFoundMessage,
  articleNotFoundMessage,
  articleCanNotDeleteMessage,
  castErrorMessage,
  requiredFields,
  badLinkMessage,
  badObjectId,
  badEmailMessage,
  passwordTooShortMessage,
  badPasswordMessage,
  spacesPasswordMessage,
};
