var pokemon = {

    firstname: 'Pika',

    lastname: 'Chu ',

    getPokeName: function() {

        var fullname = this.firstname + ' ' + this.lastname;

      console.log(fullname) ;

    }

};

var output=pokemon.getPokeName;

output(); //undefined undefined

// undefined because in a recent javascript version the window object has property called name which has a value equal to empty string ""



// we want this point to pokeman object not to window object 

//we can apply bind method to point object pokemon inplace of window

var output=pokemon.getPokeName.bind(pokemon);

output(); // Pika Chu 

example

const person = {

  firstName:"John",

  lastName: "Doe",

  fullName: function () {

console.log(this.firstName + " " + this.lastName);

  }

}



const member = {

  firstName:"Hege",

  lastName: "Nilsen",

}

person.fullName.call(member);//Hege Nilsen



var output=person.fullName;

output(); //undefined undefined

// i want  it point to person object in place of global object

var output2=person.fullName.bind(person);

output2();//John Doe



let output3=person.fullName.bind(member);


output3();//Hege Nilsen



example

var person={

    name:"john",

    ask:function()

    {

        console.log(this);

    }

}

new(person.ask.bind(person)) ();  // ask {}

// it point to person object

// bind create a new function var person={

    name:"john",

    ask:function()

    {

        console.log(this);

    }

}

new(person.ask.bind(person)) ();  // ask {}

// it point to person object 

// new object used to crteate object var person={

    name:"john",

    ask:function()

    {

        console.log(this);

    }

}

new(person.ask.bind(person)) ();  // ask {}

// it point to person object 

// new object used to crteate object

// bind create a new function

// after that you call it 

// then you get output ,point to person object

// bind create a new function ; using the new ‘keyword’.







