const myobj = {
  name: "John",
  age: 30,
  cars: [
      {
         name:"ford",
      model:["Fiesta", "Focus", "Mustang"]
      },
      
      {
          name:"bmw",
      model:["320", "X3", "X5"]
      }
      
      ]
}

console.log(myobj.cars);

for(let i in myobj.cars)
{
    console.log(myobj.cars[i].name)
    
   for(let j in myobj.cars[i].model)
   {
       //console.log(j);
      console.log(myobj.cars[i].model[j]);
   }
    
}

