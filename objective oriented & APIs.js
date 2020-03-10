/*
*objects, Interfaces, and APIs
 */

let dog = {
	name: "doggo",
	color: "brown",
	breed: "pug",
	size: "small",
	bark: function (typeOfBark){
		console.log ("bark!");
	},
};

function x(y) {
	y.num = y.num + 5;
	consloe.log(y);
}

let y = {
	name: "tom",
	num: 10,
};
x(y);
console.log(y);
/* Im still not getting this!*/