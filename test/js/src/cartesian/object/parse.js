

var number = require("aureooms-js-number");

var symbol = "i" ;

var parse = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number , symbol ) ).parse ;
var _ = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).complex ;

var t = function (a, b, c) {
	deepEqual(parse(c, 0, c.length), _(a, b), c);
};

test("parse", function () {

	t(0, 0, "");
	t(0, 0, "0");

	t(0, 1, "i");
	t(0, 1, "+i");
	t(0, -1, "-i");

	t(0, 2, "2i");
	t(0, -2, "-2i");

	t(1, 0, "1");
	t(-1, 0, "-1");

	t(1, 1, "1+i");
	t(-1, 1, "-1+i");

	t(1, -1, "1-i");
	t(-1, -1, "-1-i");

	t(1, 2, "1+2i");
	t(-1, 2, "-1+2i");

	t(1, -2, "1-2i");
	t(-1, -2, "-1-2i");

});