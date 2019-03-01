var Rx = require('rx');

var stream1$ = Rx.Observable.create(function (observer) {
	observer.onNext('hi');
	observer.onCompleted();
});

function addToStream$() {
	var stream2$ = stream1$;
	stream2$.map(function (data) {
		return 'hello';
	});
	return stream2$;
}

addToStream$().subscribe(
	function (data) {
		console.log(data);
	}
)