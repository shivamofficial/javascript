var x=10;
console.log(x); //10
x=10+"hello";
console.log(x); //10hello
x=10+4+"hello";
console.log(x); //10hello

var y=10;
console.log(y); //10
y="hello"+10;
console.log(y); //hello10
y="hello"+10+4+5;
console.log(y); //hello1045

In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

In the second example, since the first operand is a string, all operands are treated as strings.


let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'Volvo XC60';   // Using single quotes

