Example:
Consider the following code snippet:
const promise1 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve("resolved 1!",100)
})
})
const promise2 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve("resolved 2!",100)
})
})
function asyncAwait() {
promise1()
.then((result) => {
console.log(result)
return promise2()
})
.then((result) => {
console.log(result)
})
}
asyncAwait()
It can also be written like this using async/await:
const promise1 = () => new Promise((resolve,reject) => {
setTimeout(() => {
resolve("resolved 1!",100)
})
})
const promise2 = () => new Promise((resolve,reject) => {
setTimeout(() => {
