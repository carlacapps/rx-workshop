var request = require('superagent');
var Rx = require('rxjs');

var todos$ = Rx.Observable.create(function (observer) {
		request
			.get('https://jsonplaceholder.typicode.com/users')
			.then(function (res) {
				res.body.forEach(function (user) {
					observer.next(user);
				});
				observer.complete();
			});
	})
	.find(function (user) {
		return 'Leopoldo_Corkery' === user.username;
	})
	.mergeMap(
		function (user) {
			return Rx.Observable.create(function (observer) {
				request
					.get(`https://jsonplaceholder.typicode.com/users/${user.id}`)
					.then(function (res) {
						observer.next(res.body);
						observer.complete();
					});
			})
			.map(function (user) {
				return user.address;
			});
		}
	);

todos$.subscribe(
	function (data) {
		console.log(data);
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('I have completed.');
	}
);
