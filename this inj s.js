// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
function demo()
{
    this.name="xyz";
    console.log(this);
}
demo();
new demo();
.................................................................
var object=
{
    fname:"shivam",
    lname:"kumar",
    printname: function()
    {
        console.log(this);
        console.log("my name is "+this.fname + this.lname)
    }
}
object.printname();
..................................................

var object=
{
    fname:"shivam",
    lname:"kumar",
    printname: function()
    {
        //console.log(this);
        console.log("my name is "+this.fname + this.lname)
    }
}
//object.printname();

var output=object.printname;
output();

.....................................................
var object=
{
    fname:"shivam",
    lname:"kumar",
    printname: function()
    {
        console.log(this);
        //console.log("my name is "+this.fname + this.lname)
    }
}
//object.printname();

var output=object.printname;
output();
