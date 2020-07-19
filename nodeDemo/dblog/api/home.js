var crypto = require('crypto')
const User = require('../models/user')
// reg
//export default regist = function(req, res) {
module.exports = {
    regist: function (req, res) {
            //检验用户两次输入的口令是否一致
        if (req.body['password-repeat'] != req.body['password']) {
            // app.js中session加载方式不对，暂注释
            //req.flash('error', '两次输入的口令不一致');
            return res.redirect('/reg');
        }
        //生成口令的散列值
        var md5 = crypto.createHash('md5');
        var password = md5.update(req.body.password).digest('base64');
        var newUser = new User({
            name: req.body.username,
            password: password,
        });
        //检查用户名是否已经存在
        newUser.get(newUser.name, function (err, user) {
            if (user)
            err = 'Username already exists.';
            if (err) {
            //req.flash('error', err);
            return res.redirect('/reg');
            }
            //如果不存在则新增用户
            newUser.save(function (err) {
            if (err) {
                //req.flash('error', err);
                return res.redirect('/reg');
            }
            req.session.user = newUser;
            //req.flash('success', '注册成功');
            res.redirect('/');
            });
        });
    }
}