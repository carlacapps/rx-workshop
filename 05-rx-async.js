var request = require('superagent');
var Rx = require('rxjs');

var todos$ = Rx.Observable.create(function (observer) {
	request
		.get('https://jsonplaceholder.typicode.com/users')
		.then(function (res) {
			observer.next(res.body);
			observer.complete();
		});
	});

todos$.subscribe(
	function (data) {
		console.log(data); // Is this what you wanted?
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('I have completed.');
	}
);