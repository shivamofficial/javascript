 Call() method

it is  a predefined javascript method.

with call() method , an object can use a method belonging to another object.

Using the JavaScript call() method for function borrowing
example:

var introduction1 ={

    name:"shivam",

    qualification:"B.tech",

    adress:"new delhi",

    branch:"cse",

    printintro:function()

    {

        console.log("my name is "+this.name +" and I am from " +this.adress +" and currently doing "+this.qualification+" in "+this.branch);

    }

}

console.log(introduction1);// print object

console.log(introduction1.printintro());





var introduction2={

    name:"Rj",

     qualification:"B.tech",

    adress:"mumbai",

    branch:"mechanical"

}

// i want to use method of introduction1 for our convenience

// without writing method in introduction2 object how can we use it?

// at this place a new concept come call

// we use call method 

introduction1.printintro.call(introduction2);

output:



{ name: 'shivam',

  qualification: 'B.tech',

  adress: 'new delhi',

  branch: 'cse',

  printintro: [Function: printintro] }

my name is shivam and I am from new delhi and currently doing B.tech in cse

undefined

my name is Rj and I am from mumbai and currently doing B.tech in mechanical



passing parameter

................................
var youtuber1={
    channelname:"Istudy",
    content:"webdev",
    features: function(rating,support)
    {
        console.log(`very friendly way of teaching .${this.channelname} is my favourite ${this.content} channel. I will love to give ${rating} star. Please ${support} ${this.channelname} channel`);
    }
}
youtuber1.features(5,"subscribe");


var youtuber2={
     channelname:"studyAdda",
    content:"programming"
}
youtuber1.features.call(youtuber2,4,"subscribe")
