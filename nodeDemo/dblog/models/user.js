const mongodb = require('./db')
const { mountpath } = require('../app')

function User(user) {
    this.name = user.name
    this.password = user.password
}

User.prototype.save = function(callback) {
    var user = {
        name: this.name,
        password: this.password
    }
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err)
        }
        db.collection('users', function(err, collection) {
            if (err) {
                mongodb.close()
                return callback(err)
            }
            // user集合，为name添加索引
            collection.ensureIndex('name', {unique: true})
            collection.insert(user, {safe: true}, function(err, user) {
                mongodb.close()
                callback(err, user)
            })
        })
    })
}
User.prototype.get = function(username, callback) {
    var user = {
        name: this.name,
        password: this.password
    }
    mongodb.open(function(err, db) {
        if (err) {
            return callback(err)
        }
        db.collection('users', function(err, collection) {
            if (err) {
                mongodb.close()
                return callback(err)
            }
            collection.findOne({name: username}, function(err, doc) {
                mongodb.close()
                if (doc) {
                    var user = new User(doc)
                    callback(err, user)
                } else {
                    callback(err, null)
                }
            })
        })
    })
}

module.exports = User