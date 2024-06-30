const express = require("express");
const app = express();
const router = require("../routes/index");
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(router);


module.exports = app;