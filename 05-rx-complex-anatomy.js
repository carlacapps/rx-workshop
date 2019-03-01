var Rx = require('rxjs');

/**
 * Instructions:
 * 1. Copy the previous code and paste it here.
 * 2. Add an error handler in the create method that calls
 *    `observer.error('Error: Name is false!') when name is falsy
 * 2. Now add error handling and subscribe with all
 *    three of the methods:
 *    - next
 *    - error
 *    - complete
 *
 * You should be getting the same user object. Now, test what
 * happens when you add a `false` to the names. Notice how the
 * complete wasn't called. That's because `error` is also `complete`
 */

// Source
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

// Observer
var users$ = Rx.Observable.create(function (observer) {
		names.forEach(function (name) {
			if (typeof name !== 'string') {
				observer.error('Error: value not a string');
			}
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
	function onNext(data) {
		console.log(JSON.stringify(data, null, 4));
	},
	function onError(err) {
		console.log(err);
	},
	function onComplete() {
		console.log("I have completed.");
	}
);