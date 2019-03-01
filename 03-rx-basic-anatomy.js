var Rx = require('rxjs');

/**
 * Instructions:
 * Copy the previous code and past it here. Then,
 * Split the Rx program into the following pieces,
 *
 * 1. Source
 * 2. Observer
 * 3. Pipeline
 * 4. Subscription
 *
 * NOTE: Preserve the functionality.
 */

// Source
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

// Observer
var users$ = Rx.Observable.from(names);

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
		
		return Object.assign(user, { userName: userName });
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