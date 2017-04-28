var test = testing();

function testing(){
	innertesting();
}
function innertesting(){
	return 5;
}

// this logs undefined
console.log(test);

var test2 = testing();

function testing(){
	return innertesting();
}
function innertesting(){
	return 5;
}

// this logs 5
console.log(test2);