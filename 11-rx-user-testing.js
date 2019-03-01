var test = require('tape');
var userModule = require('./10-rx-exported-functions');

test('Test methods of user module', function (t) {
	/**
	 * Test the two exported methods from the previous code.
	 * Use the below mock data for testing
	 */
	var mockUsers = [{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":6,"name":"Mrs. Dennis Bremmer","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}}],
	var mockTodos = [{"userId":1,"id":1,"title":"delectarius aut autem","completed":false},{"userId":1,"id":2,"title":"quis ut nam facilis et officia qui","completed":true},{"userId":1,"id":3,"title":"fugiat veniam minus","completed":false},{"userId":1,"id":4,"title":"et porro tempora","completed":true}];
	var mockLeopoldo = {"id":6,"name":"Mrs. Dennis Bremmer","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}};
	var mockIncompleteTodos = [{"userId":1,"id":1,"title":"delectarius aut autem","completed":false},{"userId":1,"id":3,"title":"fugiat veniam minus","completed":false}];

	/**
	 * 1. Import the find method from the `userModule`
	 * 2. Using the `mockUsers` above, feed it into the function to find Leopoldo
	 * 3. Test the output of that function against the `mockLeopoldo`
	 * 4. Using the `mockTodos` above, feed the collection into the filter function for
	 *    incomplete todos
	 * 5. Test the output of that function against the `mockIncompleteTodos`
	 */

	t.deepEqual(loepoldoResult, mockLeopoldo, 'The `find` logic was able to find Leopoldo!');
	t.deepEqual(todoFilterResult, mockIncompleteTodos, 'The filter was able to remove the completed todos!')
	t.end();
});