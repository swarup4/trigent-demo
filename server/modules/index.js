const express = require('express');
const app = express();

const user = require('./user/controller');
const order = require('./order/controller');
const project = require('./project/controller');

app.use('/user', user);
app.use('/order', order);
app.use('/project', project);

module.exports = app;