const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter');

const app = express();

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('Middleware');
//     next();
// })
app.use(mainRouter);


module.exports = app;