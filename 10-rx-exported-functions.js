var request = require('superagent');
var Rx = require('rxjs');

/**
 * Instructions:
 * We need to complete a list of todos of a given user
 *
 * 1. Call the collection of `/users`
 * 2. Within the pipeline, `.find()` the username "Leopoldo_Corkery"
 * 3. Using the `mergeMap()` pipeline operator, call another request:
 *    `GET /users/<id>/todos`
 * 4. `.filter()` the results of the todos for only the incomplete todos
 * 5. Make sure the functions for the `find` on #2 and the `filter` on #4
 *    are also named, exported functions for testing.
 *
 * Console log the result. Do you have only the completed todos of Leopoldo?
 */

 function findUser(user) {
	return user.username === 'Leopoldo_Corkery';
 }

 function filterCompleted(todo) {
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
	.flatMap(
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
		console.log(JSON.stringify(data, null, 4));
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