const express = require('express');
const app = express();

const user = require('./user/controller');
const demo = require('./demo/controller');
const project = require('./project/controller');
const categories = require('./categories/controller');

app.use('/user', user);
app.use('/demo', demo);
app.use('/project', project);
app.use('/category', categories);

module.exports = app;