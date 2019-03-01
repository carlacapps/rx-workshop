var Rx = require('rxjs/Rx');

var stream1$ = Rx.Observable.create(function (observer) {
	observer.next('hi');
	observer.complete();
});

var stream2$ = stream1$.map(function (data) {
	return 'hello';
});

stream2$.subscribe(
	function (data) {
		console.log(data);
	}
)