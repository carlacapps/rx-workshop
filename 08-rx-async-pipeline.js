var request = require('superagent');
var Rx = require('rxjs');

/**
 * Instructions:
 * Your devs are telling you the collection of users
 * is too much data. Trim it down!!
 *
 * 1. Using the map method on the observable, iterate over each user
 * 2. Within this map function, trim the `address` and `company` properties
 *    off the object and return it
 * 2. Console log the output
 *
 * Not getting what you want? How would you fix that? Hint: iterate, using
 * a `forEach()` over the array of users in the `then` method and emit,
 * using `observer.next()`, each user separately.
 *
 * Try again!
 */

var asyncTask$ = Rx.Observable.create(function (observer) {
	request
		.get('https://jsonplaceholder.typicode.com/users')
		.then(function (res) {
			res.body.forEach(function (user) {
				observer.next(user);
			});
			observer.complete();
		});
	})
	.map(function (user) {
		var copy = Object.assign({}, user);
		delete copy.address;
		delete copy.company;
		return copy;
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