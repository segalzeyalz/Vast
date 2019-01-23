var express = require('express');
var app = express();
var api = require('../routes/api');
var path  = require('path');
var db = require('./database');

var port = process.env.PORT || 3000;

app.use('/api',api)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
next();
});
// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// index route
app.get('/', (req,res) => {
  res.send('hello world');
});

module.exports = app;
