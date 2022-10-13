Promise.race()
● Promise.all()
● Promise.any()
● Promise.allSettled()
Promise.race():
The Promise.race() method takes an iterable of promises as an input, and returns a
single Promise that resolves into the first resolved or rejected promise.
Example:
const promise1 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(1)
},100)
})
const promise2 = () => new Promise((resolve,reject) => {
resolve(2)
})
const promise3 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(3)
})
})
Promise.race([promise1(),promise2(),promise3()])
.then((val) => {
console.log(val) // 2
})
.catch((err) => {
console.log(err)
})
Promise.all():
The Promise.all() method takes an iterable of promises as an input, and returns a
single promise that resolves to an array of the results of the input promises. This
returned promise will resolve when all of the input's promises have resolved, or if the
input iterable contains no promises. It rejects immediately upon any of the input
promises rejecting or non-promises throwing an error, and will reject with this first
rejection message / error.
Example:
const promise1 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(1)
},100)
})
const promise2 = () => new Promise((resolve,reject) => {
resolve(2)
})
const promise3 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(3)
})
})
Promise.all([promise1(),promise2(),promise3()])
.then((val) => {
console.log(val) // [1,2,3]
})
.catch((err) => {
console.log(err)
})
Promise.any():
Promise.any() takes an iterable of Promise objects and, as soon as one of the
promises in the iterable fulfills, returns a single promise that resolves with the value from
that promise. If no promises in the iterable fulfill (if all of the given promises are
rejected), then the returned promise is rejected with an AggregateError, a new
subclass of Error that groups together individual errors.
const promise1 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(1)
},100)
})
const promise2 = () => new Promise((resolve,reject) => {
reject(2)
})
const promise3 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(3)
})
})
Promise.any([promise1(),promise2(),promise3()])
.then((val) => {
console.log(val) // 3
})
.catch((err) => {
console.log(err)
})
Promise.allSettled():
The Promise.allSettled() method returns a promise that resolves after all of the given
promises have either fulfilled or rejected, with an array of objects that each describes
the outcome of each promise.
const promise1 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(1)
},100)
})
const promise2 = () => new Promise((resolve,reject) => {
reject(2)
})
const promise3 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve(3)
})
})
Promise.allSettled([promise1(),promise2(),promise3()])
.then((val) => {
console.log(val) // 3
})
.catch((err) => {
console.log(err)
})
// Output:
// [
// { status: 'fulfilled', value: 1 },
// { status: 'rejected', reason: 2 },
// {
