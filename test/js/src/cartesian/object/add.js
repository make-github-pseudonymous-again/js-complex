
var format = require("util").format ;

var number = require("aureooms-js-number");

var random = require("aureooms-js-random");

var add = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).add ;
var _ = complex.cartesian.object.compile( complex.cartesian.kernel.compile( number ) ).complex ;

var n = 100;

var range = Math.pow(2, 31);

test( "add" , function ( ) {

for (var i = 0; i < n; ++i) {

	var a = random.randint(0, range);
	var b = random.randint(0, range);
	var c = random.randint(0, range);
	var d = random.randint(0, range);
	var e = a + c;
	var f = b + d;

	var tmp = add( _( a , b ) , _( c , d ) );

	var real = tmp.real;
	var img = tmp.img;

	deepEqual(real, e, format("%d + %d === %d", a, c, e));
	deepEqual(img, f, format("%d + %d === %d", b, d, f));
}

} ) ;