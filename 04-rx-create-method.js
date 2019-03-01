var Rx = require('rxjs');

/**
 * Instructions:
 * 1. Copy the previous code and paste it here.
 * 2. Convert the `from` method to a `create` method
 *
 */


// Source
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

// Observer
var users$ = Rx.Observable.create(function (observer) {
		names.forEach(function (name) {
			observer.next(name);
		});
		observer.complete();
	});

// Pipeline
var userPipeline$ = users$.map(function (name) {
		var namesArray = name.split(' ');

		return { 
			firstName: namesArray[0], 
			lastName: namesArray[1] 
		}
	})
	.map(function (user) {
		var userName = user.firstName.toLowerCase() + user.lastName;
		
		return Object.assign(user, { key: userName });
	})
	.reduce(function (previous, next) {
		previous[next.key] = next;
		return previous;
	}, {});

//Subscription
userPipeline$.subscribe(
	function (data) {
		console.log(JSON.stringify(data, null, 4));
	}
);