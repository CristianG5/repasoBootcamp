const {Router} = require('express');
const {getUsersHandlers, getDetalaisHandlers, createUsersHandlers} = require('../handlers/usersHandlers')

const usersRouter = Router();

usersRouter.get("/", getUsersHandlers);
usersRouter.get("/:id", getDetalaisHandlers);
usersRouter.post("/", createUsersHandlers)

module.exports = usersRouter;