var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// connecting to mongoDB
mongoose.connect("mongodb://localhost:27017/Schemes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Successfully Connected to DB"))
    .catch((e) => console.log(e))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/schemes');
var galleryRouter = require('./routes/gallery')

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

app.use('/', indexRouter);
app.use('/loadSchemes', usersRouter);
app.use('/gallery', galleryRouter);



app.listen(6098, () => {
    console.log(`Server is up and running ${6098}`)
})

module.exports = app;
