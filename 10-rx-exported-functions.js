var request = require('superagent');
var Rx = require('rxjs');

/**
 * Instructions:
 * We need to complete a list of todos of a given user
 *
 * 1. Call the collection of `/users`
 * 2. Within the pipeline, `.find()` the username "Leopoldo_Corkery"
 * 3. Using the `mergeMap()` pipeline operator, call another request:
 *    `GET /users/<id>/todos`
 * 4. `.filter()` the results of the todos for only the incomplete todos
 * 5. Make sure the functions for the `find` on #2 and the `filter` on #4
 *    are also named, exported functions for testing.
 *
 * Console log the result. Do you have only the completed todos of Leopoldo?
 */