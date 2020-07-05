function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	};
	this.sayHello = function() {
		console.log('Hello ' + name);
	};
};
// exports.Hello = Hello--此写法相当于抛出的是{hello：hello}，而不是直接抛出hello
module.exports = Hello;