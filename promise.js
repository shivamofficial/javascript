var promise = new Promise(function(resolve, reject) {
	reject('Promise Rejected')
})

promise
	.then(function(successMessage) {
		console.log(successMessage);
	}, function(errorMessage) {
	//error handler function is invoked
		console.log(errorMessage);
	})
var promise = new Promise(function(resolve, reject) {
const x = "geeksforgeeks";
const y = "geeksforgeeks"
if(x === y) {
	resolve();
} else {
	reject();
}
});

promise.
	then(function () {
		console.log('Success, You are a GEEK');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
