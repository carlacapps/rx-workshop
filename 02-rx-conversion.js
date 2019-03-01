var Rx = require('rxjs');

// Subject
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

// Pipeline
var usersObj$ = Rx.Observable.from(names)
	.map(function (name) {
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
	}, {})
	.subscribe(function (data) {
		console.log(JSON.stringify(data, null, 4));
	});