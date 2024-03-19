const express = require('express');
const app = express();

const user = require('./user/controller');
const demo = require('./demo/controller');
const project = require('./project/controller');

app.use('/user', user);
app.use('/demo', demo);
app.use('/project', project);

module.exports = app;