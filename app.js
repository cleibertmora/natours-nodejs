const express = require('express');
const morgan  = require('morgan');

const app = express();


// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Creating a new Middleware

// app.use((req, res, next) => {
//     console.log('Hello World!');
//     next();
// });

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

// ROUTES TOURS

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// ROUTES USERS

module.exports = app;