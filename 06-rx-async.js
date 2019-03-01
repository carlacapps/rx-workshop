var request = require('superagent');
var Rx = require('rxjs');

var todos$ = Rx.Observable.fromPromise(
		request
			.get('https://jsonplaceholder.typicode.com/users')
	);

todos$.subscribe(
	function (data) {
		console.log(data.body);
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('I have completed.');
	}
);
