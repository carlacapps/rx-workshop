var request = require('superagent');
var Rx = require('rxjs');

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
	.find(function (user) {
		return user.username === 'Leopoldo_Corkery';
	})
	.flatMap(function (user) {
		return Rx.Observable.create(function (observer) {
			request
				.get(`https://jsonplaceholder.typicode.com/users/${ user.id }`)
				.then(function (res) {
						observer.next(res.body);
						observer.complete();
				});
			})
			.map(function (user) {
				return user.address;
			})
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