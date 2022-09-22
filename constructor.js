function createstudent(name,roll,marks)
{
    this.name=name,
    this.roll=roll,
    this.marks=marks
    console.log(this);
}

var student2=new createstudent('a',10,33);

var student1=createstudent('a',10,33);

function User(name) {
this.name = name;
this.isAdmin = false;
return;
}
var user = User("Julie");
console.log(user);


var obj = {};
function A() { return obj; }
function B() { return obj; }
console.log( new A() == new B() );
