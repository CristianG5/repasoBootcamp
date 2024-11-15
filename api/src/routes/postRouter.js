const {Router} = require('express');
const {getPostsHandlers, createPostsHandlers} = require('../handlers/postHandlers')

const postRouter = Router();


postRouter.get("/", getPostsHandlers);
postRouter.post("/", createPostsHandlers)

module.exports = postRouter;