# Дипломный проект NewExplorer (бэкенд)

Версия 0.0.1

## О проекте:

**NewExplorer** - сервис, в котором можно найти новости по запросу и сохранить в личном кабинете. API для аутентификации пользователей и сохранения статей. В проекте два разных бэкенда: 
* API для аутентификации пользователей и сохранения статей;
* внешний API (NewsAPI).
Реализовано логирование. 

## Роуты

В API 6 роутов:
* `POST /signup` (создаёт пользователя с переданными в теле email, password и name);
* `POST /signin` (проверяет переданные в теле почту и пароль и возвращает JWT);
* `GET /users/me` (возвращает email и имя пользователя);
* `GET /articles` (возвращает все сохранённые пользователем статьи);
* `POST /articles` (создаёт статью с переданными в теле keyword, title, text, date, source, link и image);
* `DELETE /articles/articleId` (удаляет сохранённую статью  по _id).

# Как найти

Публичный IP-адрес сервера: xxx.xxx.xxx.xxx

Домен: https://api.ai-small.tk/ 