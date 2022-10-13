var mypromise=new Promise(
    function(resolve,reject)
    {
        resolve("promise fulfill")
    }
)
mypromise.then(
    function (success)
    {
        console.log(success);
    },
    function(error)
    {
        console.log(error);
    }
)

var mypromise=new Promise(
    function(resolve,reject)
    {
        reject("promise reject")
    }
)
mypromise.then(
    function (success)
    {
        console.log(success);
    },
    function(error)
    {
        console.log(error);
    }
)


function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
