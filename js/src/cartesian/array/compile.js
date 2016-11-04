
const compile = function ( {

	$0 , $1 , root2n , iroot2n ,
	add , sub , mul , div ,
	imul ,
	div2 ,
	abs , arg ,
	con ,
	parse , stringify

} , symbol ) {

	return {

		"complex" : exports.complex ,
		"$0" : exports.$( $0 ) ,
		"$1" : exports.$( $1 ) ,
		"root2n" : exports.root2n( root2n ) ,
		"iroot2n" : exports.root2n( iroot2n ) ,
		"add" : exports.binary( add ) ,
		"sub" : exports.binary( sub ) ,
		"mul" : exports.binary( mul ) ,
		"imul" : exports.binary( imul ) ,
		"div" : exports.binary( div ) ,
		"div2" : exports.unary( div2 ) ,
		"abs" : exports.unary( abs ) ,
		"arg" : exports.unary( arg ) ,
		"con" : exports.unary( con ) ,
		"parse" : exports.parse( parse ) ,
		"stringify" : exports.stringify ( stringify )

	} ;

} ;

exports.compile = compile ;