'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.$0 = $0;
exports.$1 = $1;
exports.parse = parse;
exports.stringify = stringify;
exports.add = add;
exports.iadd = iadd;
exports.sub = sub;
exports.isub = isub;
exports.mul = mul;
exports.imul = imul;
exports.pow = pow;
exports.ipow = ipow;
exports.div = div;
exports.idiv = idiv;
exports.mod = mod;
exports.imod = imod;

var _COMPLEX_DEFAULT_DISPLAY = require('./COMPLEX_DEFAULT_DISPLAY');

var _COMPLEX_DEFAULT_DISPLAY2 = _interopRequireDefault(_COMPLEX_DEFAULT_DISPLAY);

var _CC = require('./CC');

var _CC2 = _interopRequireDefault(_CC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $0() {
	return _CC2.default.$0();
}

function $1() {
	return _CC2.default.$1();
}

function parse(object) {
	var representation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

	return _CC2.default.from(object, representation);
}

function stringify(complex) {
	var representation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _COMPLEX_DEFAULT_DISPLAY2.default;

	return complex.toString(representation);
}

function add(first, second) {
	return first.add(second);
}

function iadd(first, second) {
	return first.iadd(second);
}

function sub(first, second) {
	return first.sub(second);
}

function isub(first, second) {
	return first.isub(second);
}

function mul(first, second) {
	return first.mul(second);
}

function imul(first, second) {
	return first.imul(second);
}

function pow(first, second) {
	return first.pow(second);
}

function ipow(first, second) {
	return first.ipow(second);
}

function div(first, second) {
	return first.div(second);
}

function idiv(first, second) {
	return first.idiv(second);
}

function mod(first, second) {
	return first.mod(second);
}

function imod(first, second) {
	return first.imod(second);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbIiQwIiwiJDEiLCJwYXJzZSIsInN0cmluZ2lmeSIsImFkZCIsImlhZGQiLCJzdWIiLCJpc3ViIiwibXVsIiwiaW11bCIsInBvdyIsImlwb3ciLCJkaXYiLCJpZGl2IiwibW9kIiwiaW1vZCIsIm9iamVjdCIsInJlcHJlc2VudGF0aW9uIiwidW5kZWZpbmVkIiwiZnJvbSIsImNvbXBsZXgiLCJ0b1N0cmluZyIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdnQkEsRSxHQUFBQSxFO1FBSUFDLEUsR0FBQUEsRTtRQUlBQyxLLEdBQUFBLEs7UUFJQUMsUyxHQUFBQSxTO1FBSUFDLEcsR0FBQUEsRztRQUlBQyxJLEdBQUFBLEk7UUFJQUMsRyxHQUFBQSxHO1FBSUFDLEksR0FBQUEsSTtRQUlBQyxHLEdBQUFBLEc7UUFJQUMsSSxHQUFBQSxJO1FBSUFDLEcsR0FBQUEsRztRQUlBQyxJLEdBQUFBLEk7UUFJQUMsRyxHQUFBQSxHO1FBSUFDLEksR0FBQUEsSTtRQUlBQyxHLEdBQUFBLEc7UUFJQUMsSSxHQUFBQSxJOztBQS9EaEI7Ozs7QUFDQTs7Ozs7O0FBRU8sU0FBU2YsRUFBVCxHQUFnQjtBQUN0QixRQUFPLGFBQUdBLEVBQUgsRUFBUDtBQUNBOztBQUVNLFNBQVNDLEVBQVQsR0FBZ0I7QUFDdEIsUUFBTyxhQUFHQSxFQUFILEVBQVA7QUFDQTs7QUFFTSxTQUFTQyxLQUFULENBQWlCYyxNQUFqQixFQUF1RDtBQUFBLEtBQTdCQyxjQUE2Qix1RUFBWkMsU0FBWTs7QUFDN0QsUUFBTyxhQUFHQyxJQUFILENBQVNILE1BQVQsRUFBa0JDLGNBQWxCLENBQVA7QUFDQTs7QUFFTSxTQUFTZCxTQUFULENBQXFCaUIsT0FBckIsRUFBMEU7QUFBQSxLQUEzQ0gsY0FBMkM7O0FBQ2hGLFFBQU9HLFFBQVFDLFFBQVIsQ0FBa0JKLGNBQWxCLENBQVA7QUFDQTs7QUFFTSxTQUFTYixHQUFULENBQWVrQixLQUFmLEVBQXVCQyxNQUF2QixFQUFnQztBQUN0QyxRQUFPRCxNQUFNbEIsR0FBTixDQUFVbUIsTUFBVixDQUFQO0FBQ0E7O0FBRU0sU0FBU2xCLElBQVQsQ0FBZ0JpQixLQUFoQixFQUF3QkMsTUFBeEIsRUFBaUM7QUFDdkMsUUFBT0QsTUFBTWpCLElBQU4sQ0FBV2tCLE1BQVgsQ0FBUDtBQUNBOztBQUVNLFNBQVNqQixHQUFULENBQWVnQixLQUFmLEVBQXVCQyxNQUF2QixFQUFnQztBQUN0QyxRQUFPRCxNQUFNaEIsR0FBTixDQUFVaUIsTUFBVixDQUFQO0FBQ0E7O0FBRU0sU0FBU2hCLElBQVQsQ0FBZ0JlLEtBQWhCLEVBQXdCQyxNQUF4QixFQUFpQztBQUN2QyxRQUFPRCxNQUFNZixJQUFOLENBQVdnQixNQUFYLENBQVA7QUFDQTs7QUFFTSxTQUFTZixHQUFULENBQWVjLEtBQWYsRUFBdUJDLE1BQXZCLEVBQWdDO0FBQ3RDLFFBQU9ELE1BQU1kLEdBQU4sQ0FBVWUsTUFBVixDQUFQO0FBQ0E7O0FBRU0sU0FBU2QsSUFBVCxDQUFnQmEsS0FBaEIsRUFBd0JDLE1BQXhCLEVBQWlDO0FBQ3ZDLFFBQU9ELE1BQU1iLElBQU4sQ0FBV2MsTUFBWCxDQUFQO0FBQ0E7O0FBRU0sU0FBU2IsR0FBVCxDQUFlWSxLQUFmLEVBQXVCQyxNQUF2QixFQUFnQztBQUN0QyxRQUFPRCxNQUFNWixHQUFOLENBQVVhLE1BQVYsQ0FBUDtBQUNBOztBQUVNLFNBQVNaLElBQVQsQ0FBZ0JXLEtBQWhCLEVBQXdCQyxNQUF4QixFQUFpQztBQUN2QyxRQUFPRCxNQUFNWCxJQUFOLENBQVdZLE1BQVgsQ0FBUDtBQUNBOztBQUVNLFNBQVNYLEdBQVQsQ0FBZVUsS0FBZixFQUF1QkMsTUFBdkIsRUFBZ0M7QUFDdEMsUUFBT0QsTUFBTVYsR0FBTixDQUFVVyxNQUFWLENBQVA7QUFDQTs7QUFFTSxTQUFTVixJQUFULENBQWdCUyxLQUFoQixFQUF3QkMsTUFBeEIsRUFBaUM7QUFDdkMsUUFBT0QsTUFBTVQsSUFBTixDQUFXVSxNQUFYLENBQVA7QUFDQTs7QUFFTSxTQUFTVCxHQUFULENBQWVRLEtBQWYsRUFBdUJDLE1BQXZCLEVBQWdDO0FBQ3RDLFFBQU9ELE1BQU1SLEdBQU4sQ0FBVVMsTUFBVixDQUFQO0FBQ0E7O0FBRU0sU0FBU1IsSUFBVCxDQUFnQk8sS0FBaEIsRUFBd0JDLE1BQXhCLEVBQWlDO0FBQ3ZDLFFBQU9ELE1BQU1QLElBQU4sQ0FBV1EsTUFBWCxDQUFQO0FBQ0EiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDT01QTEVYX0RFRkFVTFRfRElTUExBWSBmcm9tICcuL0NPTVBMRVhfREVGQVVMVF9ESVNQTEFZJyA7XG5pbXBvcnQgQ0MgZnJvbSAnLi9DQycgO1xuXG5leHBvcnQgZnVuY3Rpb24gJDAgKCApIHtcblx0cmV0dXJuIENDLiQwKCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJDEgKCApIHtcblx0cmV0dXJuIENDLiQxKCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKCBvYmplY3QgLCByZXByZXNlbnRhdGlvbiA9IHVuZGVmaW5lZCApIHtcblx0cmV0dXJuIENDLmZyb20oIG9iamVjdCAsIHJlcHJlc2VudGF0aW9uICkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5ICggY29tcGxleCAsIHJlcHJlc2VudGF0aW9uID0gQ09NUExFWF9ERUZBVUxUX0RJU1BMQVkgKSB7XG5cdHJldHVybiBjb21wbGV4LnRvU3RyaW5nKCByZXByZXNlbnRhdGlvbiApIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuYWRkKHNlY29uZCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWFkZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuaWFkZChzZWNvbmQpIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3Quc3ViKHNlY29uZCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXN1YiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuaXN1YihzZWNvbmQpIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QubXVsKHNlY29uZCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW11bCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuaW11bChzZWNvbmQpIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvdyAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QucG93KHNlY29uZCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXBvdyAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuaXBvdyhzZWNvbmQpIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuZGl2KHNlY29uZCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRpdiAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuaWRpdihzZWNvbmQpIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QubW9kKHNlY29uZCkgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1vZCAoIGZpcnN0ICwgc2Vjb25kICkge1xuXHRyZXR1cm4gZmlyc3QuaW1vZChzZWNvbmQpIDtcbn1cbiJdfQ==