var math = require("../modulos/funciones.js")
exports.test_add = function (test) {
	test.equal(math.add(1,1),2);
	test.done();
};
exports.test_subtract = function(test) {
	test.equal(math.subtract(4,2),2);
	test.done();
}