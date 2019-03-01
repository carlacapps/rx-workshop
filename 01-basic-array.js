// Subject
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston' ];

// Pipeline
/**
 * Instructions:
 * Produce an array of objects with keys firstName, lastName and userName
 * from the above array.
 */
var usersPipeline = names.map(function (name) {
		/**
		 * return { firstName: result[0], lastName: result[1] }
		*/
	})
	.map(function (user) {
		/**
		 * return { firstName: "John", lastName: "Doe", userName: "johnDoe" }
		 */
	});

/**
 * Why TWO maps? Good question!
 */

/**
 * Want more of a challenge? Use a `reduce()` and create a user object, rather than a collection
 * keyed off of the `userName` you just created. E.g.:
 *
 * {
 *    sarahSmith: {
 *      firstName: "Sarah",
 *      lastName: "Smith",
 *      userName: "sarahSmith"
 *    },
 *    adamScott: {
 *      firstName: "Adam",
 *      lastName: "Scott",
 *      userName: "adamScott"
 *    }
 *    // ...
 * }
 */

console.log(usersPipeline);