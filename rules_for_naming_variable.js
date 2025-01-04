"use strict";

// rules for vaiables 
// you cannot start with number
// examples

// 1value         (invalid)

// value1         (valid)

var value1=10;
console.log(value1);
console.log(value1 + 10);
console.log(value1 - 5);
console.log(value1 * 3);
console.log(value1 / 2);

// printing Qube value
var value=2;
console.log(value ** 2);
console.log(value ** 3);

// printing square root value of 2
var values=2;
console.log( "square root value of 2-->", values ** 0.5);

// you can use only underscore ( _ ) or dollar ( $ ) symbol

// first_name  (valid)
// _fist_name  (valid)

var first_name = ("Prince");     // snake case writing
console.log(first_name);
var _firstname = ("Mohan");
console.log(_firstname);

// fisrt$name  (valid)
// $fistname   (valid)

var fisrt$name =("Aman");
console.log(fisrt$name);
var $fisrtname =("Rohit");
console.log($fisrtname);

// you can not use spaces 

// fist name   (invalid)

// convention
// start with small later  and camelcase 


var fistname = ("Rutav");
console.log(fistname);
var Fisrtname =("Virat");
console.log(Fisrtname);