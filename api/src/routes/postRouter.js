const {Router} = require('express');
const {getPostsHandlers} = require('../handlers/postHandlers')

const postRouter = Router();


postRouter.get("/", getPostsHandlers);

module.exports = postRouter;