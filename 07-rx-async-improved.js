var request = require('superagent');
var Rx = require('rxjs');

/**
 * Instructions:
 * Let's move from a static subject to a async subject!
 *
 * 1. Using new code, we are going to make a request to a mock server
 * 2. To do this, we will use `fromPromise`, similar to the `from` from earlier
 * 3. And, rather than it wrapping an array, it needs to wrap the below function:
 *    `request.get('https://jsonplaceholder.typicode.com/users')`
 * 3. Console log out the result in your subscribe
 *
 * Is that what you wanted?
 */

var asyncTask$ = Rx.Observable.create(function (observer) {
	request
		.get('https://jsonplaceholder.typicode.com/users')
		.then(function (res) {
			observer.next(res.body);
			observer.complete();
		});
	});

 asyncTask$.subscribe(
	function (data) {
		console.log(JSON.stringify(data, null, 4));
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('I have completed.');
	}
);