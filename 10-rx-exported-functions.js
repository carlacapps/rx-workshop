var request = require('superagent');
var Rx = require('rxjs');

function findUser(user) {
	return 'Leopoldo_Corkery' === user.username;
}
function filterCompleted (todo) {
	return !todo.completed;
}

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
	.find(findUser)
	.mergeMap(
		function (user) {
			return Rx.Observable.create(function (observer) {
				request
					.get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
					.then(function (res) {
						res.body.forEach(function (todo) {
							observer.next(todo);
						});
						observer.complete();
					});
			})
		}
	)
	.filter(filterCompleted);

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

module.exports = {
	findUser,
	filterCompleted
}
