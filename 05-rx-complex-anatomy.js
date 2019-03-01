var Rx = require('rxjs');

// Subject
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston', false ];

// Observer
var users$ = Rx.Observable.create(function (observer) {
	names.forEach(function (name) {
		if (!name) {
			observer.error("Error: Name is false!");
		}
		observer.next(name);
	});
	observer.complete();
});

// Pipeline
var userPipeline$ = users$.map(function (name) {
		var nameArr = name.split(' ');
		return {
			firstName: nameArr[0],
			lastName: nameArr[1]
		}
	})
	.map(function (user) {
		var userKey = user.firstName.toLowerCase() + user.lastName;
		return Object.assign(user, { key: userKey });
	})
	.reduce(function (previous, next) {
		previous[next.key] = next;
		return previous;
	}, {});

userPipeline$.subscribe(
	function next(data) {
		console.log(data);
	},
	function error(err) {
		console.log(err);
	},
	function complete() {
		console.log("I have completed.");
	}
)
