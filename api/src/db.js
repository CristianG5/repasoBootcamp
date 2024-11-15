const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config();

const UsersModel = require('./models/UsersModel');
const PostModel = require('./models/PostsModel');

const {DB_USER, DB_PASSWORD, DB_HOST,DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`, {
    logging: false
});

UsersModel(sequelize);
PostModel(sequelize);

const {User, Post} = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);


module.exports = {
    ...sequelize.models,
    conn: sequelize
}