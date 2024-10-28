const {Router} = require('express');
const {getUsersHandlers} = require('../handlers/usersHandlers')

const usersRouter = Router();


usersRouter.get("/", getUsersHandlers)

module.exports = usersRouter;