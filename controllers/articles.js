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
    datetime,
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
    datetime,
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
      datetime: article.datetime,
      source: article.source,
      link: article.link,
      image: article.image,
      id: article._id,
    }))
    .catch(next);
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .orFail(() => new NotFoundError(articleNotFoundMessage))
    .populate('owner', '_id')
    .then((articleData) => {
      if (articleData.owner._id.toString() !== req.user._id) {
        throw new ForbiddenError(articleCanNotDeleteMessage);
      }
      return articleData;
    })
    .then((articleData) => {
      Article.deleteOne({ _id: articleData._id })
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
