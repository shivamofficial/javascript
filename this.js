var student={
    fname:"shivam",
    lname:"kumar",
    age:22,
    fullname:function(){
        return this.fname+" "+this.lname;
    }
};

console.log(student.fname);
console.log(student["lname"]);
console.log(student.fullname);
console.log(student.fullname());


shivam
kumar
function() { return this.fName + " " + this.lName; }
shivam kumar

In an object method, this refers to the object.

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
