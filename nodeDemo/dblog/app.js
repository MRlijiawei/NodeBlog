var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var MongoStore = require('connect-mongo')
var settings = require('./settings')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req, res, next){
//   var error = req.flash('error')
//   var success = req.flash('success')
//   res.locals.user = req.session.user
//   res.locals.error = error.length?error:null
//   res.locals.success = success || null
//   next()
// })

app.use('/', indexRouter);
//app.use('/hello', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 会话
//app.configure(function () {
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')//ejs
//app.use(express.bodyParser())
//app.usr(express.methodOverride())
//app.use(express.cookieParser())
// app.use(express.session({
//   secret: settings.cookieSecret,
//   store: new MongoStore({
//     db: settings.db
//   })
// }))
// app.use(express.router(indexRouter))
// 反向代理后不需要下边静态文件路径
app.use(express.static(__dirname + '/public'))
//})
// app.dynamicHelpers({
//   user: function (req, res) {
//     return req.session.user;
//   },
//   error: function (req, res) {
//     var err = req.flash('error');
//     if (err.length)
//       return err;
//     else
//       return null;
//   },
//   success: function (req, res) {
//     var succ = req.flash('success');
//     if (succ.length)
//       return succ;
//     else
//       return null;
//   },
// });
// 错误日志
var fs = require('fs');
var accessLogfile = fs.createWriteStream('access.log', {flags: 'a'});
var errorLogfile = fs.createWriteStream('error.log', {flags: 'a'});
app.use(express.logger({stream: accessLogfile}));
app.configure('production', function(){
	app.error(function (err, req, res, next) {
		var meta = '[' + new Date() + '] ' + req.url + '\n';
		errorLogfile.write(meta + err.stack + '\n');
		next();
	});
});

module.exports = app;

    // "ejs": ">= 0.0.1",