const articlesRouter = require('express').Router();
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { createArticleValidator, articleIdValidator } = require('../validation/articlesRoutesValidation');

articlesRouter.get('/', getArticles);
articlesRouter.post('/', createArticleValidator, createArticle);
articlesRouter.delete('/:articleId', articleIdValidator, deleteArticle);

module.exports = articlesRouter;
