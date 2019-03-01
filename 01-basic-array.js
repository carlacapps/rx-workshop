// Subject
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

// Pipeline
var usersPipeline = names.map(function (name) {
		/*
		 * return { firstName: result[0], lastName: result[1] }
		*/
	})
	.map(function (user) {
		/*
		 * return { firstName: "John", lastName: "Doe", userName: "johnDoe" }
		 */
	});

console.log(usersPipeline);