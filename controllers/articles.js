const Article = require('../models/article');
const NotFoundError = require('../errors/notFoundError');
const ForbiddenError = require('../errors/forbidden');
const { articlesNotFoundMessage, articleNotFoundMessage, articleCanNotDeleteMessage } = require('../constants');

const getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .orFail(() => new NotFoundError(articlesNotFoundMessage))
    .then((articles) => res.status(200).send({ articles }))
    .catch(next);
};

const createArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;
  const owner = req.user._id;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner,
  })
    .then((article) => res.status(201).send({
      keyword: article.keyword,
      title: article.title,
      text: article.text,
      date: article.date,
      source: article.source,
      link: article.link,
      image: article.image,
    }))
    .catch(next);
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .orFail(() => new NotFoundError(articleNotFoundMessage))
    .populate('owner')
    .then((articleData) => {
      if (articleData.owner._id.toString() !== req.user._id) {
        return Promise.reject(new ForbiddenError(articleCanNotDeleteMessage));
      }
      return articleData;
    })
    .then(() => {
      Article.findByIdAndRemove(req.params.articleId)
        .orFail(() => new NotFoundError(articleNotFoundMessage))
        .then((article) => res.status(200).send({ article }))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
