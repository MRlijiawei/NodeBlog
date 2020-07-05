var hello1 = require('./modules/module');
hello1.setName('BYVoid');
var hello2 = require('./modules/module');
hello2.setName('BYVoid 2');
hello1.sayHello();

var Hello = require('./modules/hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();

// process
console.log(process.argv);
process.stdin.resume();

process.stdin.on('data', function(data) {
	process.stdout.write('read from console: ' + data.toString());
});
// process.nextTick(callback)

// console
console.log('byvoid%diovyb', 1991)

// util工具
var util = require('util');
function Base() {
this.name = 'base';
this.base = 1991;
this.sayHello = function() {
	console.log('Hello ' + this.name);
};
}
Base.prototype.showName = function() {
	console.log(this.name);
};
function Sub() {
	this.name = 'sub';
}
// util.inherits继承
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//util.inspect(object,[showHidden],[depth],[colors])转为字符串
// 其他，format,debug等isXXX等

// events.EventEmitter
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'byvoid', 1991)
// 其他once(),removeListener(),removeAllListeners()，.emit('error')